export function applyTransition(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.add("blur-and-fade"); // ブラーとフェード効果を適用
  } else {
    console.error(
      `Element with id '${elementId}' not found for applyTransition.`
    );
  }
}

export function removeTransition(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.classList.remove("blur-and-fade"); // 効果を解除
  } else {
    console.error(
      `Element with id '${elementId}' not found for removeTransition.`
    );
  }
}

export function loadContent(elementId, url) {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(
      `Element with id '${elementId}' not found for loading content.`
    );
    return;
  }

  applyTransition(elementId); // ブラーとフェード効果を適用

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .then((html) => {
      setTimeout(() => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const content = doc.body.innerHTML; // bodyの内容のみを取得する

        element.innerHTML = content;
        removeTransition(elementId); // ブラーとフェードの効果を解除
      }, 500); // トランジションを見せるためのディレイ
    })
    .catch((error) => {
      console.error("コンテンツの取得に失敗しました:", error);
      removeTransition(elementId); // エラー時もトランジションを解除
    });
}
