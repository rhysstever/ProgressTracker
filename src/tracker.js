let trackers = [];
let isTrackerMenuOpen = false;
let currentTrackerSettings = -1;

const addTracker = () => {
  // Tracker Title
  let title = document.createElement("h2");
  let titleText = document.createTextNode("New Tracker");
  title.appendChild(titleText);
  let trackerId = "tracker" + trackers.length;

  // Tracker Settings Button
  let settingsButton = document.createElement("button");
  let settingsText = document.createTextNode("Settings");
  settingsButton.appendChild(settingsText);
  settingsButton.onclick = function() { toggleTrackerMenu(trackerId); };

  // Remove Tracker Button
  let removeButton = document.createElement("button");
  let removeText = document.createTextNode("Remove");
  removeButton.appendChild(removeText);
  removeButton.className = "removeButton";
  removeButton.onclick = function() { removeTracker(trackerId); };

  // Create the tracker div and add it to the array and DOM
  let newTracker = document.createElement("div");
  newTracker.appendChild(title);
  newTracker.appendChild(settingsButton);
  newTracker.appendChild(removeButton);
  newTracker.id = trackerId;
  trackers.push(newTracker);

  // Append to the trackers div
  let trackersDiv = document.getElementById("trackers");
  trackersDiv.appendChild(newTracker);
  }

const removeTracker = (trackerId) => {
  console.log("Removing: " + trackerId);
  let index = parseInt(trackerId.toString().substring("tracker".length));

  // Remove the tracker from the DOM and the array
  let tracker = document.getElementById(trackerId);
  tracker.remove();
  trackers.splice(index, 1);

  // Update the IDs of the remaining trackers
  for (let i = 0; i < trackers.length; i++) {
    let newId = "tracker" + i;
    trackers[i].id = newId;
    // Update the onclick functions to use the new IDs
    trackers[i].querySelector(".removeButton").onclick = function() { removeTracker(newId); };
  }

  // If the removed tracker was the one with settings open, close the menu
  if (currentTrackerSettings === trackerId) {
    toggleTrackerMenu(trackerId);
  }
}

const toggleTrackerMenu = (trackInfo) => {
  // Create the tracker menu
  let menu = document.getElementById("trackerMenu");
  menu.innerHTML = "<h2>Tracker Menu</h2><p>Settings for tracker " + trackInfo + "</p>";

  // If the menu is closed or a different tracker is selected, open it
  if(currentTrackerSettings !== trackInfo) {
    isTrackerMenuOpen = true;
    currentTrackerSettings = trackInfo;
  } else {
    isTrackerMenuOpen = false;
    currentTrackerSettings = -1;
  }

  // Show or hide the menu based on its state
  if (isTrackerMenuOpen) {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

export {
  trackers,
  addTracker
};