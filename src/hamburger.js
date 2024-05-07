export function initializeHamburger() {
  document.addEventListener("click", function (event) {
    const icon = event.target.closest(".material-design-hamburger__icon");
    const menu = document.querySelector(".menu");
    const isContentLinkClicked = event.target.closest(".content-link");
    const layer = document.querySelector(".material-design-hamburger__layer");

    // メニューアイコンをクリックした場合
    if (icon) {
      document.body.classList.toggle("background--blur");
      menu.classList.toggle("menu--on");
      if (menu.classList.contains("menu--on")) {
        layer.classList.remove("material-design-hamburger__icon--from-arrow");
        layer.classList.add("material-design-hamburger__icon--to-arrow");
      } else {
        layer.classList.remove("material-design-hamburger__icon--to-arrow");
        layer.classList.add("material-design-hamburger__icon--from-arrow");
      }
    }
    // 'content-link' クラスか他の場所をクリックした場合、メニューが開いていれば閉じる
    else if (
      menu.classList.contains("menu--on") &&
      (isContentLinkClicked || !icon)
    ) {
      document.body.classList.remove("background--blur");
      menu.classList.remove("menu--on");
      layer.classList.remove("material-design-hamburger__icon--to-arrow");
      layer.classList.add("material-design-hamburger__icon--from-arrow");
    }
  });
}
