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

  console.log("supporter_after load finish");
};

var SlowMotionContent = function SlowMotion(pan_id, MotionPix, UnitTime, MaxCloseHieght, MinOpenHieght) {
  _obj = document.all[pan_id];
  if (!_obj) {
    return;
  } //檢查物件是否存在，不存在則停止執行
  if (!_obj.nextmotionstatus) {
    _obj.nextmotionstatus = '-';
  } //給預設值
  if (!_obj.oriheight) {
    if (isNaN(_obj.style.height))
      _obj.oriheight = parseInt(_obj.style.height.replace('px', ''));
    else
      _obj.oriheight = parseInt(_obj.offsetHeight);
  }
  //初始化

  SetInitial(_obj, MotionPix, UnitTime, MaxCloseHieght, MinOpenHieght);
  var dir = _obj.nextmotionstatus;
  _obj.nextmotionstatus = '=';

  Slow(pan_id, dir);

  var imgUrl;
  if (dir == '+') {
    if (_obj.orioverflowstyle) {
      _obj.style.overflow = _obj.orioverflowstyle;
    }
    _obj.nextmotionstatus = "-";
    imgUrl = event.srcElement.getAttribute("upimgurl");
      console.log(imgUrl);
  } else {
    _obj.orioverflowstyle = _obj.style.overflow;
    _obj.style.overflow = "hidden";
    _obj.nextmotionstatus = "+";
    imgUrl = event.srcElement.getAttribute("downimgurl");
  }

  SwapImage(event.srcElement, imgUrl);
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
var script = document.createElement("script");
script.type = "text/javascript";
script.textContent = SlowMotionContent;
document.documentElement.appendChild(script);

var extension_img = document.getElementById("ctl00_ContentPlaceHolder2_CPanelCollapseControl3");
if (extension_img.src.search("undefined") > -1)
  extension_img.src = extension_img.getAttribute("downimgurl");
