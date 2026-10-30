import { trips } from "../data/sampleData.js";
export const getTrips = () => [...trips];
export function updateTripStatus(id, status) {
  const trip = trips.find(item => item.id === id);
  if (!trip) return false;
  trip.status = status;
  return true;
}
