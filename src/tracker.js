let isTrackerMenuOpen = false;
let currentTrackerSettings = -1;

const getTrackers = () => {
  var trackers;
  if(!localStorage.getItem("trackers")) {
    trackers = [];
  } else {
    trackers = JSON.parse(localStorage.getItem("trackers"));
  }
  return trackers;
}

const addTracker = () => {
  // Get the current list of trackers
  let trackers = getTrackers();

  // Create the new tracker
  let newTracker = {
    id: "tracker" + trackers.length
  };
  
  // Add it to the trackers array and update the new array to localStorage
  trackers.push(newTracker);
  localStorage.setItem("trackers", JSON.stringify(trackers));

  // Display the trackers
  displayTrackers(trackers);
}

const removeTracker = (trackerId) => {  
  // Find the number index from the tracker's id
  console.log("Removing: " + trackerId);
  let index = parseInt(trackerId.toString().substring("tracker".length));

  // If the index is 
  if(index == -1) {
    console.log("Error! Tracker not found from ID");
    return;
  }

  // If the index of the removed tracker is the one with settings open, close the menu
  if (currentTrackerSettings === trackerId) {
    toggleTrackerMenu(trackerId);
  }

  // Get the current list of trackers
  let trackers = getTrackers();

  // Remove the tracker at the given index
  trackers.splice(index, 1);

  // Update the IDs of the remaining trackers
  for (let i = 0; i < trackers.length; i++) {
    let newId = "tracker" + i;
    trackers[i].id = newId;
  }

  // Update the new array to localStorage
  localStorage.setItem("trackers", JSON.stringify(trackers));

  // Display the updated trackers
  displayTrackers(trackers);
}

const displayTrackers = (trackers) => {
  let trackersDiv = document.getElementById("trackers");
  trackersDiv.textContent = '';

  for(let i = 0; i < trackers.length; i++) {
    let trackerId = trackers[i].id;

    // Tracker Title
    let title = document.createElement("h2");
    let titleText = document.createTextNode("Tracker " + trackerId);
    title.appendChild(titleText);

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
    newTracker.id = "tracker" + trackerId;

    // Append to the trackers div
    trackersDiv.appendChild(newTracker);
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
  getTrackers, 
  addTracker,
  displayTrackers
};