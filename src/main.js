import * as storage from "./storage.js"
import * as tracker from "./tracker.js";

let fps = 20;
let prevLarge = true;

const init = () => {
  // Loop if needed
//   loop();
  setupInitialButtons();

  // Check for local storage availability
  if (storage.storageAvailable("localStorage")) {
    // localStorage is available
    
    // Display exisiting trackers
    tracker.displayTrackers(tracker.getTrackers());
  } else {
    // no localStorage
  }
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

const setupInitialButtons = () => {
  let mainButton = document.getElementById("mainButton");
  mainButton.onclick = tracker.addTracker;
}

export { init };