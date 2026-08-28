import type { LunarCycle, WindowId, TransitionType } from '../types/solar';

export const PHASES = [
  { name: 'Neumond', icon: '🌑' },
  { name: 'Zunehmende Sichel', icon: '🌒' },
  { name: 'Erstes Viertel', icon: '🌓' },
  { name: 'Zunehmender Mond', icon: '🌔' },
  { name: 'Vollmond', icon: '🌕' },
  { name: 'Abnehmender Mond', icon: '🌖' },
  { name: 'Letztes Viertel', icon: '🌗' },
  { name: 'Abnehmende Sichel', icon: '🌘' },
];

const SYNODIC_MONTH = 29.530588853;

/**
 * Astronomical Moon Details using Jean Meeus' high-precision algorithm.
 * Calculates exact lunar elongation D (0..360°), illumination fraction (0..1), and phase angle.
 */
export function getAstronomicalMoonPhase(date: Date) {
  const time = date.getTime();
  const jd = (time / 86400000.0) + 2440587.5;
  const T = (jd - 2451545.0) / 36525;
  
  let D = 297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + (T * T * T) / 545868;
  D = ((D % 360) + 360) % 360;
  
  let M = 357.5291092 + 35999.0502909 * T - 0.0001536 * T * T;
  M = ((M % 360) + 360) % 360;
  
  let Mprime = 134.9633964 + 477198.8675055 * T + 0.0087414 * T * T;
  Mprime = ((Mprime % 360) + 360) % 360;
  
  const dRad = D * Math.PI / 180;
  const mRad = M * Math.PI / 180;
  const mpRad = Mprime * Math.PI / 180;
  
  let i = 180 - D - 6.289 * Math.sin(mpRad) + 2.100 * Math.sin(mRad) - 1.274 * Math.sin(2 * dRad - mpRad)
      - 0.658 * Math.sin(2 * dRad) - 0.214 * Math.sin(2 * mpRad) - 0.110 * Math.sin(dRad);
  i = ((i % 360) + 360) % 360;

  const illuminated = (1 + Math.cos(i * Math.PI / 180)) / 2;
  
  return { D, illuminated, phaseAngle: i };
}

/**
 * Finds the exact Date of the nearest astronomical Full Moon (D = 180°).
 */
export function findClosestFullMoon(targetDate: Date): Date {
  const current = getAstronomicalMoonPhase(targetDate);
  let diffDeg = 180 - current.D;
  if (diffDeg > 180) diffDeg -= 360;
  if (diffDeg < -180) diffDeg += 360;
  
  const daysToFullMoon = diffDeg / 12.190749;
  return new Date(targetDate.getTime() + daysToFullMoon * 86400000);
}

/**
 * Calculates Moon Age in days (0 .. 29.53).
 */
export const getMoonAge = (date: Date): number => {
  const moon = getAstronomicalMoonPhase(date);
  return (moon.D / 360.0) * SYNODIC_MONTH;
};

/**
 * Main Lunar Cycle calculator for Solar Nutrition app.
 */
