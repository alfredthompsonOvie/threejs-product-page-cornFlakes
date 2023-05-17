import { createCamera } from './components/createCamera';
import { createLights } from './components/createLights';
import { createScene } from './components/createScene';
import { loadModel } from './components/model/loadModel';

import { createRenderer } from './sytems/createRenderer';
import { Loop } from './sytems/Loop';
import { Resizer } from './sytems/Resizer';
class World {
  #camera;
  #loop;
  #scene;
  #renderer;
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    container.append(this.#renderer.domElement);

    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);

    const { mainLight, pointLight1, pointLight2 } = createLights();
    this.#scene.add(mainLight, pointLight1, pointLight2);

    const resizer = new Resizer(this.#camera, container, this.#renderer);
   }
  
  render() { }
  start() { 
    this.#loop.start();
  }
  stop() { 
    this.#loop.stop()
  }
  async init() { 
    const model = await loadModel();
    this.#scene.add(model);
  }
}

export { World };