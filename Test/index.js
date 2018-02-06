circle1 = document.getElementById("ch1");
circle2 = document.getElementById("ch2");
circle3 = document.getElementById("ch3");
zoomimg = document.getElementById("zoom");

var active_image = ['','',''];
var active_button = [0,0]; // slot 1 is for bgthumbs, slot 2 for BG buttons
var zoomSize = [100, 70];

function display_image() {
    if (active_button[1] == 1) {
        active_image[0] = "url(imgs/i1.jpg)";
        active_image[1] = "url(imgs/i2.jpg)";
        active_image[2] = "url(imgs/i3.jpg)";
    } else if (active_button[1] == 2) {
        active_image[0] = "url(imgs/i4.jpg)";
        active_image[1] = "url(imgs/i5.jpg)";
        active_image[2] = "url(imgs/i6.jpg)";
    } else if (active_button[1] == 3) {
        active_image[0] = "url(imgs/i7.jpg)";
        active_image[1] = "url(imgs/i8.jpg)";
        active_image[2] = "url(imgs/i9.jpg)";
    } else if (active_button[1] == 4) {
        active_image[0] = "url(imgs/i10.jpg)";
        active_image[1] = "url(imgs/i11.jpg)";
        active_image[2] = "url(imgs/i12.jpg)";
    }
    circle1.style.backgroundImage = active_image[0];
    circle2.style.backgroundImage = active_image[1];
    circle3.style.backgroundImage = active_image[2];    
}

document.getElementById("BG1").addEventListener("click", function(){
    active_button[1] = 1;
    display_image();
});

document.getElementById("BG2").addEventListener("click", function(){
    active_button[1] = 2;
    display_image();
});

document.getElementById("BG3").addEventListener("click", function(){
    active_button[1] = 3;
    display_image();
});

document.getElementById("BG4").addEventListener("click", function(){
    active_button[1] = 4;
    display_image();
});

circle1.addEventListener("mouseenter", function() {
    zoomimg.style.backgroundImage = active_image[0];
    active_button[0] = 0;
});

circle2.addEventListener("mouseenter", function() {
    zoomimg.style.backgroundImage = active_image[1];
    active_button[0] = 1;
});

circle3.addEventListener("mouseenter", function() {
    zoomimg.style.backgroundImage = active_image[2];
    active_button[0] = 2;
});

document.getElementById("MakeBG").addEventListener("click", function() {
    document.getElementById("bg").style.backgroundImage = active_image[active_button[0]];
});

document.getElementById("Reset").addEventListener("click", function() {
    document.getElementById("bg").style.backgroundImage = "none";
});

document.getElementById("ShowApp").addEventListener("click", function() {
    document.getElementById("app1").style.display = "block";
});

document.getElementById("HideApp").addEventListener("click", function() {
    document.getElementById("app1").style.display = "none";
});

zoom.addEventListener("click", function() {
    document.getElementById("zoomControls").style.display = "block";
});

document.getElementById("plus").addEventListener("click", function() {
    if (zoomSize[0] < 100) { //100% is the max size possible
        zoomSize[0] += 10;
        zoomSize[1] += 7;
        zoom.style.width = zoomSize[0] + "%";
        zoom.style.height = zoomSize[1] + "%";
    }
});

document.getElementById("minus").addEventListener("click", function() {
    if (zoomSize[0] > 10) { //10% is the minimum size possible without disappearing
        zoomSize[0] -= 10;
        zoomSize[1] -= 7;
        zoom.style.width = zoomSize[0] + "%"; 
        zoom.style.height = zoomSize[1] + "%";
    }
});

document.getElementById("Previous").addEventListener("click", function() {
    active_button[1] -= 1;
    if (active_button[1] < 1) {
        active_button[1] += 4;
    }
    display_image();
});

document.getElementById("Next").addEventListener("click", function() {
    active_button[1] += 1;
    if (active_button[1] > 4) {
        active_button[1] -= 4;
    }
    display_image();
});