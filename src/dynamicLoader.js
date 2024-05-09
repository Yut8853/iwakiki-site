// ページとスクリプトのマッピング
const scriptLoaders = {
  "latest-properties": () => import("./latest-properties.js"), // 例えば、latest-propertiesページ専用のJS
};

export function init(elementId, pageName, shouldPushState = true) {
  const container = document.getElementById(elementId);
  if (!container) {
    console.error(`Element with id '${elementId}' not found`);
    return;
  }

  fetch(`/${pageName}.html`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to load the page");
      }
      return response.text();
    })
    .then((html) => {
      container.innerHTML = html;

      // 同じ名前のCSSファイルをロード
      fetch(`/${pageName}.css`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Failed to load CSS for ${pageName}`);
          }
          return response.text();
        })
        .then((css) => {
          const styleElement = document.createElement("style");
          styleElement.textContent = css;
          document.head.appendChild(styleElement);
        })
        .catch((error) => console.error("Error loading CSS:", error));

      // スクリプトローダーの実行
      if (scriptLoaders[pageName]) {
        scriptLoaders[pageName]()
          .then((module) => {
            if (module.init) {
              module.init(); // 新しいHTMLに対してJSを初期化
            }
          })
          .catch((err) =>
            console.error(`Failed to load script for ${pageName}`, err)
          );
      }

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
    init(
      "content-container",
      event.state.path.split("/").pop().replace(".html", ""),
      false
    );
  }
};
