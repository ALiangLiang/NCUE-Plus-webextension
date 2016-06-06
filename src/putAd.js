(function (parent, node, adNode) {
  node = document.createElement("table");
  node.innerHTML = `<tr><td colspan="2">
  <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2F%25E5%259C%258B%25E7%25AB%258B%25E5%25BD%25B0%25E5%258C%2596%25E5%25B8%25AB%25E7%25AF%2584%25E5%25A4%25A7%25E5%25AD%25B8-%25E5%25AD%25B8%25E7%2594%259F%25E6%259C%2583-128794183874722%2F&tabs=timeline&width=340&height=300&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=603213146495265" width="340" height="300" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
  </td></tr>`;
  adNode = node.querySelector("tbody > tr");
  parent.insertBefore(adNode, parent.querySelector("tr:nth-child(2)"));
})(document.querySelector("#AutoNumber23 > tbody > tr > td > table > tbody"));



/**
 * Dubiously created by Adrian Cooney
 * Accidentally edited by ALiangLiang
 */(function(c){c.image=function(d,a){a=a||1;var b=new Image;b.onload=function(){var b=this.height*a;c.log("%c+","font-size: 1px; padding: "+Math.floor(b/2)+"px "+Math.floor(this.width*a/2)+"px; line-height: "+b+"px;background: url("+d+"); background-size: "+this.width*a+"px "+this.height*a+"px; color: transparent;")};b.src=d}})(console);

console.log("彰師大學生會 需要各式各樣的人才 這也包含熱愛探索資訊技術的你\n請加入學生會吧!!");
console.image("http://folio.ncue.edu.tw/df/FolioFile/S0254003/upload/website/we-need-you.jpg");