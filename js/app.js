let prevScrollPos = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (prevScrollPos > currentScroll) {
    // Scrolling up, show navbar
    navbar.style.transform = "translateY(0)";
  } else {
    // Scrolling down, hide navbar
    navbar.style.transform = "translateY(-100%)";
  }

  prevScrollPos = currentScroll;
});
