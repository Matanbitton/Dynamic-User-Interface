let menuContainer = document.querySelector(".container");
let mobileMenuContainer = document.querySelector(".container-mobile");
let menuMobile = document.querySelector(".menu-mobile");
const carouselContainer = document.querySelector(".carousel");
const carouselItems = document.querySelectorAll(".carousel-item");
console.log(carouselItems);

const buttons = document.querySelectorAll(".button");

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

function imgCarousel() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      let position = button.dataset["place"] === "next" ? 1 : -1;
      let activeImg = document.querySelector("[data-active]");

      let currIndex = [...carouselItems].indexOf(activeImg) + position;

      if (currIndex < 0) currIndex = carouselItems.length - 1;
      if (currIndex >= carouselItems.length) currIndex = 0;

      carouselItems[currIndex].dataset.active = true;
      delete activeImg.dataset.active;
    });
  });
}

imgCarousel();

dropDownMenu(menuContainer);

mobileMenu(mobileMenuContainer);
