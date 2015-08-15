//create announce model
modal.create(document.body);

//change host of child page to same with parent page
document.querySelector("#AutoNumber3 > tbody > tr:nth-child(2) > td:nth-child(4) > iframe").src = "http://webap.ncue.edu.tw/information/News/left_news.html";

//deal announcement
var announce = localStorage.announcement;
if (announce !== undefined) {
	announce = JSON.parse(announce);
	document.getElementById("announce-title").innerText = announce.title;
	document.getElementById("announce-content").innerText = announce.content;
}

window.onmessage = function (message) {
	document.getElementById("announce-title").innerText = message.data.title;
	document.getElementById("announce-content").innerText = message.data.content;
	$("#myModal").modal('show');
	document.getElementById("btn-read").addEventListener("click", function () {
    $("#myModal").modal('hide');
		document.querySelector("#AutoNumber3 > tbody > tr:nth-child(2) > td:nth-child(4) > iframe").contentWindow.postMessage({
			status : "seen"
		}, "*");
	});
}
//(announcement.title === message.data.title && announcement.content === message.data.content)
