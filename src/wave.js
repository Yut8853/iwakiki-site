import * as THREE from "three";
import fragmentShader from "./assets/shaders/wave-fragment.frag";
import vertexShader from "./assets/shaders/wave-vertex.vert";

let camera, scene, renderer, waveMaterial, waveGeometry, wave, container;

let clock = new THREE.Clock();

let timeUniform = {
  iGlobalTime: { value: 0.0 },
  iResolution: {
    value: new THREE.Vector2(window.innerWidth, window.innerHeight),
  },
};

function init() {
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1000
  );
  camera.position.set(20, 10, 150);
  camera.lookAt(scene.position);
  scene.add(camera);

  waveMaterial = new THREE.ShaderMaterial({
    uniforms: timeUniform,
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
  });

  waveGeometry = new THREE.BufferGeometry();
  const vertices = new Float32Array([
    -1.0,
    -1.0,
    1.0, // v0
    1.0,
    -1.0,
    1.0, // v1
    1.0,
    1.0,
    1.0, // v2
    1.0,
    1.0,
    1.0, // v3
    -1.0,
    1.0,
    1.0, // v4
    -1.0,
    -1.0,
    1.0, // v5
  ]);
  waveGeometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
  wave = new THREE.Mesh(waveGeometry, waveMaterial);
  scene.add(wave);

  renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 0); // 背景を透明に設定
  renderer.setSize(window.innerWidth, window.innerHeight);
  container = document.getElementById("container");
  renderer.domElement.id = "myCanvas";
  container.insertBefore(renderer.domElement, container.firstChild); // containerの最初の子としてcanvasを挿入

  render();
}

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function render() {
  const delta = clock.getDelta();
  timeUniform.iGlobalTime.value += delta;
  waveMaterial.uniforms.iGlobalTime.value = timeUniform.iGlobalTime.value;
  console.log(waveMaterial.uniforms.iGlobalTime.value);
  renderer.render(scene, camera);
  if (renderer.info.render.errors > 0) {
    console.error(
      "WebGL rendering errors occurred:",
      renderer.info.render.errors
    );
  }
  requestAnimationFrame(render);
}

export { init };

// const error = renderer.getError();
// if (error !== renderer.NO_ERROR) {
//   console.error("WebGL error: " + error);
// }
