import { renderLayout } from "../components/layout.js";
import { getComplaints, updateComplaintStatus } from "../models/complaintModel.js";
renderLayout();
const content = document.getElementById("pageContent");
function draw() {
 content.innerHTML = `<h2>Customer Complaints</h2><table><thead><tr><th>ID</th><th>Customer</th><th>Subject</th><th>Date</th><th>Status</th></tr></thead><tbody>
 ${getComplaints().map(c=>`<tr><td>${c.id}</td><td>${c.customer}</td><td>${c.subject}</td><td>${c.date}</td><td><select data-id="${c.id}">${["Pending","Under Review","Resolved","Forwarded"].map(s=>`<option ${c.status===s?"selected":""}>${s}</option>`).join("")}</select></td></tr>`).join("")}</tbody></table>`;
 content.querySelectorAll("select").forEach(el=>el.addEventListener("change",e=>updateComplaintStatus(e.target.dataset.id,e.target.value)));
}
draw();
