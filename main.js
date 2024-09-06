const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcons = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    navLinks.classList.toggle("open");

    const isOpen = navLinks.contains("open");
    menuBtnIcons.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});