export const getLunarCycle = (trueSolarTime: Date | null): LunarCycle => {
  if (!trueSolarTime) {
    return {
      phaseName: 'Unbekannt',
      phaseIcon: '🌙',
      isFullMoonDay: false,
      isLunarWeek: false,
      lunarPhase: 'NotInWeek',
      dayOfLunarWeek: 0,
      lunarWeekDayLabel: '',
      fullMoonDate: null,
    };
  }

  const exactFullMoon = findClosestFullMoon(trueSolarTime);

  // Normalize Full Moon to local calendar day (00:00:00)
  const fullMoonCalendarDay = new Date(exactFullMoon);
  fullMoonCalendarDay.setHours(0, 0, 0, 0);

  const targetCalendarDay = new Date(trueSolarTime);
  targetCalendarDay.setHours(0, 0, 0, 0);

  // Day offset relative to Full Moon Day (0 = Full Moon Day)
  const dayOffsetFromFullMoon = Math.round(
    (targetCalendarDay.getTime() - fullMoonCalendarDay.getTime()) / 86400000
  );

  let isLunarWeek = false;
  let dayOfLunarWeek = 0;
  let lunarWeekDayLabel = '';
  let lunarPhase: LunarCycle['lunarPhase'] = 'NotInWeek';

  // 7-Day Lunar Week: Days -3, -2, -1, 0 (Full Moon), +1, +2, +3
  if (dayOffsetFromFullMoon >= -3 && dayOffsetFromFullMoon <= 3) {
    isLunarWeek = true;
    dayOfLunarWeek = dayOffsetFromFullMoon + 4; // Day 1..7 (Day 4 is Full Moon Day)

    if (dayOfLunarWeek === 1) {
      lunarPhase = 'PreFullMoon';
      lunarWeekDayLabel = 'Drei Tage vor Vollmond';
    } else if (dayOfLunarWeek === 2) {
      lunarPhase = 'PreFullMoon';
      lunarWeekDayLabel = 'Zwei Tage vor Vollmond';
    } else if (dayOfLunarWeek === 3) {
      lunarPhase = 'PreFullMoon';
      lunarWeekDayLabel = 'Ein Tag vor Vollmond';
    } else if (dayOfLunarWeek === 4) {
      lunarPhase = 'FullMoonDay';
      lunarWeekDayLabel = 'Vollmond';
    } else if (dayOfLunarWeek === 5) {
      lunarPhase = 'PostFullMoon';
      lunarWeekDayLabel = 'Erster Tag nach Vollmond';
    } else if (dayOfLunarWeek === 6) {
      lunarPhase = 'PostFullMoon';
      lunarWeekDayLabel = 'Zweiter Tag nach Vollmond';
    } else if (dayOfLunarWeek === 7) {
      lunarPhase = 'PostFullMoon';
      lunarWeekDayLabel = 'Dritter Tag nach Vollmond';
    }
  }

  // Determine General Display Phase Name & Icon
  const moon = getAstronomicalMoonPhase(trueSolarTime);
  const phaseIndex = Math.floor((moon.D / 360.0) * 8 + 0.5) & 7;
  let generalPhase = PHASES[phaseIndex];

  if (moon.illuminated >= 0.96) {
    generalPhase = { name: 'Vollmond', icon: '🌕' };
  }

  let displayPhaseName = generalPhase.name;
  let displayPhaseIcon = generalPhase.icon;

  if (lunarPhase === 'FullMoonDay' || dayOffsetFromFullMoon === 0) {
    displayPhaseName = 'Vollmond';
    displayPhaseIcon = '🌕';
  } else if (isLunarWeek) {
    displayPhaseName = lunarWeekDayLabel;
  }

  return {
    phaseName: displayPhaseName,
    phaseIcon: displayPhaseIcon,
    isFullMoonDay: lunarPhase === 'FullMoonDay' || dayOffsetFromFullMoon === 0,
    isLunarWeek,
    lunarPhase,
    dayOfLunarWeek,
    lunarWeekDayLabel,
    fullMoonDate: exactFullMoon,
  };
};

export const getEffectiveActiveWindow = (
  solarWindow: WindowId,
  _transition: TransitionType,
  lunarCycle: LunarCycle,
  isLunarWeekEnabled: boolean
): WindowId => {
  if (!isLunarWeekEnabled || !lunarCycle.isLunarWeek || lunarCycle.isFullMoonDay) {
    return solarWindow;
  }

  const day = lunarCycle.dayOfLunarWeek;

  // Drei, Zwei, Ein Tag vor Vollmond (Days 1-3): Shift backward
  if (day >= 1 && day <= 3) {
    if (solarWindow === 'Morning') return 'Evening';
    if (solarWindow === 'Midday') return 'Morning';
    if (solarWindow === 'Evening') return 'Midday';
  }

  // Erster, Zweiter, Dritter Tag nach Vollmond (Days 5-7): Shift forward
  if (day >= 5 && day <= 7) {
    if (solarWindow === 'Morning') return 'Midday';
    if (solarWindow === 'Midday') return 'Evening';
    if (solarWindow === 'Evening') return 'Morning';
  }

  return solarWindow;
};
