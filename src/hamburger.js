export function initializeHamburger() {
  document.addEventListener("click", function (event) {
    const icon = event.target.closest(".material-design-hamburger__icon");
    if (!icon) return; // クリックされた要素がアイコンでなければ何もしない

    document.body.classList.toggle("background--blur");
    icon.parentNode.nextElementSibling.classList.toggle("menu--on");

    // querySelectorを使用して直接クラスリストにアクセス
    const layer = icon.querySelector(".material-design-hamburger__layer");
    if (layer.classList.contains("material-design-hamburger__icon--to-arrow")) {
      layer.classList.remove("material-design-hamburger__icon--to-arrow");
      layer.classList.add("material-design-hamburger__icon--from-arrow");
    } else {
      layer.classList.remove("material-design-hamburger__icon--from-arrow");
      layer.classList.add("material-design-hamburger__icon--to-arrow");
    }
  });
}
