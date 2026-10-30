import { renderLayout } from "../components/layout.js";
import { getBuses } from "../models/busModel.js";
renderLayout();
const items = getBuses();
document.getElementById("pageContent").innerHTML = `<h2>Bus List</h2><p class="bus-summary">View bus availability and operational status.</p>
<table><thead><tr><th>Bus ID</th><th>Registration</th><th>Type</th><th>Status</th></tr></thead><tbody>
${items.map(b=>`<tr><td>${b.id}</td><td>${b.number}</td><td>${b.type}</td><td><span class="status">${b.status}</span></td></tr>`).join("")}</tbody></table>`;
