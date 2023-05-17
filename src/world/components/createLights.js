import { DirectionalLight, PointLight } from "three";

function createLights() {
  const mainLight = new DirectionalLight('white', 1);
  mainLight.position.set(10, 10, 10);
  
  const pointLight1 = new PointLight('white', 2)
  pointLight1.position.set(5, -10, 0);
  
  const pointLight2 = new PointLight('white', 1)
  pointLight2.position.set(-15, 10, 10);
  
  const pointLight3 = new PointLight('white', 100)
  pointLight3.position.set(25, -35, -20);
  
  const pointLight4 = new PointLight('white', 100)
  pointLight4.position.set(0, 35, 40);

  return {mainLight, pointLight1, pointLight2, pointLight3, pointLight4}
 }
export { createLights };