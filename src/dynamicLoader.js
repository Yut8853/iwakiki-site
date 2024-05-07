// dynamicLoader.js

export function loadContent(elementId, pageName, shouldPushState = true) {
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`Element with id '${elementId}' not found`);
    return;
  }

  // エフェクトを初期化
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
      // コンテンツのロードが完了した後にエフェクトをアクティブにする
      setTimeout(() => {
        container.classList.add("transition-active");
      }, 10); // わずかな遅延を加えてCSSが適用されるのを保証

      if (shouldPushState) {
        window.history.pushState(
          { path: `/${pageName}.html` },
          "",
          `/${pageName}.html`
        );
      }
    })
    .catch((error) => console.error("Error loading content:", error));
}

window.onpopstate = function (event) {
  if (event.state) {
    loadContent("content-container", event.state.path, false);
  }
};
