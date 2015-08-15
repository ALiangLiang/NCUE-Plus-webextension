var modal = {
  create : function(parent) {
    var node = document.createElement("div");
    node.innerHTML = this.modal;
    parent.appendChild(node.children[0]);
  },
  modal : `<div id="myModal" class="modal fade" aria-hidden="true" style="display: none;">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header" style="background-color:rgb(53, 126, 189);color:white">
            <h4 id="announce-title" class="modal-title"></h4>
          </div>
          <div class="modal-body">
            <p id="announce-content"></p>
          </div>
          <div class="modal-footer"><button type="button" class="btn btn-default" data-dismiss="modal">懶得讀</button><button id="btn-read" type="button" class="btn btn-primary">已讀</button></div>
        </div>
      </div>
    </div>`
}