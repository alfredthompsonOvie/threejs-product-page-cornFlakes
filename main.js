import './style.css'
import { World } from './src/world/World';

async function init() { 
  const canvas = document.querySelector('#scene__container');

  const world = new World(canvas);

  await world.init();

  world.start();
}
init();
