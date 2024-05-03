let container,
  renderer,
  scene,
  camera,
  mesh,
  start = Date.now(),
  fov = 30;

let clock = new THREE.Clock();

let timeUniform = {
  iGlobalTime: {
    type: "f",
    value: 0.1,
  },
  iResolution: {
    type: "v2",
    value: new THREE.Vector2(),
  },
};

timeUniform.iResolution.value.x = window.innerWidth;
timeUniform.iResolution.value.y = window.innerHeight;

window.addEventListener("load", function () {
  container = document.getElementById("container");
  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    fov,
    window.innerWidth / window.innerHeight,
    1,
    10000
  );
  camera.position.x = 20;
  camera.position.y = 10;
  camera.position.z = 20;
  camera.lookAt(scene.position);
  scene.add(camera);

  let axis = new THREE.AxisHelper(10);
  scene.add(axis);

  material = new THREE.ShaderMaterial({
    uniforms: timeUniform,
    vertexShader: document.getElementById("vertex-shader").textContent,
    fragmentShader: document.getElementById("fragment-shader").textContent,
  });

  let water = new THREE.Mesh(
    new THREE.PlaneBufferGeometry(window.innerWidth, window.innerHeight, 40),
    material
  );
  scene.add(water);

  let geometry = new THREE.SphereGeometry(10, 32, 32);
  let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  let sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  container.appendChild(renderer.domElement);

  render();
});

window.addEventListener("resize", function () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});

function render() {
  timeUniform.iGlobalTime.value += clock.getDelta();
  renderer.render(scene, camera);
  requestAnimationFrame(render);
}

export default render;
