var IEFreeForNCUE = {
	art: ['<div id="myModal"class="modal fade"><div class="modal-dialog"><div class="modal-content"><div class="modal-header"style="background-color:rgb(53, 126, 189);color:white"><h4 class="modal-title">','</h4></div><div class="modal-body"><p>','</p></div><div class="modal-footer"><button type="button"class="btn btn-default"data-dismiss="modal">懶得讀</button><button id="btn-read"type="button"class="btn btn-primary">已讀</button></div></div></div></div>'],
	Alert: null,
	name: "NCUE新教務系統 Supporter (非官方)",
	website: "http://crux.coder.tw/ALiangLiang/",
	entensionURL: "https://chrome.google.com/webstore/detail/ie-free-for-ncue/agbcepaalgmkkbfognoaonhippllckkc",
	content: function() {return '您正在使用由阿良良提供的「<a href="' + this.entensionURL + '">' + this.name + '</a>」擴充功能\n歡迎至網站參觀或向同學朋友推薦:'},
	
	initialize: function() {
		document.getElementById("txtUSERID").removeAttribute("disabled");
		document.getElementById("txtUSERID").placeholder = "學號";
		document.getElementById("txtPWD").removeAttribute("disabled");
		document.getElementById("btnLOGIN").removeAttribute("disabled");
		document.getElementById("txtCode").placeholder = "升級中...";
		this.lib();
		this.addContent();
		/*
		$(function() {
			var loc = document.querySelector("#AutoNumber23 > tbody > tr:nth-child(8)");
			loc.removeChild(loc.childNodes[0]);
		});*/
	},
	
	lib: function() {
		Node.prototype.hitch = function(fatherNode) {
			fatherNode.appendChild(this);
			return fatherNode;
		};
		Node.prototype.setAttr = function(attribute, value) {
			this.setAttribute(attribute, value);
			return this;
		};
		Node.prototype.setHTML = function(HTML) {
			this.innerHTML = HTML;
			return this;
		};
	},

	getCookie: function (name) {
		var arr = document.cookie.split(";");
		for (var n in arr) {
			arr[n] = arr[n].split("=");
			if(arr[n][0].trim() == name)
				return arr[n][1];
		}
	},


	cEle: function (dom) {
		return document.createElement(dom);
	},
	
	addContent: function() {
		var cEle = this.cEle;
		var forkNode = cEle("div").setAttr("class", "alert alert-info");
		var contents = this.content().split("\n");
		for(var i in contents) {
			cEle("p").setHTML(contents[i]).hitch(forkNode);
		}
		cEle("a").setAttr("href", this.website).setHTML(this.website).hitch(cEle("p")).hitch(forkNode);
		var fatherNode = document.querySelector("#AutoNumber23 > tbody > tr:nth-child(9) > td > table > tbody");
		fatherNode.insertBefore(forkNode.hitch(cEle("td")).setAttr("colspan", "2").hitch(cEle("tr")), fatherNode.querySelector("tr:nth-child(3)"));
	}
}

var main = Object.create(IEFreeForNCUE);
main.initialize();

chrome.extension.onRequest.addListener(function(message,sender,sendResponse) {
	if(message.art2) {
		var ct = message.art2.split("：", 1);
		var content = message.art2;
    console.log(ct);
		main.Alert = main.art[0].concat(ct[0].slice(1,ct[0].length).replace(/^\\n/,""),main.art[1],content.replace(/^\\n\\n|/,"").replace(/\\n\\n/g,"<br /><br />").replace(/\\n/g,""),main.art[2]);
		$("#form1").prepend(main.Alert);
		document.getElementById("btn-read").onclick = function() {
			localStorage.announcement = main.Alert;
			$('#myModal').modal('hide');
		};
		if(main.Alert != localStorage.announcement) {
			$('#myModal').modal('show');
		}
		sendResponse();
	} else if(message.click) {
		$('#myModal').modal('show');
	}
});