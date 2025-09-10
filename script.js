let toggleBtn = document.querySelector(".toggle-btn");
let sidebar   = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});
