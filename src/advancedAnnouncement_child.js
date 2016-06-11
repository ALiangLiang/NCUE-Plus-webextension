var content = function () {
	(function () {
		function injectCode(announcement) {
			//curent announcement
			var curAnn = {
				seen : false,
				title : "",
				content : ""
			};
			if (announcement.search("：") > -1) {
				curAnn.title = announcement.slice(0, announcement.search("："));
				curAnn.title = curAnn.title.replace(/^\n*/, ""); //cut the newline of start of title
				curAnn.content = announcement.slice(announcement.search("：") + 1);
				curAnn.content = curAnn.content.replace(/^\n*/, "");
			} else {
				curAnn.content = announcement.replace(/^\n*/, "");
			}

			function isJson(str) {
				try {
					JSON.parse(str);
				} catch (e) {
					return false;
				}
				return true;
			}
			//announcement of localStorage
			var localAnn = {};
			if (localStorage.announcement === undefined || !isJson(localStorage.announcement)) {
				localStorage.announcement = JSON.stringify({
						seen : false,
						title : curAnn.title,
						content : curAnn.content
					});
			} else {
				localAnn = JSON.parse(localStorage.announcement);
				seen = localAnn.seen;
			}

			if (curAnn.title !== localAnn.title || curAnn.content !== localAnn.content) {
				console.log("diff");
				localAnn.seen = false;
				localAnn.title = curAnn.title;
				localAnn.content = curAnn.content;
			}

			window.addEventListener('message', function (message) {
				if (message.data.status === "seen") {
					console.log("seen");
					localAnn.seen = true;
					localStorage.announcement = JSON.stringify(localAnn);
				}
			});

			var body = document.body;
			if (body.childNodes[0].nodeType === 3) {
				body.removeChild(body.childNodes[0]);
			}
			var btn_readAnnouncement = document.createElement("button");
			btn_readAnnouncement.innerText = "閱讀公告";
			btn_readAnnouncement.onclick = function () {
				window.top.postMessage({
					"title" : curAnn.title,
					"content" : curAnn.content
				}, "*");
			};
			body.insertBefore(btn_readAnnouncement, body.childNodes[0]);
			if (!localAnn.seen) {
				window.top.postMessage({
					"title" : curAnn.title,
					"content" : curAnn.content
				}, "*");
			}
		}
		for (var i in window) {
			try {
				var jsType = typeof window[i];
				switch (jsType.toUpperCase()) {
				case "FUNCTION":
					if (window[i] !== window.location) {
						if (window[i] === window.alert) {
							window[i] = injectCode;
						} else if (window[i] === window.onbeforeunload)
							window.onbeforeunload = null;
						else if (window[i] === window.onunload)
							window.onunload = null;
					}
					break;
				}
			} catch (err) {}
		}
	})();
};
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = "(" + content + ")();";
document.documentElement.appendChild(script);
