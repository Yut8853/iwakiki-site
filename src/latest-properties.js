import "./style.css";
import "./latest-properties.css";

import { update } from "./horizontalScroll";
import { init } from "./dynamicLoader";

document.addEventListener("DOMContentLoaded", () => {
  init("content-container", "latest-properties", false);
  update(); // Ensure it runs after the init function to re-apply necessary JS behaviors
});
