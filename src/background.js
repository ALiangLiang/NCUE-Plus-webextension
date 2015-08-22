var check = false;
var art;
function exe(id) {
	if(!check)
	{
		chrome.tabs.executeScript(id, { code: art });
		check = !check;
	}
}

chrome.extension.onRequest.addListener(function(request,sender,sendResponse) {
	if(request.art) {
		art = request.art;
		sendResponse();
		chrome.tabs.sendRequest(sender.tab.id,{"art2":art},function(response){ 
			console.log("Get message from frame. And send the message to the main html.");
		});
	} else if(request.click) {
		chrome.tabs.sendRequest(sender.tab.id,{"click":true});
		sendResponse();
	}
});