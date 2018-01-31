avatar_img = document.getElementById("img1");
center_div = document.getElementById("center");
var x = 0;
var y = 0;
var size = document.getElementById("img1").height;
var menu_active = 0;

document.getElementById("avatar1").addEventListener("click", function(){
    avatar_img.src = "ava1.png";
});

document.getElementById("avatar2").addEventListener("click", function(){
    avatar_img.src = "ava2.png";
});

document.getElementById("menuButton").addEventListener("click", function() {
   if (menu_active != 1) {
       document.getElementById("menu").style.right = "0px";
       menu_active = 1;
    }
   else {
       document.getElementById("menu").style.right = "-75px";
       menu_active = 0;
    }
});

document.getElementById("left").addEventListener("click", function(){
    x += 7;
    center_div.style.right = x+"px";
});

document.getElementById("right").addEventListener("click", function(){
    x -= 7;
    center_div.style.right = x+"px";
});

document.getElementById("top").addEventListener("click", function(){
    y += 7;
    center_div.style.bottom = y+"px";
});

document.getElementById("bot").addEventListener("click", function(){
    y -= 7;
    center_div.style.bottom = y+"px";
});

document.getElementById("plus").addEventListener("click", function(){
    size *= 1.01;
    avatar_img.style.height = size+"px";
});

document.getElementById("minus").addEventListener("click", function(){
    size *= 0.99;
    avatar_img.style.height = size+"px";
});

avatar_img.addEventListener("click", function() {
    document.getElementById("buttons").style.opacity = "0";
});

document.getElementById("header").addEventListener("click", function() {
    document.getElementById("buttons").style.opacity = "1";
});

document.getElementById("but1").addEventListener("click", function() {
    document.getElementById("hat").style.display = "block";
});

document.getElementById("but2").addEventListener("click", function() {
    document.getElementById("shirt").style.display = "block";
});

document.getElementById("but3").addEventListener("click", function() {
    document.getElementById("bow").style.display = "block";
});