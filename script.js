const toggleBtn = document.querySelector(".toggle-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  // For desktop collapse/expand
  sidebar.classList.toggle("collapsed");

  // For mobile slide-in/out
  sidebar.classList.toggle("active");
});
