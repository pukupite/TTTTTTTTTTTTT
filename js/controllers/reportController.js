import { renderLayout } from "../components/layout.js";
import { getTrips } from "../models/tripModel.js";
renderLayout();
const trips = getTrips();
const statuses = ["Scheduled","Running","Completed","Delayed","Cancelled"];
document.getElementById("pageContent").innerHTML = `<h2>Trip Summary</h2><div class="report-placeholder">Frontend sample report. Connect real trip and ticket data when the backend is ready.</div><br>
<table><thead><tr><th>Status</th><th>Number of Trips</th></tr></thead><tbody>${statuses.map(s=>`<tr><td>${s}</td><td>${trips.filter(t=>t.status===s).length}</td></tr>`).join("")}</tbody></table>`;
