function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

window.onscroll = () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    document.querySelector('footer').style.background = "var(--bg-color)";
  } else {
    document.querySelector('footer').style.background = "white";
  }
}

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Nav hamburger selections

const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Hamburger menu function

burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Close hamburger menu when a link is clicked

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// Select onClick top skills