import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { setupModel } from "./setupModel";

import { preLoader } from "./preLoader";

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline();
async function loadModel() { 
  const preloader = preLoader();

  const loader = new GLTFLoader(preloader);
  const modelUrl = '/src/assets/model/corn_flakes_retro_edition.glb';
  const modelData = await loader.loadAsync(modelUrl);

  const model = setupModel(modelData);
  // model.scale.set(2,2,2)
  tl
  .to(model.position, {
    x: .3,
    // duration: 1
  })
  .to(model.rotation, {
    z: 0.5
  })
    .from(['.heading', '.description'], {
      autoAlpha: 0.01,
      y: 10,
      stagger: 0.2
  })

  
  return model;
}
export { loadModel };