/*var content = function b () {
	(function() {
		var a = [];		
		function getMenuId(id){
			return id.getAttribute("tabitemid");
		}
		for(var i = 0; i < 5; i++) {
			a[i] = document.getElementById("ctl00_ContentPlaceHolder2_panTab" + i);
			if(getMenuId(a[i]) != null) {
				document.getElementById(getMenuId(a[i])).setAttribute("onclick",  'document.getElementById("ctl00_ContentPlaceHolder2_panTab" + ' + i + ').style.display = "block";');
			}
		}
	})();
};
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = content;
document.documentElement.appendChild(script);

var content2 = 'b();'
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = content2;
document.documentElement.appendChild(script);*/

var content = function SetActive(menuid, activeIndex) {

	var hiddenObj = document.all['tab_Hidden_' + menuid];
	if (hiddenObj.value == activeIndex)
		return;
	var menuGroup;
	eval('menuGroup =tab_Group_' + menuid);

	for (var i = 0; i < menuGroup.length; i++) {
		var targetObj = document.all[menuGroup[i]];
		var tabObj = document.all[targetObj.getAttribute("tabItemId")];
		if (!tabObj)
			continue;

		var tabParentObj = tabObj.parentElement.parentElement.parentElement.parentElement.parentElement;
		var tabParentObj2 = tabObj.parentElement;

		if (activeIndex != -1 && i == activeIndex) {
			targetObj.style.display = '';
			tabParentObj.className += ' selectedTab';
			tabParentObj2.className += ' selectedTab';
		} else {
			targetObj.style.display = 'none';
			tabParentObj.className = tabParentObj.className.replace('selectedTab', '');
			tabParentObj2.className = tabParentObj.className.replace('selectedTab', '');
		}
	}

	hiddenObj.value = activeIndex;

	if (menuid != null && activeIndex != null)
		MenuClickToSearch(menuid, activeIndex);
}

function CCustomValidator_CGridMultiPanelctl00_ContentPlaceHolder2_T3_Panel4(objSource, objArgs) {
	objGrid = document.all['ctl00_ContentPlaceHolder2_T3_Grid4'];
	if (objGrid) {
		objArgs.IsValid = (objGrid.CurrRowCount() > 0);
	}

}
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = content;
document.documentElement.appendChild(script);