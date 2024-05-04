// Assuming you are using ES6 module imports
import * as THREE from "three";
import fragmentShader from "./assets/shaders/wave-fragment.glsl";
import vertexShader from "./assets/shaders/wave-vertex.glsl";

let camera,
  scene,
  renderer,
  waveMaterial,
  waveGeometry,
  material,
  geometry,
  wave,
  sphere,
  container,
  directionalLight,
  ambientLight;
let clock = new THREE.Clock();
let timeUniform = {
  iGlobalTime: { value: 0.1 },
  iResolution: {
    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
  },
};

window.addEventListener("DOMContentLoaded", () => {
  init();
});

function init() {
  container = document.getElementById("container");
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.x = 20;
  camera.position.y = 10;
  camera.position.z = 150;
  camera.lookAt(scene.position);
  scene.add(camera);

  directionalLight = new THREE.DirectionalLight(0xffffff, 1);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);
  ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  waveMaterial = new THREE.ShaderMaterial({
    uniforms: window.timeUniform,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  waveGeometry = new THREE.PlaneGeometry(100, 10, 50, 50);

  wave = new THREE.Mesh(waveGeometry, waveMaterial);
  scene.add(wave);

  geometry = new THREE.SphereGeometry(10, 32, 32);
  material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild(renderer.domElement);

  render();
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function render() {
  timeUniform.iGlobalTime.value += clock.getDelta(); // timeUniform を参照する
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

export { init };
