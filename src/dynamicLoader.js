// ページとスクリプトのマッピング
const scriptLoaders = {
  "latest-properties": () => import("./horizontalScroll.js"),
};

export function init(elementId, pageName, shouldPushState = true) {
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`Element with id '${elementId}' not found`);
    return;
  }

  container.classList.add("transition-effect");

  fetch(`/${pageName}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load the page");
      }
      return response.text();
    })
    .then((html) => {
      container.innerHTML = html;
      setTimeout(() => {
        container.classList.add("transition-effect");
      }, 10);

      if (shouldPushState) {
        window.history.pushState(
          { path: `/${pageName}.html` },
          "",
          `/${pageName}.html`
        );
      }

      // ページに合わせたスクリプトをロード
      if (scriptLoaders[pageName]) {
        scriptLoaders[pageName]()
          .then((module) => {
            if (module.init) {
              module.init();
            }
          })
          .catch((err) =>
            console.error(`Failed to load script for ${pageName}`, err)
          );
      }

      // update関数を呼び出し、新しいHTMLにJSを適用
      update();
    })
    .catch((error) => console.error("Error loading content:", error));
}

window.onpopstate = function (event) {
  if (event.state) {
    loadContent("content-container", event.state.path, false);
  }
};
