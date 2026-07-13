// Nav Active
const navLinks = document.querySelectorAll(".nav-links a");
const mobileToggle = document.querySelector("#mobileToggle");
const navMenu = document.querySelector(".nav-links");
const toggleIcon = mobileToggle.querySelector("i");

function closeMobileMenu() {
  navMenu.classList.remove("open");
  mobileToggle.setAttribute("aria-expanded", "false");
  toggleIcon.classList.remove("fa-xmark");
  toggleIcon.classList.add("fa-bars");
}

mobileToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");

  mobileToggle.setAttribute("aria-expanded", isOpen);
  toggleIcon.classList.toggle("fa-bars", !isOpen);
  toggleIcon.classList.toggle("fa-xmark", isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    if (this.classList.contains("more")) {
      event.preventDefault();
    }

    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    this.classList.add("active");

    if (!this.classList.contains("more")) {
      closeMobileMenu();
    }
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".nav-container")) {
    closeMobileMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeMobileMenu();
  }
});
