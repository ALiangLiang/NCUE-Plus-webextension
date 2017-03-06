const confirmBtn = document.querySelector('#ctl00_ContentPlaceHolder3_E_rbtn_SAns_0_0');
if (confirmBtn) {

  confirmBtn.checked = true;
  const span = document.createElement('span');
  span.style = 'color:red';
  span.innerText = '。此自動"同意"為"NCUE Plus"所提供。';
  document.querySelector('#ctl00_ContentPlaceHolder3_E_rbtn_SAns_0').appendChild(span);

  const
    table = document.querySelector('#ctl00_ContentPlaceHolder3_E_table > tbody > tr:nth-child(3) > td'),
    tr = Array.from(document.querySelectorAll('#ctl00_ContentPlaceHolder3_E_table > tbody > tr > td:nth-child(4) > span'));
  tr.shift();
  const
    inputs = tr.map((e) => Array.from(e.querySelectorAll('input'))),
    labels = Array.from(tr[0].querySelectorAll('label')).map((e) => e.innerText);
  for (let i in inputs[0]) {
    const btn = document.createElement('input');
    btn.type = 'button';
    btn.value = `全選"${labels[i]}"`;
    btn.onclick = () => {
      alert('此功能僅供快速選擇，使用後請憑良心更改成自己所認同的選項。感謝你~ 揪咪');
      for (let input of inputs)
        input[i].checked = true;
    };
    table.appendChild(btn);
  }
  table.style = 'color:red';
  table.appendChild(document.createTextNode('此全選功能為"NCUE Plus"所提供。'));
}
