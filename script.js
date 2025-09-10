// Sidebar toggle
const toggleBtn = document.getElementById("toggle-btn");
const sidebar = document.getElementById("sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active"); // CSS এ .active sidebar open করবে
});
