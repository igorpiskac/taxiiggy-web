export type RouteResult = {
  distanceMeters: number;
  durationSeconds: number;
  distanceKm: number;
  durationMinutes: number;
};

export function metersToKm(meters: number): number {
  return Math.round((meters / 1000) * 10) / 10;
}

export function secondsToMinutes(seconds: number): number {
  return Math.round(seconds / 60);
}