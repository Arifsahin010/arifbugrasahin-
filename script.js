document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("side-menu");
    const menuToggle = document.querySelector(".menu-toggle");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("show");
    });
});