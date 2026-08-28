/**
 * (C) Stefan Hodrius - Die Solar Nutrition App unterliegt der GPL GNU General Public License
 * und kann mit Namensnennung und unter Beibehaltung der Lizenzbedingungen frei weiterverwendet werden.
 */

import type { WindowId, TransitionType, SolarPhase, LocationInfo } from '../types/solar';

const toRad = (deg: number) => deg * (Math.PI / 180);

export const getDayOfYear = (date: Date): number => {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - start.getTime();
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
};

export const calculateEquationOfTime = (dayOfYear: number): number => {
  const B = toRad((360 / 365) * (dayOfYear - 81));
  return 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
};

export const calculateTrueSolarTime = (localTime: Date, longitude: number, timeZone: string): Date => {
  try {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone,
      timeZoneName: 'longOffset',
    });
    const parts = formatter.formatToParts(localTime);
    const gmtPart = parts.find((part) => part.type === 'timeZoneName');
    const offsetString = gmtPart ? gmtPart.value.replace('GMT', '') : '0';
    const timezoneOffsetHours = parseInt(offsetString, 10) || 0;

    const dayOfYear = getDayOfYear(localTime);
    const equationOfTime = calculateEquationOfTime(dayOfYear);

    const localStandardMeridian = timezoneOffsetHours * 15;
    const timeCorrectionMinutes = (4 * (longitude - localStandardMeridian)) + equationOfTime;

    const localTimeInMs = localTime.getTime();
    const solarTimeInMs = localTimeInMs + timeCorrectionMinutes * 60 * 1000;

    return new Date(solarTimeInMs);
  } catch (err) {
    console.error("Error calculating true solar time:", err);
    return localTime;
  }
};

export const getSolarPhase = (trueSolarTime: Date | null): SolarPhase => {
  if (!trueSolarTime) {
    return { window: 'Morning', transition: null, trueSolarTime: null };
  }

  const hour = trueSolarTime.getHours();
  const minute = trueSolarTime.getMinutes();

  let window: WindowId = 'Morning';
  let transition: TransitionType = null;

  if (hour < 12) {
    window = 'Morning';
  } else if (hour < 18) {
    window = 'Midday';
  } else {
    window = 'Evening';
  }

  // Exact half-hour Transition Times (Bridge / Phase-In Times):
  // 1. Morning (Zone 1) ➔ Midday (Zone 2): 11:30 – 12:00
  // 2. Midday (Zone 2) ➔ Evening (Zone 3): 18:30 – 19:00
  // 3. Evening (Zone 3) ➔ Morning (Zone 1): 00:30 – 01:00
  if (hour === 11 && minute >= 30) {
    transition = 'Dawn';
  } else if (hour === 18 && minute >= 30) {
    transition = 'Dusk';
  } else if (hour === 0 && minute >= 30) {
    transition = 'Dawn';
  }

  return { window, transition, trueSolarTime };
};

export interface NominatimAddress {
  road?: string;
  pedestrian?: string;
  street?: string;
  suburb?: string;
  neighbourhood?: string;
  house_number?: string;
  city?: string;
  town?: string;
  village?: string;
  municipality?: string;
  county?: string;
  country?: string;
}

export interface NominatimSearchResult {
  lat: string;
  lon: string;
  display_name?: string;
  address?: NominatimAddress;
}

export const formatLocationName = (
  address?: NominatimAddress | null,
  displayName?: string,
  lat?: number,
  lon?: number
): string => {
  if (address) {
    const road = address.road || address.pedestrian || address.street || address.suburb || address.neighbourhood;
    const houseNumber = address.house_number;
    const city = address.city || address.town || address.village || address.municipality || address.county;
    const country = address.country;

    let parts: string[] = [];

    if (road) {
      parts.push(houseNumber ? `${road} ${houseNumber}` : road);
    }

    if (city && city !== road) {
      parts.push(city);
    } else if (country && parts.length === 0) {
      parts.push(country);
    }

    if (parts.length > 0) {
      return parts.join(', ');
    }
  }

  if (displayName) {
    const rawParts = displayName.split(',').map((p: string) => p.trim());
    if (rawParts.length >= 2 && /^\d+[a-zA-Z]?$/.test(rawParts[0])) {
      const street = rawParts[1];
      const houseNo = rawParts[0];
      const city = rawParts[2] || '';
      return `${street} ${houseNo}${city ? `, ${city}` : ''}`;
    }

    const clean = rawParts.filter((p) => !/^\d{5}$/.test(p));
    if (clean.length >= 2) {
      return `${clean[0]}, ${clean[1]}`;
    }
    if (clean.length === 1 && clean[0]) {
      return clean[0];
    }
  }

  if (lat !== undefined && lon !== undefined) {
    const latDirection = lat >= 0 ? 'N' : 'S';
    const lonDirection = lon >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(4)}° ${latDirection}, ${Math.abs(lon).toFixed(4)}° ${lonDirection}`;
  }

  return 'Standort festlegen';
};

export const reverseGeocode = async (lat: number, lon: number): Promise<string> => {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18`);
    if (!res.ok) throw new Error("Geocoding service unavailable");
    const data: NominatimSearchResult = await res.json();
    return formatLocationName(data.address, data.display_name, lat, lon);
  } catch {
    const latDirection = lat >= 0 ? 'N' : 'S';
    const lonDirection = lon >= 0 ? 'E' : 'W';
    return `${Math.abs(lat).toFixed(4)}° ${latDirection}, ${Math.abs(lon).toFixed(4)}° ${lonDirection}`;
  }
};

export const geocodeAddress = async (address: string): Promise<LocationInfo | null> => {
  try {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}&limit=1&addressdetails=1`);
    if (!res.ok) throw new Error("Search failed");
    const data: NominatimSearchResult[] = await res.json();
    if (data && data.length > 0) {
      const item = data[0];
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const lat = parseFloat(item.lat);
      const lon = parseFloat(item.lon);
      const formattedName = formatLocationName(item.address, item.display_name, lat, lon);
      return {
        lat,
        lon,
        name: formattedName,
        timeZone,
      };
    }
    return null;
  } catch (err) {
    console.error("Geocoding address failed:", err);
    return null;
  }
};

export const fetchLocationSuggestions = async (query: string): Promise<LocationInfo[]> => {
  if (!query || query.trim().length < 2) return [];
  try {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&addressdetails=1`
    );
    if (!res.ok) return [];
    const data: NominatimSearchResult[] = await res.json();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    return data.map((item: NominatimSearchResult) => {
      const lat = parseFloat(item.lat);
      const lon = parseFloat(item.lon);
      const formattedName = formatLocationName(item.address, item.display_name, lat, lon);
      return {
        lat,
        lon,
        name: formattedName,
        timeZone,
      };
    });
  } catch (err) {
    console.error("Error fetching location suggestions:", err);
    return [];
  }
};
