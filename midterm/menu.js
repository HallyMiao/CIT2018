var show_menu = 0
var MENU = document.getElementById("menu");

document.getElementById("downImg").addEventListener("click", function() {
    if (show_menu == 0) {
        MENU.style.top = "0px";
        show_menu = 1;
    } else {
        MENU.style.top = "-80px";
        show_menu = 0;
    }
});