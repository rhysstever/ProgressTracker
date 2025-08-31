import * as addTracker from "./tracker.js";

let fps = 20;
let prevLarge = true;

const init = () => {
  // Loop if needed
//   loop();
  setup()
}

const loop = () => {
  // If the window was large and is now 425px or smaller
  if (prevLarge && window.innerWidth <= 425) {
    prevLarge = false;
    // Rerender something 
  } else if (!prevLarge && window.innerWidth > 425) {
    prevLarge = true;
    // Rerender something 
  }
  // Call loop() again
  requestAnimationFrame(loop, 1000 / fps);
}

const setup = () => {
  let mainButton = document.getElementById("mainButton");
  mainButton.onclick = addTracker;
}

export { 
  init
};