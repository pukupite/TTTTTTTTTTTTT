import { renderLayout } from "../components/layout.js";
import { getTrips, updateTripStatus } from "../models/tripModel.js";
renderLayout();
const content = document.getElementById("pageContent");
function draw() {
 const rows = getTrips().map(t => `<tr><td>${t.id}</td><td>${t.route}</td><td>${t.bus}</td><td>${t.departure}</td><td><select data-id="${t.id}" class="status-select">${["Scheduled","Running","Completed","Delayed","Cancelled"].map(s=>`<option ${t.status===s?"selected":""}>${s}</option>`).join("")}</select></td></tr>`).join("");
 content.innerHTML = `<div class="toolbar"><h2>Trip List</h2><input id="search" placeholder="Search trips or routes..."></div><table><thead><tr><th>Trip ID</th><th>Route</th><th>Bus</th><th>Departure</th><th>Update Status</th></tr></thead><tbody id="tripRows">${rows}</tbody></table>`;
 content.querySelectorAll(".status-select").forEach(el=>el.addEventListener("change", e=>{updateTripStatus(e.target.dataset.id,e.target.value);}));
 document.getElementById("search").addEventListener("input", e=>{const q=e.target.value.toLowerCase();content.querySelectorAll("#tripRows tr").forEach(row=>row.hidden=!row.textContent.toLowerCase().includes(q));});
}
draw();
