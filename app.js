const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let index = 0;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(i) {
  slides.forEach(s => s.style.display = "none");
  dots.forEach(d => d.classList.remove("active"));
  slides[i].style.display = "block";
  dots[i].classList.add("active");
  index = i;
}

// Controls
prev.addEventListener("click", () => {
  index = (index === 0) ? slides.length - 1 : index - 1;
  showSlide(index);
});

next.addEventListener("click", () => {
  index = (index === slides.length - 1) ? 0 : index + 1;
  showSlide(index);
});

// Auto start
showSlide(index);

// Hamburger Menu Functionality
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navLinks = document.querySelector(".nav-links");

hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("open");
  navLinks.classList.toggle("active");
});

// Close menu when a nav link is clicked (for single-page navigation)
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor click behavior
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 100, // Adjust for fixed header height
        behavior: "smooth"
      });
    }

    hamburgerMenu.classList.remove("open");
    navLinks.classList.remove("active");
  });
});

// Close menu when clicking outside (optional, but good for UX)
document.addEventListener("click", (event) => {
  if (!navLinks.contains(event.target) && !hamburgerMenu.contains(event.target) && navLinks.classList.contains("active")) {
    hamburgerMenu.classList.remove("open");
    navLinks.classList.remove("active");
  }
});

// Initialize AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    once: true, // whether animation should happen only once - while scrolling down
  });
});
