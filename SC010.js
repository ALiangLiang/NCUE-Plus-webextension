var Menus = ["Menu11", "Menu12"];
for (var i in Menus) {
    console.log(document.getElementById(Menus[i]));
    document.getElementById(Menus[i]).addEventListener("click", function () {
        document.querySelector("[tabitemid=" + Menus[i] + "]").style["display"] = "";
    });
}