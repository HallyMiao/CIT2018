var back1 = document.getElementById("bg1");
var back2 = document.getElementById("bg2");
var back3 = document.getElementById("bg3");
var back4 = document.getElementById("bg4");
var mainDiv = document.getElementById("main");
var titleText = document.getElementById("title");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");

back1.addEventListener("click", function() {
    mainDiv.style.display = "block";
    title.innerText = "Head Gear";
    img1.style.backgroundImage = "url(imgs/gears/h1.png)";  
    img2.style.backgroundImage = "url(imgs/gears/h2.png)";
    img3.style.backgroundImage = "url(imgs/gears/h3.png)";
});

back2.addEventListener("click", function() {
    mainDiv.style.display = "block";
    title.innerText = "Body Gear";
    img1.style.backgroundImage = "url(imgs/gears/b1.png)";  
    img2.style.backgroundImage = "url(imgs/gears/b2.png)";
    img3.style.backgroundImage = "url(imgs/gears/b3.png)";
});

back3.addEventListener("click", function() {
    mainDiv.style.display = "block";
    title.innerText = "Leg Gear";
    img1.style.backgroundImage = "url(imgs/gears/l1.png)";  
    img2.style.backgroundImage = "url(imgs/gears/l2.png)";
    img3.style.backgroundImage = "url(imgs/gears/l3.png)";
});

back4.addEventListener("click", function() {
    mainDiv.style.display = "block";
    title.innerText = "Foot Gear";
    img1.style.backgroundImage = "url(imgs/gears/f1.png)";  
    img2.style.backgroundImage = "url(imgs/gears/f2.png)";
    img3.style.backgroundImage = "url(imgs/gears/f3.png)";
});

mainDiv.addEventListener("click", function() {
    mainDiv.style.display = "none";
});