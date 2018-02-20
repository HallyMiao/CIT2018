var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var c4 = document.getElementById("choice4");
var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var img4 = document.getElementById("img4");
var Textbox = document.getElementById("bgText");

var current_img = [1,1,1,1];

function update_image() {
    img1.src = "imgs/gears/h" + current_img[0] + ".png";
    img2.src = "imgs/gears/b" + current_img[1] + ".png";
    img3.src = "imgs/gears/l" + current_img[2] + ".png";
    img4.src = "imgs/gears/f" + current_img[3] + ".png";
}

document.getElementById("next").addEventListener("click", function() {
    if (c1.checked) {
        current_img[0] += 1;
        if (current_img[0] > 3) {current_img[0] = 1;}
    } else if (c2.checked) {
        current_img[1] += 1;
        if (current_img[1] > 3) {current_img[1] = 1;}
    } else if (c3.checked) {
        current_img[2] += 1;
        if (current_img[2] > 3) {current_img[2] = 1;}
    } else if (c4.checked) {
        current_img[3] += 1;
        if (current_img[3] > 3) {current_img[3] = 1;}
    } else {
        alert("Select an item.")
    }
    update_image();
});

document.getElementById("prev").addEventListener("click", function() {
    if (c1.checked) {
        current_img[0] -= 1;
        if (current_img[0] < 1) {current_img[0] = 3;}
    } else if (c2.checked) {
        current_img[1] -= 1;
        if (current_img[1] < 1) {current_img[1] = 3;}
    } else if (c3.checked) {
        current_img[2] -= 1;
        if (current_img[2] < 1) {current_img[2] = 3;}
    } else if (c4.checked) {
        current_img[3] -= 1;
        if (current_img[3] < 1) {current_img[3] = 3;}
    } else {
        alert("Select an item.")
    }
    update_image();
});

function randomize() {
    var temp = [0,0,0,0];
    temp[0] = Math.floor(Math.random()*3) + 1;
    temp[1] = Math.floor(Math.random()*3) + 1;
    temp[2] = Math.floor(Math.random()*3) + 1;
    temp[3] = Math.floor(Math.random()*3) + 1;
    return temp;
}

function change_input(input) {
    var temp = input.split(", ");
    if (temp.indexOf("head1") > -1) {current_img[0] = 1;}
    if (temp.indexOf("head2") > -1) {current_img[0] = 2;}
    if (temp.indexOf("head3") > -1) {current_img[0] = 3;}
    if (temp.indexOf("body1") > -1) {current_img[1] = 1;}
    if (temp.indexOf("body2") > -1) {current_img[1] = 2;}
    if (temp.indexOf("body3") > -1) {current_img[1] = 3;}
    if (temp.indexOf("leg1") > -1) {current_img[2] = 1;}
    if (temp.indexOf("leg2") > -1) {current_img[2] = 2;}
    if (temp.indexOf("leg3") > -1) {current_img[2] = 3;}
    if (temp.indexOf("foot1") > -1) {current_img[3] = 1;}
    if (temp.indexOf("foot2") > -1) {current_img[3] = 2;}
    if (temp.indexOf("foot3") > -1) {current_img[3] = 3;}
}

Textbox.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13) {
        if(Textbox.value == "combo1") {
            current_img = [1,1,1,1];
        } else if(Textbox.value == "combo2") {
            current_img = [2,2,2,2];
        } else if(Textbox.value == "combo3") {
            current_img = [3,3,3,3];
        } else if(Textbox.value == "random") {
            current_img = randomize();
        } else {
            change_input(Textbox.value);
        }
        Textbox.value = "";
        update_image();
    }
});