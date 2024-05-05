import "./style.css";
import { init } from "./wave.js";
import { initializeHamburger } from "./hamburger.js";

document.addEventListener("DOMContentLoaded", () => {
  init();
  initializeHamburger();
});

const content = document.getElementById("content");
const div = document.createElement("div");
content.appendChild(div);
