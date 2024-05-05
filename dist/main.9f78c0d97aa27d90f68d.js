/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/hamburger.js":
/*!**************************!*\
  !*** ./src/hamburger.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeHamburger: () => (/* binding */ initializeHamburger)\n/* harmony export */ });\nfunction initializeHamburger() {\n  document.addEventListener(\"click\", function (event) {\n    var icon = event.target.closest(\".material-design-hamburger__icon\");\n    if (!icon) return; // クリックされた要素がアイコンでなければ何もしない\n\n    document.body.classList.toggle(\"background--blur\");\n    icon.parentNode.nextElementSibling.classList.toggle(\"menu--on\");\n\n    // querySelectorを使用して直接クラスリストにアクセス\n    var layer = icon.querySelector(\".material-design-hamburger__layer\");\n    if (layer.classList.contains(\"material-design-hamburger__icon--to-arrow\")) {\n      layer.classList.remove(\"material-design-hamburger__icon--to-arrow\");\n      layer.classList.add(\"material-design-hamburger__icon--from-arrow\");\n    } else {\n      layer.classList.remove(\"material-design-hamburger__icon--from-arrow\");\n      layer.classList.add(\"material-design-hamburger__icon--to-arrow\");\n    }\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaGFtYnVyZ2VyLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxTQUFTQSxtQkFBbUJBLENBQUEsRUFBRztFQUNwQ0MsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBVUMsS0FBSyxFQUFFO0lBQ2xELElBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxrQ0FBa0MsQ0FBQztJQUNyRSxJQUFJLENBQUNGLElBQUksRUFBRSxPQUFPLENBQUM7O0lBRW5CSCxRQUFRLENBQUNNLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7SUFDbERMLElBQUksQ0FBQ00sVUFBVSxDQUFDQyxrQkFBa0IsQ0FBQ0gsU0FBUyxDQUFDQyxNQUFNLENBQUMsVUFBVSxDQUFDOztJQUUvRDtJQUNBLElBQU1HLEtBQUssR0FBR1IsSUFBSSxDQUFDUyxhQUFhLENBQUMsbUNBQW1DLENBQUM7SUFDckUsSUFBSUQsS0FBSyxDQUFDSixTQUFTLENBQUNNLFFBQVEsQ0FBQywyQ0FBMkMsQ0FBQyxFQUFFO01BQ3pFRixLQUFLLENBQUNKLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLDJDQUEyQyxDQUFDO01BQ25FSCxLQUFLLENBQUNKLFNBQVMsQ0FBQ1EsR0FBRyxDQUFDLDZDQUE2QyxDQUFDO0lBQ3BFLENBQUMsTUFBTTtNQUNMSixLQUFLLENBQUNKLFNBQVMsQ0FBQ08sTUFBTSxDQUFDLDZDQUE2QyxDQUFDO01BQ3JFSCxLQUFLLENBQUNKLFNBQVMsQ0FBQ1EsR0FBRyxDQUFDLDJDQUEyQyxDQUFDO0lBQ2xFO0VBQ0YsQ0FBQyxDQUFDO0FBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvaGFtYnVyZ2VyLmpzPzM5M2UiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVIYW1idXJnZXIoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCBpY29uID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIubWF0ZXJpYWwtZGVzaWduLWhhbWJ1cmdlcl9faWNvblwiKTtcbiAgICBpZiAoIWljb24pIHJldHVybjsgLy8g44Kv44Oq44OD44Kv44GV44KM44Gf6KaB57Sg44GM44Ki44Kk44Kz44Oz44Gn44Gq44GR44KM44Gw5L2V44KC44GX44Gq44GEXG5cbiAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC50b2dnbGUoXCJiYWNrZ3JvdW5kLS1ibHVyXCIpO1xuICAgIGljb24ucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LnRvZ2dsZShcIm1lbnUtLW9uXCIpO1xuXG4gICAgLy8gcXVlcnlTZWxlY3RvcuOCkuS9v+eUqOOBl+OBpuebtOaOpeOCr+ODqeOCueODquOCueODiOOBq+OCouOCr+OCu+OCuVxuICAgIGNvbnN0IGxheWVyID0gaWNvbi5xdWVyeVNlbGVjdG9yKFwiLm1hdGVyaWFsLWRlc2lnbi1oYW1idXJnZXJfX2xheWVyXCIpO1xuICAgIGlmIChsYXllci5jbGFzc0xpc3QuY29udGFpbnMoXCJtYXRlcmlhbC1kZXNpZ24taGFtYnVyZ2VyX19pY29uLS10by1hcnJvd1wiKSkge1xuICAgICAgbGF5ZXIuY2xhc3NMaXN0LnJlbW92ZShcIm1hdGVyaWFsLWRlc2lnbi1oYW1idXJnZXJfX2ljb24tLXRvLWFycm93XCIpO1xuICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWRlc2lnbi1oYW1idXJnZXJfX2ljb24tLWZyb20tYXJyb3dcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxheWVyLmNsYXNzTGlzdC5yZW1vdmUoXCJtYXRlcmlhbC1kZXNpZ24taGFtYnVyZ2VyX19pY29uLS1mcm9tLWFycm93XCIpO1xuICAgICAgbGF5ZXIuY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLWRlc2lnbi1oYW1idXJnZXJfX2ljb24tLXRvLWFycm93XCIpO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUhhbWJ1cmdlciIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiaWNvbiIsInRhcmdldCIsImNsb3Nlc3QiLCJib2R5IiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwicGFyZW50Tm9kZSIsIm5leHRFbGVtZW50U2libGluZyIsImxheWVyIiwicXVlcnlTZWxlY3RvciIsImNvbnRhaW5zIiwicmVtb3ZlIiwiYWRkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/hamburger.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _wave_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wave.js */ \"./src/wave.js\");\n/* harmony import */ var _hamburger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hamburger.js */ \"./src/hamburger.js\");\n/* harmony import */ var _transitionEffects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transitionEffects.js */ \"./src/transitionEffects.js\");\n\n\n\n\ndocument.querySelector(\".menu\").addEventListener(\"click\", function (event) {\n  event.preventDefault();\n  var target = event.target;\n  if (target.classList.contains(\"content-link\")) {\n    var contentPath = target.getAttribute(\"href\");\n    (0,_transitionEffects_js__WEBPACK_IMPORTED_MODULE_3__.loadContent)(\"map\", contentPath);\n  }\n});\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  (0,_wave_js__WEBPACK_IMPORTED_MODULE_1__.init)();\n  (0,_hamburger_js__WEBPACK_IMPORTED_MODULE_2__.initializeHamburger)();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBcUI7QUFDWTtBQUNvQjtBQUNBO0FBRXJERyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQVVDLEtBQUssRUFBRTtFQUN6RUEsS0FBSyxDQUFDQyxjQUFjLENBQUMsQ0FBQztFQUN0QixJQUFNQyxNQUFNLEdBQUdGLEtBQUssQ0FBQ0UsTUFBTTtFQUUzQixJQUFJQSxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFO0lBQzdDLElBQU1DLFdBQVcsR0FBR0gsTUFBTSxDQUFDSSxZQUFZLENBQUMsTUFBTSxDQUFDO0lBQy9DVixrRUFBVyxDQUFDLEtBQUssRUFBRVMsV0FBVyxDQUFDO0VBQ2pDO0FBQ0YsQ0FBQyxDQUFDO0FBRUZSLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBTTtFQUNsREwsOENBQUksQ0FBQyxDQUFDO0VBQ05DLGtFQUFtQixDQUFDLENBQUM7QUFDdkIsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUtc2hhZGVyLWVudjAxLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGluaXQgfSBmcm9tIFwiLi93YXZlLmpzXCI7XG5pbXBvcnQgeyBpbml0aWFsaXplSGFtYnVyZ2VyIH0gZnJvbSBcIi4vaGFtYnVyZ2VyLmpzXCI7XG5pbXBvcnQgeyBsb2FkQ29udGVudCB9IGZyb20gXCIuL3RyYW5zaXRpb25FZmZlY3RzLmpzXCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWVudVwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImNvbnRlbnQtbGlua1wiKSkge1xuICAgIGNvbnN0IGNvbnRlbnRQYXRoID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgbG9hZENvbnRlbnQoXCJtYXBcIiwgY29udGVudFBhdGgpO1xuICB9XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBpbml0KCk7XG4gIGluaXRpYWxpemVIYW1idXJnZXIoKTtcbn0pO1xuIl0sIm5hbWVzIjpbImluaXQiLCJpbml0aWFsaXplSGFtYnVyZ2VyIiwibG9hZENvbnRlbnQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY29udGVudFBhdGgiLCJnZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/transitionEffects.js":
/*!**********************************!*\
  !*** ./src/transitionEffects.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   applyTransition: () => (/* binding */ applyTransition),\n/* harmony export */   loadContent: () => (/* binding */ loadContent),\n/* harmony export */   removeTransition: () => (/* binding */ removeTransition)\n/* harmony export */ });\nfunction applyTransition(elementId) {\n  var element = document.getElementById(elementId);\n  element.classList.add(\"blur-and-fade\"); // ブラーとフェード効果を適用\n}\nfunction removeTransition(elementId) {\n  var element = document.getElementById(elementId);\n  element.classList.remove(\"blur-and-fade\"); // 効果を解除\n}\nfunction loadContent(elementId, url) {\n  var element = document.getElementById(elementId);\n  applyTransition(elementId); // ブラーとフェード効果を適用\n\n  fetch(url).then(function (response) {\n    return response.text();\n  }).then(function (html) {\n    setTimeout(function () {\n      element.innerHTML = html;\n      removeTransition(elementId); // ブラーとフェードの効果を解除\n    }, 500); // トランジションを見せるためのディレイ\n  })[\"catch\"](function (error) {\n    console.error(\"コンテンツの取得に失敗しました:\", error);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdHJhbnNpdGlvbkVmZmVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQU8sU0FBU0EsZUFBZUEsQ0FBQ0MsU0FBUyxFQUFFO0VBQ3pDLElBQU1DLE9BQU8sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUNILFNBQVMsQ0FBQztFQUNsREMsT0FBTyxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQzFDO0FBRU8sU0FBU0MsZ0JBQWdCQSxDQUFDTixTQUFTLEVBQUU7RUFDMUMsSUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQ0gsU0FBUyxDQUFDO0VBQ2xEQyxPQUFPLENBQUNHLFNBQVMsQ0FBQ0csTUFBTSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDN0M7QUFFTyxTQUFTQyxXQUFXQSxDQUFDUixTQUFTLEVBQUVTLEdBQUcsRUFBRTtFQUMxQyxJQUFNUixPQUFPLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDSCxTQUFTLENBQUM7RUFDbERELGVBQWUsQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQzs7RUFFNUJVLEtBQUssQ0FBQ0QsR0FBRyxDQUFDLENBQ1BFLElBQUksQ0FBQyxVQUFDQyxRQUFRO0lBQUEsT0FBS0EsUUFBUSxDQUFDQyxJQUFJLENBQUMsQ0FBQztFQUFBLEVBQUMsQ0FDbkNGLElBQUksQ0FBQyxVQUFDRyxJQUFJLEVBQUs7SUFDZEMsVUFBVSxDQUFDLFlBQU07TUFDZmQsT0FBTyxDQUFDZSxTQUFTLEdBQUdGLElBQUk7TUFDeEJSLGdCQUFnQixDQUFDTixTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ1gsQ0FBQyxDQUFDLFNBQ0ksQ0FBQyxVQUFDaUIsS0FBSyxFQUFLO0lBQ2hCQyxPQUFPLENBQUNELEtBQUssQ0FBQyxrQkFBa0IsRUFBRUEsS0FBSyxDQUFDO0VBQzFDLENBQUMsQ0FBQztBQUNOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUtc2hhZGVyLWVudjAxLy4vc3JjL3RyYW5zaXRpb25FZmZlY3RzLmpzP2EzNzUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VHJhbnNpdGlvbihlbGVtZW50SWQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImJsdXItYW5kLWZhZGVcIik7IC8vIOODluODqeODvOOBqOODleOCp+ODvOODieWKueaenOOCkumBqeeUqFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlVHJhbnNpdGlvbihlbGVtZW50SWQpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImJsdXItYW5kLWZhZGVcIik7IC8vIOWKueaenOOCkuino+mZpFxufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRlbnQoZWxlbWVudElkLCB1cmwpIHtcbiAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnRJZCk7XG4gIGFwcGx5VHJhbnNpdGlvbihlbGVtZW50SWQpOyAvLyDjg5bjg6njg7zjgajjg5Xjgqfjg7zjg4nlirnmnpzjgpLpgannlKhcblxuICBmZXRjaCh1cmwpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS50ZXh0KCkpXG4gICAgLnRoZW4oKGh0bWwpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBlbGVtZW50LmlubmVySFRNTCA9IGh0bWw7XG4gICAgICAgIHJlbW92ZVRyYW5zaXRpb24oZWxlbWVudElkKTsgLy8g44OW44Op44O844Go44OV44Kn44O844OJ44Gu5Yq55p6c44KS6Kej6ZmkXG4gICAgICB9LCA1MDApOyAvLyDjg4jjg6njg7Pjgrjjgrfjg6fjg7PjgpLopovjgZvjgovjgZ/jgoHjga7jg4fjgqPjg6zjgqRcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCLjgrPjg7Pjg4bjg7Pjg4Tjga7lj5blvpfjgavlpLHmlZfjgZfjgb7jgZfjgZ86XCIsIGVycm9yKTtcbiAgICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJhcHBseVRyYW5zaXRpb24iLCJlbGVtZW50SWQiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZVRyYW5zaXRpb24iLCJyZW1vdmUiLCJsb2FkQ29udGVudCIsInVybCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwidGV4dCIsImh0bWwiLCJzZXRUaW1lb3V0IiwiaW5uZXJIVE1MIiwiZXJyb3IiLCJjb25zb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/transitionEffects.js\n");

/***/ }),

