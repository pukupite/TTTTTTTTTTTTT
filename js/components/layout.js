const links = [
  ["Dashboard", "dashboard.html"], ["Trip Management", "trips.html"],
  ["Bus Monitoring", "buses.html"], ["Ticket-Checker Assignment", "ticket-checkers.html"],
  ["Complaint Management", "complaints.html"], ["Maintenance Requests", "maintenance.html"],
  ["Reports", "reports.html"], ["My Profile", "profile.html"]
];

export function renderLayout() {
  const current = location.pathname.split("/").pop();
  const sidebar = document.getElementById("sidebar");
  const topbar = document.getElementById("topbar");
  if (sidebar) {
    sidebar.innerHTML = `<div class="brand">BUS MANAGEMENT<small>SUPERVISOR PANEL</small></div>
      <div class="nav-label">WORKSPACE</div><nav>
      ${links.map(([label, href]) => `<a class="nav-link ${current === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}
      </nav>`;
  }
  if (topbar) topbar.innerHTML = `<div class="user-chip">Supervisor &nbsp; | &nbsp; <a href="../index.html">Logout</a></div>`;
}
