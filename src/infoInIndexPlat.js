const infoModal = {
	create : function (parent) {
		var node = document.createElement("table");
		node.innerHTML = this.modal;
		parent.insertBefore(node.querySelector("tbody > tr"), parent.querySelector("tr:nth-child(2)"));
	},
	modal : `<tr>
	    <td colspan="2">
				<div class="alert alert-info" style="margin-bottom:0px">
					<p>
						您正在使用由學生會-資訊組提供的
						<br>「${"NCUE教務系統 Supporter (非官方)".link("https://chrome.google.com/webstore/detail/agbcepaalgmkkbfognoaonhippllckkc")}」擴充功能
					</p>
				</div>
	    </td>
	  </tr>`
};
