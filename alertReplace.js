var ct = document.querySelector('script[language="JavaScript"]');
var arr = ct.innerHTML.split('\n');
var tar;

for(var i in arr) {
	if(arr[i].indexOf("window") == 0) {
		tar = arr[i].replace('window.alert(',"")
		break;
	}
}

chrome.extension.sendRequest({"art":tar.slice(0, tar.length - 2)},function(){ console.log("Send the model");});

var node = document.createElement("button");
node.id = "btn-announce";
node.textContent = "閱讀公告";
document.querySelector("body").insertBefore(node,document.body.childNodes[0]);

document.getElementById("btn-announce").onclick = function() {
	chrome.extension.sendRequest({"click":true});
};