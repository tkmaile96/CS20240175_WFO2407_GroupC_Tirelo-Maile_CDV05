// Sidebar
const menuToggle = document.getElementById("Menu-toggle")
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
});