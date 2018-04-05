var bg = document.getElementById("preview"),
    color = document.getElementById("colorimp"),
    range = document.getElementById("range"),
    number = document.getElementById("number"),
    s1 = document.getElementById("slide1"),
    s2 = document.getElementById("slide2"),
    s3 = document.getElementById("slide3"),
    s4 = document.getElementById("slide4"),
    hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth"),
    plus = document.getElementById("plus"),
    display = document.getElementById("display"),
    random = document.getElementById("random"),
    auto = document.getElementById("auto"),
    stop = document.getElementById("stop"),
    timer = null,
    imgdisp = [1,1,1,1],
    imgtext = ["hair","eyes","nose","mouth"];

function changebgC(object,colors) {
    object.style.backgroundColor = colors;
    return;
}
    
color.addEventListener("change", function() {
    changebgC(bg,this.value);
});

function changeType(type) {
    s1.type = type;
    s2.type = type;
    s3.type = type;
    s4.type = type;
}

range.addEventListener("click", function() {
    changeType("range");
});

number.addEventListener("click", function() {
    changeType("number");
});

function widthChange(item,percentage) {
    item.style.width = percentage + "%";
    return;
}

s1.addEventListener("change", function() {
    widthChange(hair,this.value);
});

s2.addEventListener("change", function() {
    widthChange(eyes,this.value);
});

s3.addEventListener("change", function() {
    widthChange(nose,this.value);
});

s4.addEventListener("change", function() {
    widthChange(mouth,this.value);
});

function change(object, slot, shift = 1) {
    imgdisp[slot-1] += shift;
    if (imgdisp[slot-1] > 3) {imgdisp[slot-1] = 1;}
    object.src = "img/" + imgtext[slot-1] + imgdisp[slot-1] + ".png";
    return;
}

hair.addEventListener("click", function() {
    change(hair, 1);
});

eyes.addEventListener("click", function() {
    change(eyes, 2);
});

nose.addEventListener("click", function() {
    change(nose, 3);
});

mouth.addEventListener("click", function() {
    change(mouth, 4);
});

function createFace() {
    var mydiv = document.createElement("div"),
        myhair = document.createElement("img"),
        myeyes = document.createElement("img"),
        mynose = document.createElement("img"),
        mymouth = document.createElement("img");
    
    display.appendChild(mydiv);
    mydiv.appendChild(myhair);
    mydiv.appendChild(myeyes);
    mydiv.appendChild(mynose);
    mydiv.appendChild(mymouth);

    myhair.className = "items";
    myeyes.className = "items";
    mynose.className = "items";
    mymouth.className = "items";
    mydiv.className = "dispImg col-xl-4 col-lg-6 col-md-8 col-sm-12";
    
    mydiv.style.backgroundColor = color.value;
    
    myhair.style.width = s1.value + "%";
    myhair.style.top = "0%";
    myeyes.style.width = s2.value + "%";
    myeyes.style.top = "40%";
    mynose.style.width = s3.value + "%";
    mynose.style.top = "55%";
    mymouth.style.width = s4.value + "%";
    mymouth.style.top = "75%";

    change(myhair, 1, 0);
    change(myeyes, 2, 0);
    change(mynose, 3, 0);
    change(mymouth, 4, 0);
    return;
}

plus.addEventListener("click", function() {
    createFace();
});

function randomFace() {
    imgdisp[0] = Math.floor((Math.random() * 3) + 1);
    imgdisp[1] = Math.floor((Math.random() * 3) + 1);
    imgdisp[2] = Math.floor((Math.random() * 3) + 1);
    imgdisp[3] = Math.floor((Math.random() * 3) + 1);
    colorimp.value = "#" + (Math.floor(Math.random() * 256)).toString(16) + (Math.floor(Math.random() * 256)).toString(16) + (Math.floor(Math.random() * 256)).toString(16);
    change(hair, 1, 0);
    change(eyes, 2, 0);
    change(nose, 3, 0);
    change(mouth, 4, 0);
    changebgC(bg, color.value);    return;
}

random.addEventListener("click", function() {
    randomFace();
});

auto.addEventListener("click", function() {
    if (timer == null) {
        creation = true;
        timer = setInterval(function (){
            randomFace();
            createFace();
        },500);
    }
});

stop.addEventListener("click", function() {
    clearInterval(timer);
    timer = null;
});