import "./style.css";
import "./latest-properties.css";

import { update } from "./horizontalScroll";
import { init } from "./dynamicLoader";

document.addEventListener("DOMContentLoaded", () => {
  update();
  init("content-container", "latest-properties", false);
});
