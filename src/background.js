chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    console.log("This is a first install!");
    chrome.tabs.create({url:"firstRun.html"});
  } else if (details.reason == "update") {
    var thisVersion = chrome.runtime.getManifest().version;
    if(thisVersion === "1.5.3") return;
    console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    chrome.tabs.create({url:"firstRun.html"});
  }
});
