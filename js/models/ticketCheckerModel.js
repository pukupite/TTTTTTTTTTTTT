import { ticketCheckers } from "../data/sampleData.js";
export const getTicketCheckers = () => [...ticketCheckers];
export function assignChecker(id, tripId) {
  const checker = ticketCheckers.find(item => item.id === id);
  if (!checker) return false;
  checker.assigned = tripId;
  return true;
}
