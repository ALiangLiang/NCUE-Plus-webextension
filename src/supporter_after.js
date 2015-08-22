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

	if (menuid !== null && activeIndex !== null)
		MenuClickToSearch(menuid, activeIndex);
};

function CCustomValidator_CGridMultiPanelctl00_ContentPlaceHolder2_T3_Panel4(objSource, objArgs) {
	objGrid = document.all.ctl00_ContentPlaceHolder2_T3_Grid4;
	if (objGrid) {
		objArgs.IsValid = (objGrid.CurrRowCount() > 0);
	}

}
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = content;
document.documentElement.appendChild(script);