const form = document.querySelector('#form1');

// 解鎖 Enter 無法直接登入的機制。
const enterSubmit = (e) => {
	if(event.which === 13)
		form.submit();
};
document.querySelector('#name').addEventListener('keydown', enterSubmit);
document.querySelector('#pwd').addEventListener('keydown', enterSubmit);
// 在首頁任何位置，enter 都可以進行登入。
document.body.addEventListener('keydown', enterSubmit);

// 插入提醒文字方塊。
const remind = document.createElement('div');
remind.style = 'color: red;font-weight: bold;'
remind.innerHTML = `※ <a href="https://chrome.google.com/webstore/detail/ncue-plus/agbcepaalgmkkbfognoaonhippllckkc">NCUE Plus</a>： 已成功解鎖無法使用 Enter 鍵登入。
<br>若教務系統發生問題，也可直接<a href="https://m.me/ALiangLiang.top">聯絡 NCUE Plus 作者</a>來進行緊急更新。`
form.insertBefore(remind, document.querySelector('.signin-submit-alt'));

// 插入給電算中心的各位的話。
const toCcenter = document.createElement('div');
toCcenter.innerText = `※ 給電算中心的大家，如果因為這個擴充套件而發生問題，請麻煩直接連絡我來進行處理。`
form.appendChild(toCcenter);