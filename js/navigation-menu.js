const button = document.querySelector(".menu-button")
const navigationMenu = document.querySelector(".header-menu-navigation")
const logo = document.querySelector(".logo")
const menuIcon = document.querySelector(".menu-icon");
let buttonClicked = false;
button.addEventListener("click", ()=> {
    if (buttonClicked == false) {
        navigationMenu.style.display = "flex"
        logo.style.padding = "0 0 20px 0"
        logo.style.margin = "0 0 20px 0"
        logo.style.borderBottom = "3px solid #1b6044"
        buttonClicked = !buttonClicked
    } else if (buttonClicked == true) {
        logo.style.padding = "0"
        logo.style.margin = "0"
        logo.style.border = "none"
        navigationMenu.style.display = "none"
        buttonClicked = !buttonClicked
    }
    menuIcon.classList.toggle("is-active");
});