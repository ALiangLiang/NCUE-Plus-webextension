if (localStorage['remind'] !== 'true') {
  const
    container = document.querySelector('body > div.container-fluid'),
    alertDiv = document.createElement('div'),
    btn = document.createElement('button'),
    header = document.createElement('h4'),
    body = document.createElement('p');
  alertDiv.classList = 'alert alert-dismissible alert-warning';
  btn.type = 'button';
  btn.classList = 'close';
  btn.setAttribute('data-dismiss', 'alert');
  btn.innerText = 'x';
  btn.addEventListener('click', () => {
    localStorage['remind'] = 'true'
  });
  header.innerText = '歡迎使用 NCUE Plus 課程評論系統';
  body.innerText = `操作說明：
  點擊右上角登入按鈕
  使用學校 G suite 帳戶登入
  帳號為 小寫學號@gm.ncue.edu.tw
  密碼若未更改過則為 身分證前八碼
  ex. s0254003@gm.ncue.edu.tw / B1234567
  登入完成後即可進行課程評論`;
  alertDiv.appendChild(btn);
  alertDiv.appendChild(header);
  alertDiv.appendChild(body);
  container.insertBefore(alertDiv, container.firstChild);
}
