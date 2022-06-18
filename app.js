let menuContainer = document.querySelector(".container");
let mobileMenuContainer = document.querySelector(".container-mobile");
let menuMobile = document.querySelector(".menu-mobile");
function dropDownMenu(menuContainer) {
  menuContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("show-menu");
  });
}

function mobileMenu(menu) {
  menu.addEventListener("click", () => {
    if (menu.classList.contains("active")) {
      menu.classList.remove("active");
      menu.classList.add("none-active");
    } else {
      menu.classList.remove("none-active");
      menu.classList.add("active");
    }
  });
}

dropDownMenu(menuContainer);

mobileMenu(mobileMenuContainer);
