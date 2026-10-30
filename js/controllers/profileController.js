import { renderLayout } from "../components/layout.js";
renderLayout();
document.getElementById("pageContent").innerHTML = `<div class="profile-form"><h2>Supervisor Profile</h2><form id="profileForm"><label>Full Name<input value="Supervisor Demo" required></label><label>Email<input type="email" value="supervisor@example.com" required></label><label>Phone<input value="01700000000"></label><button type="submit">Save Changes</button></form><p class="muted" id="message"></p></div>`;
document.getElementById("profileForm").addEventListener("submit",e=>{e.preventDefault();document.getElementById("message").textContent="Demo only: profile changes are not saved to a database.";});
