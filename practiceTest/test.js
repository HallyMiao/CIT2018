avatar_img = document.getElementById("img1");
center_div = document.getElementById("center");
hat_img = document.getElementById("hat");
shirt_img = document.getElementById("shirt");
bow_img = document.getElementById("bow");
hat_but = document.getElementById("but1");
shirt_but = document.getElementById("but2");
bow_but = document.getElementById("but3");
var x = [0,100,100,100]; // 0 for avatar img, 1 - 3 for menu accessories
var y = [0,0,0,0];
var size = [avatar_img.height,150,150,150];
var menu_active = [0,0,0,0]; // 0 for menu button, 1 - 3 for the 3 items inside

document.getElementById("avatar1").addEventListener("click", function(){
    avatar_img.src = "ava1.png";
});

document.getElementById("avatar2").addEventListener("click", function(){
    avatar_img.src = "ava2.png";
});

document.getElementById("menuButton").addEventListener("click", function() {
   if (menu_active[0] != 1) {
       document.getElementById("menu").style.right = "0px";
       menu_active[0] = 1;
    }
   else {
       document.getElementById("menu").style.right = "-75px";
       menu_active[0] = 0;
    }
});

document.getElementById("left").addEventListener("click", function(){
    x[0] += 7;
    center_div.style.right = x[0]+"px";
});

document.getElementById("right").addEventListener("click", function(){
    x[0] -= 7;
    center_div.style.right = x[0]+"px";
});

document.getElementById("top").addEventListener("click", function(){
    y[0] += 7;
    center_div.style.bottom = y[0]+"px";
});

document.getElementById("bot").addEventListener("click", function(){
    y[0] -= 7;
    center_div.style.bottom = y[0]+"px";
});

document.getElementById("plus").addEventListener("click", function(){
    size[0] *= 1.01;
    avatar_img.style.height = size[0]+"px";
});

document.getElementById("minus").addEventListener("click", function(){
    size[0] *= 0.99;
    avatar_img.style.height = size[0]+"px";
});

avatar_img.addEventListener("click", function() {
    document.getElementById("buttons").style.opacity = "0";
});

document.getElementById("header").addEventListener("click", function() {
    document.getElementById("buttons").style.opacity = "1";
});

function but_selection() {
    if (menu_active[1] == 0) {hat_but.style.boxShadow = "0px 0px 0px 0px white inset";}
    if (menu_active[2] == 0) {shirt_but.style.boxShadow = "0px 0px 0px 0px white inset";}
    if (menu_active[3] == 0) {bow_but.style.boxShadow = "0px 0px 0px 0px white inset";}
    if (menu_active[1] == 1) {hat_but.style.boxShadow = "0px 0px 0px 2px #BBB inset";}
    if (menu_active[2] == 1) {shirt_but.style.boxShadow = "0px 0px 0px 2px #BBB inset";}
    if (menu_active[3] == 1) {bow_but.style.boxShadow = "0px 0px 0px 2px #BBB inset";}
    if (menu_active[1] == 2) {hat_but.style.boxShadow = "0px 0px 0px 2px red inset";}
    if (menu_active[2] == 2) {shirt_but.style.boxShadow = "0px 0px 0px 2px red inset";}
    if (menu_active[3] == 2) {bow_but.style.boxShadow = "0px 0px 0px 2px red inset";}
    return;
}

hat_but.addEventListener("click", function() {    
    if (menu_active[1] != 2) { // 0 = inactive, no border; 1 = active, grey border; 2 = active, red border
        menu_active[1] = 2;
        hat_img.style.display = "block";
        if (menu_active[2] == 2) {menu_active[2] = 1;}
        if (menu_active[3] == 2) {menu_active[3] = 1;}
    }
    else {
        menu_active[1] = 0;
        hat_img.style.display = "none";
    }
    but_selection();
});

shirt_but.addEventListener("click", function() {
   if (menu_active[2] != 2) {
        menu_active[2] = 2;
        shirt_img.style.display = "block";
        if (menu_active[1] == 2) {menu_active[1] = 1;}
        if (menu_active[3] == 2) {menu_active[3] = 1;}
    }
    else {
        menu_active[2] = 0;
        shirt_img.style.display = "none";
    }
    but_selection();
});

bow_but.addEventListener("click", function() {
   if (menu_active[3] != 2) {
        menu_active[3] = 2;
        bow_img.style.display = "block";
        if (menu_active[1] == 2) {menu_active[1] = 1;}
        if (menu_active[2] == 2) {menu_active[2] = 1;}
    }
    else {
        menu_active[3] = 0;
        bow_img.style.display = "none";
    }
    but_selection();
});

document.getElementById("leftB").addEventListener("click", function(){
    if (menu_active[1] == 2) {
        x[1] += 10;
        hat_img.style.right = x[1]+"px";
    }
    if (menu_active[2] == 2) {
        x[2] += 10;
        shirt_img.style.right = x[2]+"px";
    }
    if (menu_active[3] == 2) {
        x[3] += 10;
        bow_img.style.right = x[3]+"px";
    }
});

document.getElementById("rightB").addEventListener("click", function(){
    if (menu_active[1] == 2) {
        x[1] -= 10;
        hat_img.style.right = x[1]+"px";
    }
    if (menu_active[2] == 2) {
        x[2] -= 10;
        shirt_img.style.right = x[2]+"px";
    }
    if (menu_active[3] == 2) {
        x[3] -= 10;
        bow_img.style.right = x[3]+"px";
    }
});

document.getElementById("upB").addEventListener("click", function(){
    if (menu_active[1] == 2) {
        y[1] += 10;
        hat_img.style.bottom = y[1]+"px";
    }
    if (menu_active[2] == 2) {
        y[2] += 10;
        shirt_img.style.bottom = y[2]+"px";
    }
    if (menu_active[3] == 2) {
        y[3] += 10;
        bow_img.style.bottom = y[3]+"px";
    }
});

document.getElementById("downB").addEventListener("click", function(){
    if (menu_active[1] == 2) {
        y[1] -= 10;
        hat_img.style.bottom = y[1]+"px";
    }
    if (menu_active[2] == 2) {
        y[2] -= 10;
        shirt_img.style.bottom = y[2]+"px";
    }
    if (menu_active[3] == 2) {
        y[3] -= 10;
        bow_img.style.bottom = y[3]+"px";
    }
});

document.getElementById("plusB").addEventListener("click", function() {
    if (menu_active[1] == 2) {
        size[1] *= 1.02;
        hat_img.style.width = size[1]+"px";
    }
    if (menu_active[2] == 2) {
        size[2] *= 1.02;
        shirt_img.style.width = size[2]+"px";
    }
    if (menu_active[3] == 2) {
        size[3] *= 1.02;
        bow_img.style.width = size[3]+"px";
    }
});

document.getElementById("minusB").addEventListener("click", function() {
    if (menu_active[1] == 2) {
        size[1] *= 0.98;
        hat_img.style.width = size[1]+"px";
    }
    if (menu_active[2] == 2) {
        size[2] *= 0.98;
        shirt_img.style.width = size[2]+"px";
    }
    if (menu_active[3] == 2) {
        size[3] *= 0.98;
        bow_img.style.width = size[3]+"px";
    }
});