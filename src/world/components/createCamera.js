import { PerspectiveCamera } from "three";

function createCamera() {
  const camera = new PerspectiveCamera(35, 1, 0.1, 1000);
  camera.position.z = 1.5;
  camera.position.y = 0.3;

  return camera;
 }
export { createCamera };