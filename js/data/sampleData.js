// Temporary frontend sample data. Replace these arrays with API/database data later.
export const trips = [
  { id: "TR-1001", route: "Dhaka - Chattogram", bus: "DHA-11-2045", departure: "08:00 AM", status: "Running" },
  { id: "TR-1002", route: "Dhaka - Sylhet", bus: "DHA-12-3180", departure: "09:30 AM", status: "Scheduled" },
  { id: "TR-1003", route: "Dhaka - Rajshahi", bus: "DHA-13-4421", departure: "07:00 AM", status: "Completed" },
  { id: "TR-1004", route: "Dhaka - Khulna", bus: "DHA-14-5520", departure: "10:15 AM", status: "Delayed" }
];

export const buses = [
  { id: "BUS-01", number: "DHA-11-2045", type: "AC", status: "On Trip" },
  { id: "BUS-02", number: "DHA-12-3180", type: "Non-AC", status: "Available" },
  { id: "BUS-03", number: "DHA-13-4421", type: "AC", status: "On Trip" },
  { id: "BUS-04", number: "DHA-14-5520", type: "Non-AC", status: "Maintenance" }
];

export const ticketCheckers = [
  { id: "TC-01", name: "Rahim Ahmed", phone: "01700000001", assigned: "TR-1001" },
  { id: "TC-02", name: "Karim Hasan", phone: "01800000002", assigned: "Not Assigned" },
  { id: "TC-03", name: "Sakib Hossain", phone: "01900000003", assigned: "TR-1003" }
];

export const complaints = [
  { id: "CMP-01", customer: "Customer 01", subject: "Seat condition issue", date: "2026-10-29", status: "Pending" },
  { id: "CMP-02", customer: "Customer 02", subject: "Departure delay", date: "2026-10-29", status: "Under Review" },
  { id: "CMP-03", customer: "Customer 03", subject: "Staff behavior", date: "2026-10-28", status: "Resolved" }
];

export const maintenanceRequests = [
  { id: "MR-01", bus: "DHA-14-5520", issue: "Engine inspection", status: "Pending" },
  { id: "MR-02", bus: "DHA-12-3180", issue: "Air conditioning check", status: "Approved" }
];
