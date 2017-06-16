chrome.runtime.onInstalled.addListener(function (details) {
  if (details.reason == "install") {
    console.log("This is a first install!");
    chrome.tabs.create({
      url : "firstRun.html"
    });
    chrome.tabs.create({
      url: 'http://webap.ncue.edu.tw/ST/',
			active: false
    });
  } else if (details.reason == "update") {
    var thisVersion = chrome.runtime.getManifest().version;
    if (thisVersion === "1.5.3")
      return;
    console.log("Updated from " + details.previousVersion + " to " + thisVersion + "!");
    chrome.tabs.create({
      url : "firstRun.html",
			active: false
    });
  }
});

/* 將 User-Agent 改為IE9，欺騙伺服器 */
chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
  for (var i = 0; i < details.requestHeaders.length; ++i) {
    if (details.requestHeaders[i].name === 'User-Agent') {
      details.requestHeaders[i].value = 'Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)'; //IE9
      break;
    }
  }
  return {
    requestHeaders : details.requestHeaders
  };
}, {
  urls : ["http://webap.ncue.edu.tw/st/index.aspx"]
}, ["blocking", "requestHeaders"]);
