let menuContainer = document.querySelector(".container");
let mobileMenuContainer = document.querySelector(".container-mobile");

function dropDownMenu(menuContainer) {
  menuContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("show-menu");
  });
}

function mobileMenu(menu) {
  menu.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

dropDownMenu(menuContainer);

mobileMenu(mobileMenuContainer);
