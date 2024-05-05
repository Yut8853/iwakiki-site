import "./style.css";
import { init } from "./wave.js";
import { initializeHamburger } from "./hamburger.js";
import { loadContent } from "./transitionEffects.js";

document.querySelector(".menu").addEventListener("click", function (event) {
  event.preventDefault();
  const target = event.target;

  if (target.classList.contains("content-link")) {
    const contentPath = target.getAttribute("href");
    loadContent("map", contentPath);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  init();
  initializeHamburger();
});
