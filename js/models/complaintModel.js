import { complaints } from "../data/sampleData.js";
export const getComplaints = () => [...complaints];
export function updateComplaintStatus(id, status) {
  const complaint = complaints.find(item => item.id === id);
  if (!complaint) return false;
  complaint.status = status;
  return true;
}
