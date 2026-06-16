const hamburgerMenu = document.getElementById("hamburger-menu");
const mediaQuery = window.matchMedia("(min-width: 1024px)");

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    hamburgerMenu.classList.add("hidden");
  }
});

const toggleMenu = () => {
  hamburgerMenu.classList.toggle("hidden");
};
