const infoModal = {
	create : function (parent) {
		var node = document.createElement("table");
		node.innerHTML = this.modal;
		console.log(node);
		parent.insertBefore(node.querySelector("tbody > tr"), parent.querySelector("tr:nth-child(2)"));
	},
	modal : `<tr>
	    <td colspan="2">
				<div class="alert alert-info">
					<p>
						您正在使用由阿良良提供的
						<br>「
						<a href="https://chrome.google.com/webstore/detail/ncue%E6%96%B0%E6%95%99%E5%8B%99%E7%B3%BB%E7%B5%B1-supporter/agbcepaalgmkkbfognoaonhippllckkc">
							NCUE新教務系統 Supporter (非官方)
						</a>
						」擴充功能
						<br>
						歡迎至網站參觀或向同學朋友推薦:
						<a href="http://aliangliang.cf">aliangliang.cf</a>
					</p>
				</div>
	    </td>
	  </tr>`
};
