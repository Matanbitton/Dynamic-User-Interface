let menuContainer = document.querySelector(".container");
let menu = document.querySelector(".menu");

function dropDownMenu(menuContainer) {
  menuContainer.addEventListener("click", () => {
    menuContainer.classList.toggle("show-menu");
  });
}

dropDownMenu(menuContainer);
