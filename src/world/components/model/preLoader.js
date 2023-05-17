import { LoadingManager } from "three";

function preLoader() {
  const preloader = new LoadingManager();
  
  preloader.onLoad = () => {
    const loadingContainer = document.querySelector('.loadingContainer')
    loadingContainer.classList.add('hide');
  }

  preloader.onProgress = function (url, itemsLoaded, itemsTotal) {
    const progressBar = document.querySelector('.loader__indicator')
    const loadingPercent = document.querySelector('.loadingPercent')

    progressBar.style.width = (itemsLoaded / itemsTotal * 100) + '%';
    loadingPercent.textContent = (itemsLoaded / itemsTotal * 100) + '%';
  }
  preloader.onError = function ( url ) {
    console.log( 'There was an error loading ' + url );
  };

  return preloader;
}
export { preLoader };