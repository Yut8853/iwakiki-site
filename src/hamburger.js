export function initializeHamburger() {
  document.addEventListener("click", function (event) {
    const icon = event.target.closest(".material-design-hamburger__icon");
    if (!icon) return; // クリックされた要素がアイコンでなければ何もしない

    document.body.classList.toggle("background--blur");
    icon.parentNode.nextElementSibling.classList.toggle("menu--on");

    const child = icon.childNodes[1].classList;
    if (child.contains("material-design-hamburger__icon--to-arrow")) {
      child.remove("material-design-hamburger__icon--to-arrow");
      child.add("material-design-hamburger__icon--from-arrow");
    } else {
      child.remove("material-design-hamburger__icon--from-arrow");
      child.add("material-design-hamburger__icon--to-arrow");
    }
  });
}
