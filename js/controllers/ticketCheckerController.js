import { renderLayout } from "../components/layout.js";
import { getTicketCheckers, assignChecker } from "../models/ticketCheckerModel.js";
import { getTrips } from "../models/tripModel.js";
renderLayout();
const content = document.getElementById("pageContent");
function draw() {
 const staff = getTicketCheckers(), trips = getTrips();
 content.innerHTML = `<h2>Ticket-Checker List</h2><p class="assignment-help">Select a trip to assign a ticket-checker. Sample changes remain in memory until refresh.</p>
<table><thead><tr><th>ID</th><th>Name</th><th>Phone</th><th>Assigned Trip</th><th>Action</th></tr></thead><tbody>
${staff.map(s=>`<tr><td>${s.id}</td><td>${s.name}</td><td>${s.phone}</td><td>${s.assigned}</td><td><select data-id="${s.id}"><option value="">Choose trip</option>${trips.map(t=>`<option value="${t.id}">${t.id}</option>`).join("")}</select><button data-assign="${s.id}">Assign</button></td></tr>`).join("")}</tbody></table>`;
 content.querySelectorAll("[data-assign]").forEach(btn=>btn.addEventListener("click",()=>{const select=btn.parentElement.querySelector("select");if(!select.value){alert("Please select a trip.");return;}assignChecker(btn.dataset.assign,select.value);draw();}));
}
draw();
