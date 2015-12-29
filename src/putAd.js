(function (parent, node, adNode) {
  node = document.createElement("table");
  node.innerHTML = '<tr><td colspan="2"><iframe style="width:100%" src="//120.107.172.131/"></iframe></td></tr>';
  adNode = node.querySelector("tbody > tr");
  parent.insertBefore(adNode, parent.querySelector("tr:nth-child(2)"));
})(document.querySelector("#AutoNumber23 > tbody > tr > td > table > tbody"));


/**
 * Dubiously created by Adrian Cooney
 * Accidentally edited by ALiangLiang
 */(function(c){c.image=function(d,a){a=a||1;var b=new Image;b.onload=function(){var b=this.height*a;c.log("%c+","font-size: 1px; padding: "+Math.floor(b/2)+"px "+Math.floor(this.width*a/2)+"px; line-height: "+b+"px;background: url("+d+"); background-size: "+this.width*a+"px "+this.height*a+"px; color: transparent;")};b.src=d}})(console);

console.log("彰師大學生會 需要各式各樣的人才 這也包含熱愛探索資訊技術的你\n請加入學生會吧!!");
console.image("http://folio.ncue.edu.tw/df/FolioFile/S0254003/upload/website/we-need-you.jpg");