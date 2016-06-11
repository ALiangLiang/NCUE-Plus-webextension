//create announce model
modal.create(document.body);

var childWindow = document.querySelector("#AutoNumber3 > tbody > tr:nth-child(2) > td:nth-child(4) > iframe").contentWindow;
document.getElementById("btn-read").addEventListener("click", function () {
  $("#myModal").modal('hide');
  childWindow.postMessage({
    status : "seen"
  }, "*");
});
window.addEventListener('message', function (message) {
  document.getElementById("announce-title").innerText = message.data.title;
  document.getElementById("announce-content").innerText = message.data.content;
  $("#myModal").modal('show');
});
