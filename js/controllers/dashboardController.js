import { renderLayout } from "../components/layout.js";
import { getTrips } from "../models/tripModel.js";
renderLayout();
const trips = getTrips();
const content = document.getElementById("pageContent");
const count = status => trips.filter(t => t.status === status).length;
content.innerHTML = `
  <div class="stats-grid">
    <div class="stat-card"><p>Total Trips</p><strong>${trips.length}</strong></div>
    <div class="stat-card"><p>Running Trips</p><strong>${count("Running")}</strong></div>
    <div class="stat-card"><p>Completed Trips</p><strong>${count("Completed")}</strong></div>
    <div class="stat-card"><p>Delayed Trips</p><strong>${count("Delayed")}</strong></div>
  </div>
  <section class="content-card"><h2>Recent Trips</h2>${tripsTable(trips)}</section>
  <p class="dashboard-note">Demonstration data only. Database integration will be added later.</p>`;
function tripsTable(items) {
 return `<table><thead><tr><th>Trip ID</th><th>Route</th><th>Bus</th><th>Departure</th><th>Status</th></tr></thead><tbody>
 ${items.map(t=>`<tr><td>${t.id}</td><td>${t.route}</td><td>${t.bus}</td><td>${t.departure}</td><td><span class="status">${t.status}</span></td></tr>`).join("")}
 </tbody></table>`;
}
