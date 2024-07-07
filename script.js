const HamburgerMenu = document.getElementById("Hamburger");
const MobileNavigation = document.getElementById("mobile-navigation");
const CloseHamburger = document.getElementById("close-hamburger");

function Close() {
  MobileNavigation.classList.remove("intro-animation");
  MobileNavigation.classList.add("outro-animation");
}
HamburgerMenu.addEventListener("click", () => {
  MobileNavigation.classList.remove("hide");
  MobileNavigation.classList.remove("outro-animation");
  MobileNavigation.classList.add("intro-animation");
});

CloseHamburger.addEventListener("click", Close);
