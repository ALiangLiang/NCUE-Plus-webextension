if (!document.querySelector('#btnLOGIN')) {
  var x = document.createElement('input');
  var y = document.createElement('input');
  x.name = 'btnLOGIN.x';
  y.name = 'btnLOGIN.y';
  x.type = 'hidden';
  y.type = 'hidden';
  x.value = 63;
  y.value = 9;
  var form = document.querySelector('[name=form1]');
  //form.appendChild(x);
  //form.appendChild(y);

  var tmp = document.createElement('div');
  tmp.innerHTML = '<input type="image" name="btnLOGIN" id="btnLOGIN" onmouseout="MM_swapImgRestore()" onmouseover="MM_swapImage(\'Image451\',\'\',\'images/btn_login_on_1.gif\',1)" src="images/btn_login_1.gif" style="height:26px;width:87px;border-width:0px;">';
  document.body.querySelector('#AutoNumber23 > tbody > tr:nth-child(7) > td > div:nth-child(1)').appendChild(tmp.querySelector('input'));
}
