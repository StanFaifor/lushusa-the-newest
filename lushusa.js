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
