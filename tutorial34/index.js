var disp = document.getElementById("display");
var bgInp = document.getElementById("bgText");
var menu = document.getElementById("menu");

var ir = document.getElementById("red");
var ig = document.getElementById("green");
var ib = document.getElementById("blue");

var rr = document.getElementById("rred");
var rg = document.getElementById("rgreen");
var rb = document.getElementById("rblue");

var colorInp = document.getElementById("colorInp");

var curElement = disp;

menu.addEventListener("click", function() {
    curElement = menu;
});

disp.addEventListener("click", function() {
    curElement = disp;
});

bgInp.addEventListener("click", function() {
    curElement = bgInp;
});

document.getElementById("change").addEventListener("click", function(){
    curElement.style.backgroundColor = bgInp.value;
    bgInp.value = "";
});

ir.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rr.value = ir.value;
});

ig.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rg.value = ig.value;
});

ib.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+ir.value+", "+ig.value+", "+ib.value+")";
    rb.value = ib.value;
});

rr.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ir.value = rr.value;
});

rg.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ig.value = rg.value;
});

rb.addEventListener("change", function () {
    curElement.style.backgroundColor = "rgb("+rr.value+", "+rg.value+", "+rb.value+")";
    ib.value = rb.value;
});

colorInp.addEventListener("change", function() {
    curElement.style.backgroundColor = colorInp.value;
});