/***/ "./src/wave.js":
/*!*********************!*\
  !*** ./src/wave.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   init: () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _assets_shaders_wave_fragment_frag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/shaders/wave-fragment.frag */ \"./src/assets/shaders/wave-fragment.frag\");\n/* harmony import */ var _assets_shaders_wave_fragment_frag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_shaders_wave_fragment_frag__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_shaders_wave_vertex_vert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/shaders/wave-vertex.vert */ \"./src/assets/shaders/wave-vertex.vert\");\n/* harmony import */ var _assets_shaders_wave_vertex_vert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_shaders_wave_vertex_vert__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nvar camera, scene, renderer, waveMaterial, waveGeometry, wave, container;\nvar clock = new three__WEBPACK_IMPORTED_MODULE_2__.Clock();\nvar timeUniform = {\n  iGlobalTime: {\n    value: 0.0\n  },\n  iResolution: {\n    value: new three__WEBPACK_IMPORTED_MODULE_2__.Vector2(window.innerWidth, window.innerHeight)\n  }\n};\nfunction init() {\n  scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n  camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1000);\n  camera.position.set(20, 10, 150);\n  camera.lookAt(scene.position);\n  scene.add(camera);\n  waveMaterial = new three__WEBPACK_IMPORTED_MODULE_2__.ShaderMaterial({\n    uniforms: timeUniform,\n    vertexShader: (_assets_shaders_wave_vertex_vert__WEBPACK_IMPORTED_MODULE_1___default()),\n    fragmentShader: (_assets_shaders_wave_fragment_frag__WEBPACK_IMPORTED_MODULE_0___default())\n  });\n  waveGeometry = new three__WEBPACK_IMPORTED_MODULE_2__.BufferGeometry();\n  var vertices = new Float32Array([-1.0, -1.0, 1.0,\n  // v0\n  1.0, -1.0, 1.0,\n  // v1\n  1.0, 1.0, 1.0,\n  // v2\n  1.0, 1.0, 1.0,\n  // v3\n  -1.0, 1.0, 1.0,\n  // v4\n  -1.0, -1.0, 1.0 // v5\n  ]);\n  waveGeometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_2__.BufferAttribute(vertices, 3));\n  wave = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(waveGeometry, waveMaterial);\n  scene.add(wave);\n  renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer();\n  renderer.setClearColor(0x000000, 0); // 背景を透明に設定\n  renderer.setSize(window.innerWidth, window.innerHeight);\n  container = document.getElementById(\"container\");\n  renderer.domElement.id = \"myCanvas\";\n  container.insertBefore(renderer.domElement, container.firstChild); // containerの最初の子としてcanvasを挿入\n\n  render();\n}\nwindow.addEventListener(\"resize\", function () {\n  camera.aspect = window.innerWidth / window.innerHeight;\n  camera.updateProjectionMatrix();\n  renderer.setSize(window.innerWidth, window.innerHeight);\n});\nfunction render() {\n  var delta = clock.getDelta();\n  timeUniform.iGlobalTime.value += delta;\n  waveMaterial.uniforms.iGlobalTime.value = timeUniform.iGlobalTime.value;\n  console.log(waveMaterial.uniforms.iGlobalTime.value);\n  renderer.render(scene, camera);\n  if (renderer.info.render.errors > 0) {\n    console.error(\"WebGL rendering errors occurred:\", renderer.info.render.errors);\n  }\n  requestAnimationFrame(render);\n}\n\n\n// const error = renderer.getError();\n// if (error !== renderer.NO_ERROR) {\n//   console.error(\"WebGL error: \" + error);\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxDQUFDMkMsTUFBTSxHQUFHN0IsTUFBTSxDQUFDQyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsV0FBVztFQUN0RGhCLE1BQU0sQ0FBQzRDLHNCQUFzQixDQUFDLENBQUM7RUFDL0IxQyxRQUFRLENBQUNnQyxPQUFPLENBQUNwQixNQUFNLENBQUNDLFVBQVUsRUFBRUQsTUFBTSxDQUFDRSxXQUFXLENBQUM7QUFDekQsQ0FBQyxDQUFDO0FBRUYsU0FBU3lCLE1BQU1BLENBQUEsRUFBRztFQUNoQixJQUFNSSxLQUFLLEdBQUd0QyxLQUFLLENBQUN1QyxRQUFRLENBQUMsQ0FBQztFQUM5QnJDLFdBQVcsQ0FBQ0MsV0FBVyxDQUFDQyxLQUFLLElBQUlrQyxLQUFLO0VBQ3RDMUMsWUFBWSxDQUFDc0IsUUFBUSxDQUFDZixXQUFXLENBQUNDLEtBQUssR0FBR0YsV0FBVyxDQUFDQyxXQUFXLENBQUNDLEtBQUs7RUFDdkVvQyxPQUFPLENBQUNDLEdBQUcsQ0FBQzdDLFlBQVksQ0FBQ3NCLFFBQVEsQ0FBQ2YsV0FBVyxDQUFDQyxLQUFLLENBQUM7RUFDcERULFFBQVEsQ0FBQ3VDLE1BQU0sQ0FBQ3hDLEtBQUssRUFBRUQsTUFBTSxDQUFDO0VBQzlCLElBQUlFLFFBQVEsQ0FBQytDLElBQUksQ0FBQ1IsTUFBTSxDQUFDUyxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ25DSCxPQUFPLENBQUNJLEtBQUssQ0FDWCxrQ0FBa0MsRUFDbENqRCxRQUFRLENBQUMrQyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1MsTUFDdkIsQ0FBQztFQUNIO0VBQ0FFLHFCQUFxQixDQUFDWCxNQUFNLENBQUM7QUFDL0I7QUFFZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhyZWUtc2hhZGVyLWVudjAxLy4vc3JjL3dhdmUuanM/YTUxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCBmcmFnbWVudFNoYWRlciBmcm9tIFwiLi9hc3NldHMvc2hhZGVycy93YXZlLWZyYWdtZW50LmZyYWdcIjtcbmltcG9ydCB2ZXJ0ZXhTaGFkZXIgZnJvbSBcIi4vYXNzZXRzL3NoYWRlcnMvd2F2ZS12ZXJ0ZXgudmVydFwiO1xuXG5sZXQgY2FtZXJhLCBzY2VuZSwgcmVuZGVyZXIsIHdhdmVNYXRlcmlhbCwgd2F2ZUdlb21ldHJ5LCB3YXZlLCBjb250YWluZXI7XG5cbmxldCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xuXG5sZXQgdGltZVVuaWZvcm0gPSB7XG4gIGlHbG9iYWxUaW1lOiB7IHZhbHVlOiAwLjAgfSxcbiAgaVJlc29sdXRpb246IHtcbiAgICB2YWx1ZTogbmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksXG4gIH0sXG59O1xuXG5mdW5jdGlvbiBpbml0KCkge1xuICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gIGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICA3NSxcbiAgICB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAxLFxuICAgIDEwMDBcbiAgKTtcbiAgY2FtZXJhLnBvc2l0aW9uLnNldCgyMCwgMTAsIDE1MCk7XG4gIGNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xuICBzY2VuZS5hZGQoY2FtZXJhKTtcblxuICB3YXZlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoe1xuICAgIHVuaWZvcm1zOiB0aW1lVW5pZm9ybSxcbiAgICB2ZXJ0ZXhTaGFkZXI6IHZlcnRleFNoYWRlcixcbiAgICBmcmFnbWVudFNoYWRlcjogZnJhZ21lbnRTaGFkZXIsXG4gIH0pO1xuXG4gIHdhdmVHZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xuICAgIC0xLjAsXG4gICAgLTEuMCxcbiAgICAxLjAsIC8vIHYwXG4gICAgMS4wLFxuICAgIC0xLjAsXG4gICAgMS4wLCAvLyB2MVxuICAgIDEuMCxcbiAgICAxLjAsXG4gICAgMS4wLCAvLyB2MlxuICAgIDEuMCxcbiAgICAxLjAsXG4gICAgMS4wLCAvLyB2M1xuICAgIC0xLjAsXG4gICAgMS4wLFxuICAgIDEuMCwgLy8gdjRcbiAgICAtMS4wLFxuICAgIC0xLjAsXG4gICAgMS4wLCAvLyB2NVxuICBdKTtcbiAgd2F2ZUdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodmVydGljZXMsIDMpKTtcbiAgd2F2ZSA9IG5ldyBUSFJFRS5NZXNoKHdhdmVHZW9tZXRyeSwgd2F2ZU1hdGVyaWFsKTtcbiAgc2NlbmUuYWRkKHdhdmUpO1xuXG4gIHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoKTtcbiAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCwgMCk7IC8vIOiDjOaZr+OCkumAj+aYjuOBq+ioreWumlxuICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xuICBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcbiAgcmVuZGVyZXIuZG9tRWxlbWVudC5pZCA9IFwibXlDYW52YXNcIjtcbiAgY29udGFpbmVyLmluc2VydEJlZm9yZShyZW5kZXJlci5kb21FbGVtZW50LCBjb250YWluZXIuZmlyc3RDaGlsZCk7IC8vIGNvbnRhaW5lcuOBruacgOWIneOBruWtkOOBqOOBl+OBpmNhbnZhc+OCkuaMv+WFpVxuXG4gIHJlbmRlcigpO1xufVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbiAoKSB7XG4gIGNhbWVyYS5hc3BlY3QgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodDtcbiAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcbiAgcmVuZGVyZXIuc2V0U2l6ZSh3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KTtcbn0pO1xuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcbiAgdGltZVVuaWZvcm0uaUdsb2JhbFRpbWUudmFsdWUgKz0gZGVsdGE7XG4gIHdhdmVNYXRlcmlhbC51bmlmb3Jtcy5pR2xvYmFsVGltZS52YWx1ZSA9IHRpbWVVbmlmb3JtLmlHbG9iYWxUaW1lLnZhbHVlO1xuICBjb25zb2xlLmxvZyh3YXZlTWF0ZXJpYWwudW5pZm9ybXMuaUdsb2JhbFRpbWUudmFsdWUpO1xuICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gIGlmIChyZW5kZXJlci5pbmZvLnJlbmRlci5lcnJvcnMgPiAwKSB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIFwiV2ViR0wgcmVuZGVyaW5nIGVycm9ycyBvY2N1cnJlZDpcIixcbiAgICAgIHJlbmRlcmVyLmluZm8ucmVuZGVyLmVycm9yc1xuICAgICk7XG4gIH1cbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHJlbmRlcik7XG59XG5cbmV4cG9ydCB7IGluaXQgfTtcblxuLy8gY29uc3QgZXJyb3IgPSByZW5kZXJlci5nZXRFcnJvcigpO1xuLy8gaWYgKGVycm9yICE9PSByZW5kZXJlci5OT19FUlJPUikge1xuLy8gICBjb25zb2xlLmVycm9yKFwiV2ViR0wgZXJyb3I6IFwiICsgZXJyb3IpO1xuLy8gfVxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiZnJhZ21lbnRTaGFkZXIiLCJ2ZXJ0ZXhTaGFkZXIiLCJjYW1lcmEiLCJzY2VuZSIsInJlbmRlcmVyIiwid2F2ZU1hdGVyaWFsIiwid2F2ZUdlb21ldHJ5Iiwid2F2ZSIsImNvbnRhaW5lciIsImNsb2NrIiwiQ2xvY2siLCJ0aW1lVW5pZm9ybSIsImlHbG9iYWxUaW1lIiwidmFsdWUiLCJpUmVzb2x1dGlvbiIsIlZlY3RvcjIiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJpbml0IiwiU2NlbmUiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwic2V0IiwibG9va0F0IiwiYWRkIiwiU2hhZGVyTWF0ZXJpYWwiLCJ1bmlmb3JtcyIsIkJ1ZmZlckdlb21ldHJ5IiwidmVydGljZXMiLCJGbG9hdDMyQXJyYXkiLCJzZXRBdHRyaWJ1dGUiLCJCdWZmZXJBdHRyaWJ1dGUiLCJNZXNoIiwiV2ViR0xSZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJzZXRTaXplIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRvbUVsZW1lbnQiLCJpZCIsImluc2VydEJlZm9yZSIsImZpcnN0Q2hpbGQiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCIsImRlbHRhIiwiZ2V0RGVsdGEiLCJjb25zb2xlIiwibG9nIiwiaW5mbyIsImVycm9ycyIsImVycm9yIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/wave.js\n");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGUuY3NzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9zdHlsZS5jc3M/MzU0NCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/style.css\n");

