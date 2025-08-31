const addTracker = () => {
  let trackersDiv = document.getElementById("trackers");
  let newTracker = document.createAttribute("div");
  let newTrackerTitle = document.createAttribute("h2");
  let titleText = document.createTextNode("New Tracker");
  newTrackerTitle.appendChild(titleText);
  newTracker.appendChild(newTrackerTitle);
  trackersDiv.appendChild(newTracker);
}

export {
  addTracker
}