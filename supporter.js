var content = function a () {
	(function() {
		Object.prototype.attachEvent = function(event, action) {
			var e = event.replace(/^on/,"");	
			this.addEventListener(e, action);
		}		
		HTMLElement.prototype.expimg = "/ST/App_Themes/Default/images/treeImg/folderopen.gif";
		HTMLElement.prototype.collimg = "/ST/App_Themes/Default/images/treeImg/folder.gif";
		HTMLElement.prototype.cells = function(i){this.cells[i]};
		window.createPopup = function(){};
	})();
};
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = content;
document.documentElement.appendChild(script);

var content2 = 'a();'
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = content2;
document.documentElement.appendChild(script);