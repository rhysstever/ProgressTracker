const addTracker = () => {
  let trackersDiv = document.getElementById("trackers");
  let newTracker = document.createElement("div");
  let newTrackerTitle = document.createElement("h2");
  let titleText = document.createTextNode("New Tracker");
  newTrackerTitle.appendChild(titleText);
  newTracker.appendChild(newTrackerTitle);
  trackersDiv.appendChild(newTracker);
}

export {
  addTracker
};