let dropDownMenuWrap = document.getElementById("dropDownMenuWrap");
function toggleMenu() {
  dropDownMenuWrap.classList.toggle("open-menu");
}

var navbar = document.getElementById("navbar");
var menu = document.getElementById("menu");
window.onscroll = function () {
  if (window.pageYOffset >= menu.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

const carouselItems = document.querySelectorAll(".carousel-item");
let currentItem = 0;

function showNextItem() {
  carouselItems[currentItem].classList.remove("active");
  currentItem = (currentItem + 1) % carouselItems.length;
  carouselItems[currentItem].classList.add("active");
}

carouselItems[currentItem].classList.add("active");
setInterval(showNextItem, 10000);