/***/ }),

/***/ "./src/assets/shaders/wave-fragment.frag":
/*!***********************************************!*\
  !*** ./src/assets/shaders/wave-fragment.frag ***!
  \***********************************************/
/***/ ((module) => {

eval("module.exports = \"  uniform float iGlobalTime;\\n  uniform vec2 iResolution;\\n\\n  const int NUM_STEPS = 3;\\n  const float PI\\t \\t= 3.1415;\\n  const float EPSILON\\t= 1e-3;\\n\\n  // sea variables\\n  const int ITER_GEOMETRY = 2;\\n  const int ITER_FRAGMENT = 10;\\n  const float SEA_HEIGHT = 0.45;\\n  const float SEA_CHOPPY = 0.4;\\n  const float SEA_SPEED = 0.1;\\n  const float SEA_FREQ = 0.76;\\n  const vec3 SEA_BASE = vec3(0.1,0.19,0.22);\\n  const vec3 SEA_WATER_COLOR = vec3(0.8,0.9,0.6);\\n  mat2 octave_m = mat2(1.6,1.2,-1.2,1.6);\\n\\n  mat3 fromEuler(vec3 ang) {\\n    vec2 a1 = vec2(sin(ang.x),cos(ang.x));\\n    vec2 a2 = vec2(sin(ang.y),cos(ang.y));\\n    vec2 a3 = vec2(sin(ang.z),cos(ang.z));\\n    mat3 m;\\n    m[0] = vec3(\\n    \\ta1.y*a3.y+a1.x*a2.x*a3.x,\\n    \\ta1.y*a2.x*a3.x+a3.y*a1.x,\\n    \\t-a2.y*a3.x\\n    );\\n    m[1] = vec3(-a2.y*a1.x,a1.y*a2.y,a2.x);\\n    m[2] = vec3(\\n    \\ta3.y*a1.x*a2.x+a1.y*a3.x,\\n      a1.x*a3.x-a1.y*a3.y*a2.x,\\n      a2.y*a3.y\\n    );\\n    return m;\\n  }\\n\\nfloat hash( vec2 p ) {\\n    float h = dot(p,vec2(127.1,311.7));\\n    return fract(sin(h) * 43758.5453123);\\n}\\n\\n  float noise( in vec2 p ) {\\n    vec2 i = floor(p);\\n    vec2 f = fract(p);\\t\\n    vec2 u = f * f * (3.0 - 2.0 * f);\\n    return -1.0 + 2.0 * mix(\\n    \\tmix(\\n      \\thash(i + vec2(0.0,0.0)\\n      ), \\n    \\thash(i + vec2(1.0,0.0)), u.x),\\n    \\tmix(hash(i + vec2(0.0,1.0) ), \\n    \\thash(i + vec2(1.0,1.0) ), u.x), \\n      u.y\\n    );\\n  }\\n\\n  float diffuse(vec3 n,vec3 l,float p) {\\n    return pow(dot(n,l) * 0.4 + 0.6,p);\\n  }\\n\\n  float specular(vec3 n,vec3 l,vec3 e,float s) {    \\n    float nrm = (s + 8.0) / (3.1415 * 8.0);\\n    return pow(max(dot(reflect(e,n),l),0.0),s) * nrm;\\n  }\\n\\n  vec3 getSkyColor(vec3 e) {\\n    e.y = max(e.y, 0.0);\\n    vec3 ret;\\n    ret.x = pow(1.0 - e.y, 2.0);\\n    ret.y = 1.0 - e.y;\\n    ret.z = 0.6 + (1.0 - e.y) * 0.4;\\n    return ret;\\n  }\\n\\n\\n  float sea_octave(vec2 uv, float choppy) {\\n    uv += noise(uv);         \\n    vec2 wv = 1.0 - abs(sin(uv));\\n    vec2 swv = abs(cos(uv));    \\n    wv = mix(wv, swv, wv);\\n    return pow(1.0 - pow(wv.x * wv.y, 0.55), choppy);\\n  }\\n\\nfloat map(vec3 p) {\\n    float freq = SEA_FREQ;\\n    float amp = SEA_HEIGHT;\\n    float choppy = SEA_CHOPPY;\\n    vec2 uv = p.xz;\\n    uv.x *= 0.2;\\n\\n    // SEA_TIME の周期性を導入\\n    float SEA_TIME = sin(iGlobalTime * SEA_SPEED);\\n\\n    float d, h = 0.0;\\n    for (int i = 0; i < ITER_GEOMETRY; i++) {\\n        d = sea_octave(uv + vec2(SEA_TIME, 0.0) * freq, choppy);\\n        d += sea_octave(uv - vec2(SEA_TIME, 0.0) * freq, choppy);\\n        h += d * amp;\\n        uv *= octave_m;\\n        freq *= 1.9;\\n        amp *= 0.22;\\n        choppy = mix(choppy, 1.0, 0.2);\\n    }\\n\\n    return p.y - h;\\n}\\n\\n  float map_detailed(vec3 p) {\\n      float freq = SEA_FREQ;\\n      float amp = SEA_HEIGHT;\\n      float choppy = SEA_CHOPPY;\\n      vec2 uv = p.xz;\\n      uv.x *= 0.75;\\n\\n          float SEA_TIME = iGlobalTime * SEA_SPEED; // ここで計算\\n\\n\\n      float d, h = 0.0;    \\n      for(int i = 0; i < ITER_FRAGMENT; i++) {        \\n        d = sea_octave((uv + SEA_TIME) * freq, choppy);\\n        d += sea_octave((uv - SEA_TIME) * freq, choppy);\\n        h += d * amp;        \\n        uv *= octave_m;\\n        freq *= 1.9; \\n        amp *= 0.22;\\n        choppy = mix(choppy,1.0,0.2);\\n      }\\n      return p.y - h;\\n  }\\n\\nvec3 getSeaColor(\\n    vec3 p,\\n    vec3 n,\\n    vec3 l,\\n    vec3 eye,\\n    vec3 dist\\n) {\\n    float fresnel = 1.0 - max(dot(n, -eye), 0.0);\\n    fresnel = pow(fresnel, 3.0) * 0.65;\\n\\n    vec3 reflected = getSkyColor(reflect(eye, n));\\n    vec3 refracted = SEA_BASE + diffuse(n, l, 80.0) * SEA_WATER_COLOR * 0.09;\\n\\n    vec3 color = mix(refracted, reflected, fresnel);\\n\\n    float atten = max(1.0 - dot(dist, dist) * 0.001, 0.0);\\n    color += SEA_WATER_COLOR * (p.y - SEA_HEIGHT) * 0.18 * atten;\\n\\n    color += vec3(specular(n, l, eye, 60.0));\\n\\n    return color;\\n}\\n\\n  // tracing\\n  vec3 getNormal(vec3 p, float eps) {\\n    vec3 n;\\n    n.y = map_detailed(p);    \\n    n.x = map_detailed(vec3(p.x+eps,p.y,p.z)) - n.y;\\n    n.z = map_detailed(vec3(p.x,p.y,p.z+eps)) - n.y;\\n    n.y = eps;\\n    return normalize(n);\\n  }\\n\\n  float heightMapTracing(vec3 ori, vec3 dir, out vec3 p) {  \\n    float tm = 0.0;\\n    float tx = 1000.0;    \\n    float hx = map(ori + dir * tx);\\n\\n    if(hx > 0.0) {\\n      return tx;   \\n    }\\n\\n    float hm = map(ori + dir * tm);    \\n    float tmid = 0.0;\\n    for(int i = 0; i < NUM_STEPS; i++) {\\n      tmid = mix(tm,tx, hm/(hm-hx));                   \\n      p = ori + dir * tmid;                   \\n      float hmid = map(p);\\n      if(hmid < 0.0) {\\n        tx = tmid;\\n        hx = hmid;\\n      } else {\\n        tm = tmid;\\n        hm = hmid;\\n       }\\n    }\\n    return tmid;\\n  }\\n\\nvoid main() {\\n    float EPSILON_NRM = 0.1 / iResolution.x;\\n\\n    vec2 uv = gl_FragCoord.xy / iResolution.xy;\\n    uv = uv * 2.0 - 1.0;\\n    uv.x *= iResolution.x / iResolution.y;\\n    float time = iGlobalTime * 0.3;\\n\\n    vec3 ori = vec3(0.5, 13.5, time * 5.0); \\n    vec3 dir = normalize(vec3(uv.xy, -2.0));\\n    dir.z += length(uv) * 0.15;\\n    dir = normalize(dir);\\n\\n    vec3 p;\\n    heightMapTracing(ori, dir, p);\\n    vec3 dist = p - ori;\\n    vec3 n = getNormal(p, dot(dist, dist) * EPSILON_NRM);\\n    vec3 light = normalize(vec3(0.0, 1.0, 0.8));\\n\\n    vec3 color = mix(\\n        getSkyColor(dir),\\n        getSeaColor(p, n, light, dir, dist),\\n        pow(smoothstep(0.0, -0.05, dir.y), 0.3)\\n    );\\n\\n    gl_FragColor = vec4(pow(color, vec3(0.75)), 1.0);\\n}\\n\\n\\n\\n\\n  \\n\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NoYWRlcnMvd2F2ZS1mcmFnbWVudC5mcmFnIiwibWFwcGluZ3MiOiJBQUFBLDhDQUE4Qyw2QkFBNkIsOEJBQThCLGdDQUFnQyxnQ0FBZ0Msc0RBQXNELGlDQUFpQyxrQ0FBa0MsaUNBQWlDLGdDQUFnQyxnQ0FBZ0MsOENBQThDLG1EQUFtRCwyQ0FBMkMsZ0NBQWdDLDRDQUE0Qyw0Q0FBNEMsNENBQTRDLGFBQWEsOEdBQThHLDZDQUE2Qyw2R0FBNkcsZUFBZSxLQUFLLDBCQUEwQix5Q0FBeUMsMkNBQTJDLEdBQUcsZ0NBQWdDLHdCQUF3Qix3QkFBd0IseUNBQXlDLDROQUE0TixLQUFLLDRDQUE0Qyx5Q0FBeUMsS0FBSyx3REFBd0QsNkNBQTZDLHVEQUF1RCxLQUFLLGdDQUFnQywwQkFBMEIsZUFBZSxrQ0FBa0Msd0JBQXdCLHNDQUFzQyxpQkFBaUIsS0FBSyxpREFBaUQsK0JBQStCLG1DQUFtQyxrQ0FBa0MsNEJBQTRCLHVEQUF1RCxLQUFLLHVCQUF1Qiw0QkFBNEIsNkJBQTZCLGdDQUFnQyxxQkFBcUIsa0JBQWtCLCtFQUErRSx5QkFBeUIsc0JBQXNCLG1CQUFtQixNQUFNLGtFQUFrRSxtRUFBbUUsdUJBQXVCLHlCQUF5QixzQkFBc0Isc0JBQXNCLHlDQUF5QyxPQUFPLHVCQUF1QixHQUFHLGtDQUFrQyw4QkFBOEIsK0JBQStCLGtDQUFrQyx1QkFBdUIscUJBQXFCLHdEQUF3RCx5Q0FBeUMsdUJBQXVCLG1CQUFtQixjQUFjLHlEQUF5RCwwREFBMEQsK0JBQStCLHlCQUF5Qix1QkFBdUIsc0JBQXNCLHVDQUF1QyxTQUFTLHVCQUF1QixLQUFLLCtGQUErRixtREFBbUQseUNBQXlDLHNEQUFzRCwrRUFBK0Usd0RBQXdELDhEQUE4RCxtRUFBbUUsaURBQWlELHFCQUFxQixHQUFHLHVEQUF1RCxhQUFhLGdDQUFnQyxzREFBc0Qsc0RBQXNELGdCQUFnQiwwQkFBMEIsS0FBSyxnRUFBZ0UscUJBQXFCLDRCQUE0QixxQ0FBcUMsc0JBQXNCLHFCQUFxQixPQUFPLDJDQUEyQyx1QkFBdUIscUJBQXFCLGVBQWUsTUFBTSx5REFBeUQsZ0RBQWdELDRCQUE0Qix3QkFBd0Isb0JBQW9CLG9CQUFvQixVQUFVLE1BQU0sb0JBQW9CLG9CQUFvQixVQUFVLE9BQU8sa0JBQWtCLEtBQUssaUJBQWlCLDhDQUE4QyxtREFBbUQsMEJBQTBCLDRDQUE0QyxxQ0FBcUMsZ0RBQWdELDhDQUE4QyxpQ0FBaUMsMkJBQTJCLGVBQWUsb0NBQW9DLDBCQUEwQiwyREFBMkQsa0RBQWtELDJKQUEySix5REFBeUQsR0FBRyIsInNvdXJjZXMiOlsid2VicGFjazovL3RocmVlLXNoYWRlci1lbnYwMS8uL3NyYy9hc3NldHMvc2hhZGVycy93YXZlLWZyYWdtZW50LmZyYWc/MzQ5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiICB1bmlmb3JtIGZsb2F0IGlHbG9iYWxUaW1lO1xcbiAgdW5pZm9ybSB2ZWMyIGlSZXNvbHV0aW9uO1xcblxcbiAgY29uc3QgaW50IE5VTV9TVEVQUyA9IDM7XFxuICBjb25zdCBmbG9hdCBQSVxcdCBcXHQ9IDMuMTQxNTtcXG4gIGNvbnN0IGZsb2F0IEVQU0lMT05cXHQ9IDFlLTM7XFxuXFxuICAvLyBzZWEgdmFyaWFibGVzXFxuICBjb25zdCBpbnQgSVRFUl9HRU9NRVRSWSA9IDI7XFxuICBjb25zdCBpbnQgSVRFUl9GUkFHTUVOVCA9IDEwO1xcbiAgY29uc3QgZmxvYXQgU0VBX0hFSUdIVCA9IDAuNDU7XFxuICBjb25zdCBmbG9hdCBTRUFfQ0hPUFBZID0gMC40O1xcbiAgY29uc3QgZmxvYXQgU0VBX1NQRUVEID0gMC4xO1xcbiAgY29uc3QgZmxvYXQgU0VBX0ZSRVEgPSAwLjc2O1xcbiAgY29uc3QgdmVjMyBTRUFfQkFTRSA9IHZlYzMoMC4xLDAuMTksMC4yMik7XFxuICBjb25zdCB2ZWMzIFNFQV9XQVRFUl9DT0xPUiA9IHZlYzMoMC44LDAuOSwwLjYpO1xcbiAgbWF0MiBvY3RhdmVfbSA9IG1hdDIoMS42LDEuMiwtMS4yLDEuNik7XFxuXFxuICBtYXQzIGZyb21FdWxlcih2ZWMzIGFuZykge1xcbiAgICB2ZWMyIGExID0gdmVjMihzaW4oYW5nLngpLGNvcyhhbmcueCkpO1xcbiAgICB2ZWMyIGEyID0gdmVjMihzaW4oYW5nLnkpLGNvcyhhbmcueSkpO1xcbiAgICB2ZWMyIGEzID0gdmVjMihzaW4oYW5nLnopLGNvcyhhbmcueikpO1xcbiAgICBtYXQzIG07XFxuICAgIG1bMF0gPSB2ZWMzKFxcbiAgICBcXHRhMS55KmEzLnkrYTEueCphMi54KmEzLngsXFxuICAgIFxcdGExLnkqYTIueCphMy54K2EzLnkqYTEueCxcXG4gICAgXFx0LWEyLnkqYTMueFxcbiAgICApO1xcbiAgICBtWzFdID0gdmVjMygtYTIueSphMS54LGExLnkqYTIueSxhMi54KTtcXG4gICAgbVsyXSA9IHZlYzMoXFxuICAgIFxcdGEzLnkqYTEueCphMi54K2ExLnkqYTMueCxcXG4gICAgICBhMS54KmEzLngtYTEueSphMy55KmEyLngsXFxuICAgICAgYTIueSphMy55XFxuICAgICk7XFxuICAgIHJldHVybiBtO1xcbiAgfVxcblxcbmZsb2F0IGhhc2goIHZlYzIgcCApIHtcXG4gICAgZmxvYXQgaCA9IGRvdChwLHZlYzIoMTI3LjEsMzExLjcpKTtcXG4gICAgcmV0dXJuIGZyYWN0KHNpbihoKSAqIDQzNzU4LjU0NTMxMjMpO1xcbn1cXG5cXG4gIGZsb2F0IG5vaXNlKCBpbiB2ZWMyIHAgKSB7XFxuICAgIHZlYzIgaSA9IGZsb29yKHApO1xcbiAgICB2ZWMyIGYgPSBmcmFjdChwKTtcXHRcXG4gICAgdmVjMiB1ID0gZiAqIGYgKiAoMy4wIC0gMi4wICogZik7XFxuICAgIHJldHVybiAtMS4wICsgMi4wICogbWl4KFxcbiAgICBcXHRtaXgoXFxuICAgICAgXFx0aGFzaChpICsgdmVjMigwLjAsMC4wKVxcbiAgICAgICksIFxcbiAgICBcXHRoYXNoKGkgKyB2ZWMyKDEuMCwwLjApKSwgdS54KSxcXG4gICAgXFx0bWl4KGhhc2goaSArIHZlYzIoMC4wLDEuMCkgKSwgXFxuICAgIFxcdGhhc2goaSArIHZlYzIoMS4wLDEuMCkgKSwgdS54KSwgXFxuICAgICAgdS55XFxuICAgICk7XFxuICB9XFxuXFxuICBmbG9hdCBkaWZmdXNlKHZlYzMgbix2ZWMzIGwsZmxvYXQgcCkge1xcbiAgICByZXR1cm4gcG93KGRvdChuLGwpICogMC40ICsgMC42LHApO1xcbiAgfVxcblxcbiAgZmxvYXQgc3BlY3VsYXIodmVjMyBuLHZlYzMgbCx2ZWMzIGUsZmxvYXQgcykgeyAgICBcXG4gICAgZmxvYXQgbnJtID0gKHMgKyA4LjApIC8gKDMuMTQxNSAqIDguMCk7XFxuICAgIHJldHVybiBwb3cobWF4KGRvdChyZWZsZWN0KGUsbiksbCksMC4wKSxzKSAqIG5ybTtcXG4gIH1cXG5cXG4gIHZlYzMgZ2V0U2t5Q29sb3IodmVjMyBlKSB7XFxuICAgIGUueSA9IG1heChlLnksIDAuMCk7XFxuICAgIHZlYzMgcmV0O1xcbiAgICByZXQueCA9IHBvdygxLjAgLSBlLnksIDIuMCk7XFxuICAgIHJldC55ID0gMS4wIC0gZS55O1xcbiAgICByZXQueiA9IDAuNiArICgxLjAgLSBlLnkpICogMC40O1xcbiAgICByZXR1cm4gcmV0O1xcbiAgfVxcblxcblxcbiAgZmxvYXQgc2VhX29jdGF2ZSh2ZWMyIHV2LCBmbG9hdCBjaG9wcHkpIHtcXG4gICAgdXYgKz0gbm9pc2UodXYpOyAgICAgICAgIFxcbiAgICB2ZWMyIHd2ID0gMS4wIC0gYWJzKHNpbih1dikpO1xcbiAgICB2ZWMyIHN3diA9IGFicyhjb3ModXYpKTsgICAgXFxuICAgIHd2ID0gbWl4KHd2LCBzd3YsIHd2KTtcXG4gICAgcmV0dXJuIHBvdygxLjAgLSBwb3cod3YueCAqIHd2LnksIDAuNTUpLCBjaG9wcHkpO1xcbiAgfVxcblxcbmZsb2F0IG1hcCh2ZWMzIHApIHtcXG4gICAgZmxvYXQgZnJlcSA9IFNFQV9GUkVRO1xcbiAgICBmbG9hdCBhbXAgPSBTRUFfSEVJR0hUO1xcbiAgICBmbG9hdCBjaG9wcHkgPSBTRUFfQ0hPUFBZO1xcbiAgICB2ZWMyIHV2ID0gcC54ejtcXG4gICAgdXYueCAqPSAwLjI7XFxuXFxuICAgIC8vIFNFQV9USU1FIOOBruWRqOacn+aAp+OCkuWwjuWFpVxcbiAgICBmbG9hdCBTRUFfVElNRSA9IHNpbihpR2xvYmFsVGltZSAqIFNFQV9TUEVFRCk7XFxuXFxuICAgIGZsb2F0IGQsIGggPSAwLjA7XFxuICAgIGZvciAoaW50IGkgPSAwOyBpIDwgSVRFUl9HRU9NRVRSWTsgaSsrKSB7XFxuICAgICAgICBkID0gc2VhX29jdGF2ZSh1diArIHZlYzIoU0VBX1RJTUUsIDAuMCkgKiBmcmVxLCBjaG9wcHkpO1xcbiAgICAgICAgZCArPSBzZWFfb2N0YXZlKHV2IC0gdmVjMihTRUFfVElNRSwgMC4wKSAqIGZyZXEsIGNob3BweSk7XFxuICAgICAgICBoICs9IGQgKiBhbXA7XFxuICAgICAgICB1diAqPSBvY3RhdmVfbTtcXG4gICAgICAgIGZyZXEgKj0gMS45O1xcbiAgICAgICAgYW1wICo9IDAuMjI7XFxuICAgICAgICBjaG9wcHkgPSBtaXgoY2hvcHB5LCAxLjAsIDAuMik7XFxuICAgIH1cXG5cXG4gICAgcmV0dXJuIHAueSAtIGg7XFxufVxcblxcbiAgZmxvYXQgbWFwX2RldGFpbGVkKHZlYzMgcCkge1xcbiAgICAgIGZsb2F0IGZyZXEgPSBTRUFfRlJFUTtcXG4gICAgICBmbG9hdCBhbXAgPSBTRUFfSEVJR0hUO1xcbiAgICAgIGZsb2F0IGNob3BweSA9IFNFQV9DSE9QUFk7XFxuICAgICAgdmVjMiB1diA9IHAueHo7XFxuICAgICAgdXYueCAqPSAwLjc1O1xcblxcbiAgICAgICAgICBmbG9hdCBTRUFfVElNRSA9IGlHbG9iYWxUaW1lICogU0VBX1NQRUVEOyAvLyDjgZPjgZPjgafoqIjnrpdcXG5cXG5cXG4gICAgICBmbG9hdCBkLCBoID0gMC4wOyAgICBcXG4gICAgICBmb3IoaW50IGkgPSAwOyBpIDwgSVRFUl9GUkFHTUVOVDsgaSsrKSB7ICAgICAgICBcXG4gICAgICAgIGQgPSBzZWFfb2N0YXZlKCh1diArIFNFQV9USU1FKSAqIGZyZXEsIGNob3BweSk7XFxuICAgICAgICBkICs9IHNlYV9vY3RhdmUoKHV2IC0gU0VBX1RJTUUpICogZnJlcSwgY2hvcHB5KTtcXG4gICAgICAgIGggKz0gZCAqIGFtcDsgICAgICAgIFxcbiAgICAgICAgdXYgKj0gb2N0YXZlX207XFxuICAgICAgICBmcmVxICo9IDEuOTsgXFxuICAgICAgICBhbXAgKj0gMC4yMjtcXG4gICAgICAgIGNob3BweSA9IG1peChjaG9wcHksMS4wLDAuMik7XFxuICAgICAgfVxcbiAgICAgIHJldHVybiBwLnkgLSBoO1xcbiAgfVxcblxcbnZlYzMgZ2V0U2VhQ29sb3IoXFxuICAgIHZlYzMgcCxcXG4gICAgdmVjMyBuLFxcbiAgICB2ZWMzIGwsXFxuICAgIHZlYzMgZXllLFxcbiAgICB2ZWMzIGRpc3RcXG4pIHtcXG4gICAgZmxvYXQgZnJlc25lbCA9IDEuMCAtIG1heChkb3QobiwgLWV5ZSksIDAuMCk7XFxuICAgIGZyZXNuZWwgPSBwb3coZnJlc25lbCwgMy4wKSAqIDAuNjU7XFxuXFxuICAgIHZlYzMgcmVmbGVjdGVkID0gZ2V0U2t5Q29sb3IocmVmbGVjdChleWUsIG4pKTtcXG4gICAgdmVjMyByZWZyYWN0ZWQgPSBTRUFfQkFTRSArIGRpZmZ1c2UobiwgbCwgODAuMCkgKiBTRUFfV0FURVJfQ09MT1IgKiAwLjA5O1xcblxcbiAgICB2ZWMzIGNvbG9yID0gbWl4KHJlZnJhY3RlZCwgcmVmbGVjdGVkLCBmcmVzbmVsKTtcXG5cXG4gICAgZmxvYXQgYXR0ZW4gPSBtYXgoMS4wIC0gZG90KGRpc3QsIGRpc3QpICogMC4wMDEsIDAuMCk7XFxuICAgIGNvbG9yICs9IFNFQV9XQVRFUl9DT0xPUiAqIChwLnkgLSBTRUFfSEVJR0hUKSAqIDAuMTggKiBhdHRlbjtcXG5cXG4gICAgY29sb3IgKz0gdmVjMyhzcGVjdWxhcihuLCBsLCBleWUsIDYwLjApKTtcXG5cXG4gICAgcmV0dXJuIGNvbG9yO1xcbn1cXG5cXG4gIC8vIHRyYWNpbmdcXG4gIHZlYzMgZ2V0Tm9ybWFsKHZlYzMgcCwgZmxvYXQgZXBzKSB7XFxuICAgIHZlYzMgbjtcXG4gICAgbi55ID0gbWFwX2RldGFpbGVkKHApOyAgICBcXG4gICAgbi54ID0gbWFwX2RldGFpbGVkKHZlYzMocC54K2VwcyxwLnkscC56KSkgLSBuLnk7XFxuICAgIG4ueiA9IG1hcF9kZXRhaWxlZCh2ZWMzKHAueCxwLnkscC56K2VwcykpIC0gbi55O1xcbiAgICBuLnkgPSBlcHM7XFxuICAgIHJldHVybiBub3JtYWxpemUobik7XFxuICB9XFxuXFxuICBmbG9hdCBoZWlnaHRNYXBUcmFjaW5nKHZlYzMgb3JpLCB2ZWMzIGRpciwgb3V0IHZlYzMgcCkgeyAgXFxuICAgIGZsb2F0IHRtID0gMC4wO1xcbiAgICBmbG9hdCB0eCA9IDEwMDAuMDsgICAgXFxuICAgIGZsb2F0IGh4ID0gbWFwKG9yaSArIGRpciAqIHR4KTtcXG5cXG4gICAgaWYoaHggPiAwLjApIHtcXG4gICAgICByZXR1cm4gdHg7ICAgXFxuICAgIH1cXG5cXG4gICAgZmxvYXQgaG0gPSBtYXAob3JpICsgZGlyICogdG0pOyAgICBcXG4gICAgZmxvYXQgdG1pZCA9IDAuMDtcXG4gICAgZm9yKGludCBpID0gMDsgaSA8IE5VTV9TVEVQUzsgaSsrKSB7XFxuICAgICAgdG1pZCA9IG1peCh0bSx0eCwgaG0vKGhtLWh4KSk7ICAgICAgICAgICAgICAgICAgIFxcbiAgICAgIHAgPSBvcmkgKyBkaXIgKiB0bWlkOyAgICAgICAgICAgICAgICAgICBcXG4gICAgICBmbG9hdCBobWlkID0gbWFwKHApO1xcbiAgICAgIGlmKGhtaWQgPCAwLjApIHtcXG4gICAgICAgIHR4ID0gdG1pZDtcXG4gICAgICAgIGh4ID0gaG1pZDtcXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgdG0gPSB0bWlkO1xcbiAgICAgICAgaG0gPSBobWlkO1xcbiAgICAgICB9XFxuICAgIH1cXG4gICAgcmV0dXJuIHRtaWQ7XFxuICB9XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBmbG9hdCBFUFNJTE9OX05STSA9IDAuMSAvIGlSZXNvbHV0aW9uLng7XFxuXFxuICAgIHZlYzIgdXYgPSBnbF9GcmFnQ29vcmQueHkgLyBpUmVzb2x1dGlvbi54eTtcXG4gICAgdXYgPSB1diAqIDIuMCAtIDEuMDtcXG4gICAgdXYueCAqPSBpUmVzb2x1dGlvbi54IC8gaVJlc29sdXRpb24ueTtcXG4gICAgZmxvYXQgdGltZSA9IGlHbG9iYWxUaW1lICogMC4zO1xcblxcbiAgICB2ZWMzIG9yaSA9IHZlYzMoMC41LCAxMy41LCB0aW1lICogNS4wKTsgXFxuICAgIHZlYzMgZGlyID0gbm9ybWFsaXplKHZlYzModXYueHksIC0yLjApKTtcXG4gICAgZGlyLnogKz0gbGVuZ3RoKHV2KSAqIDAuMTU7XFxuICAgIGRpciA9IG5vcm1hbGl6ZShkaXIpO1xcblxcbiAgICB2ZWMzIHA7XFxuICAgIGhlaWdodE1hcFRyYWNpbmcob3JpLCBkaXIsIHApO1xcbiAgICB2ZWMzIGRpc3QgPSBwIC0gb3JpO1xcbiAgICB2ZWMzIG4gPSBnZXROb3JtYWwocCwgZG90KGRpc3QsIGRpc3QpICogRVBTSUxPTl9OUk0pO1xcbiAgICB2ZWMzIGxpZ2h0ID0gbm9ybWFsaXplKHZlYzMoMC4wLCAxLjAsIDAuOCkpO1xcblxcbiAgICB2ZWMzIGNvbG9yID0gbWl4KFxcbiAgICAgICAgZ2V0U2t5Q29sb3IoZGlyKSxcXG4gICAgICAgIGdldFNlYUNvbG9yKHAsIG4sIGxpZ2h0LCBkaXIsIGRpc3QpLFxcbiAgICAgICAgcG93KHNtb290aHN0ZXAoMC4wLCAtMC4wNSwgZGlyLnkpLCAwLjMpXFxuICAgICk7XFxuXFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQocG93KGNvbG9yLCB2ZWMzKDAuNzUpKSwgMS4wKTtcXG59XFxuXFxuXFxuXFxuXFxuICBcXG5cIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/shaders/wave-fragment.frag\n");

/***/ }),

/***/ "./src/assets/shaders/wave-vertex.vert":
/*!*********************************************!*\
  !*** ./src/assets/shaders/wave-vertex.vert ***!
  \*********************************************/
/***/ ((module) => {

eval("module.exports = \"  void main()\\t{\\n    gl_Position = vec4( position, 1.0 );\\n  }\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NoYWRlcnMvd2F2ZS12ZXJ0ZXgudmVydCIsIm1hcHBpbmdzIjoiQUFBQSxrQ0FBa0MsMENBQTBDLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aHJlZS1zaGFkZXItZW52MDEvLi9zcmMvYXNzZXRzL3NoYWRlcnMvd2F2ZS12ZXJ0ZXgudmVydD85N2IyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gXCIgIHZvaWQgbWFpbigpXFx0e1xcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoIHBvc2l0aW9uLCAxLjAgKTtcXG4gIH1cIjsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/shaders/wave-vertex.vert\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkthree_shader_env01"] = self["webpackChunkthree_shader_env01"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_three_build_three_module_js"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;