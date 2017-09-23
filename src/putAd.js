(function (parent, node, adNode) {
  node = document.createElement("table");
  node.innerHTML = `<iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNCUEStudentUnion%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1953301211568991" width="340" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe>`;
  adNode = node.querySelector("iframe");
  parent.appendChild(adNode);
})(document.querySelector("#form1"));


console.log("彰師大學生會 需要各式各樣的人才 這也包含熱愛探索資訊技術的你\n請加入學生會吧!!");