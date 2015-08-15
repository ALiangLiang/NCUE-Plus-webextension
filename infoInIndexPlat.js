const infoModal =  {
  create : function(parent) {
    var node = document.createElement("div");
    node.innerHTML = this.modal;
    console.log(node);
    parent.insertBefore(node.children[0], parent.children[0]);
  },
  modal : `<tr>
    <td colspan="2">"您正在使用由阿良良提供的「"
      <a href="https://chrome.google.com/webstore/detail/ie-free-for-ncue/agbcepaalgmkkbfognoaonhippllckkc">
        "NCUE新教務系統 Supporter (非官方)"
      </a>
      "」擴充功能\n歡迎至網站參觀或向同學朋友推薦:"
    </td>
  </tr>`
};