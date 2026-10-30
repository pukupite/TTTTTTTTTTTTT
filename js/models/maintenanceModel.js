import { maintenanceRequests } from "../data/sampleData.js";
export const getMaintenanceRequests = () => [...maintenanceRequests];
export function addMaintenanceRequest(request) {
  maintenanceRequests.unshift({ id: `MR-${String(maintenanceRequests.length + 1).padStart(2, "0")}`, ...request });
}
