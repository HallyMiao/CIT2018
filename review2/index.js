var menu = document.getElementById("menu"),
    ctrl = document.getElementById("controls"),
    bgImg = document.getElementById("BgImg"),
    TitleC = document.getElementById("TitleC"),
    DesC = document.getElementById("DesC"),
    TitleD = document.getElementById("TitleD"),
    DesD = document.getElementById("DesD"),    
    background = document.getElementById("background"),
    TextC = document.getElementById("TextC"),
    disp = document.getElementById("display"),
    disp2 = document.getElementById("display2"),
    plus = document.getElementById("plus"),
    menuPos = 0,
    BgPos = [0, 0],
    currentView = [background, TitleD, DesD, null],
    bgH = 300,
//    bgKey = ["imgs/bg1.jpg","imgs/bg2.jpg","imgs/bg3.jpg","imgs/bg4.jpg"];
    bgKey = ["imgs/1.png","imgs/2.png","imgs/3.png","imgs/4.png"];
// above for testing without the default image names in folder

function expandMenu(imp = "open") {
    if (imp == "open") {
        ctrl.style.bottom = 0 + "px";
        return 1;
    }
    ctrl.style.bottom = -139 + "px";
    return 0;
}

menu.addEventListener("click", function() {
    if (menuPos == 0) {
        menuPos = expandMenu();
    } else {
        menuPos = expandMenu("close");
    }
});

function changeBG(imp = currentView[3]) {
    if (imp == "horse") {
        imp = bgKey[0];
    } else if (imp == "night") {
        imp = bgKey[1];
    } else if (imp == "mountain") {
        imp = bgKey[2];
    } else if (imp.indexOf("epic") != -1) {
        imp = bgKey[3];
    }
    currentView[0].style.backgroundImage = "url(" + imp + ")";
    currentView[3] = imp;
    return;
}

bgImg.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13) {
        changeBG(bgImg.value);
        bgImg.value = "";
    }
});

function changeDescription(imp = DesC.value) {
    currentView[2].innerText = imp;
    return;
}

DesC.addEventListener("keyup", function(ev){
    changeDescription();
});

function changeTitle(imp = TitleC.value) {
    currentView[1].innerText = imp;
    return;
}

TitleC.addEventListener("keyup", function(ev){
    changeTitle();
});

function changeColor(color = TextC.value) {
    currentView[1].style.color = color;   
    currentView[2].style.color = color;
    return;
}

TextC.addEventListener("change", function(){
    changeColor();
});

function moveBG(key) {
    if (key == 38) {
        BgPos[1] -= 10;
    } else if (key == 40) {
        BgPos[1] += 10;
    } else if (key == 37) {
        BgPos[0] -= 10;
    } else if (key == 39) {
        BgPos[0] += 10;
    }
    background.style.backgroundPosition = BgPos[0] + "px " + BgPos[1] + "px";
    return;
}

function bgHeight(key) {
    if (key == 61) {
        bgH += 10;
    } else {
        if (bgH == 0) {return;}
        bgH -= 10;
    }
    background.style.height = bgH + "px";
    disp2.style.top = bgH + "px";
    return;
}

document.addEventListener("keydown", function(ev) {
    if ([37, 38, 39, 40].indexOf(ev.keyCode) > -1) {
        moveBG(ev.keyCode);
        ev.preventDefault();
    } else if ([61, 173].indexOf(ev.keyCode) > -1) {
        bgHeight(ev.keyCode);
    }
    return;
});

function createStoryboard(title,desc) {
    var board = document.createElement("div"),
        boardT = document.createElement("div"),
        boardD = document.createElement("div");
    board.className = "backgrounds col-xl-3 col-lg-4 col-md-6 col-sm-12";
    boardT.className = "DisplayTitle";
    boardT.innerHTML = title;
    boardD.className = "DisplayDesc";
    boardD.innerHTML = desc;
    
    currentView = [board, boardT, boardD, currentView[3]];
    changeBG();
    changeColor();
    changeTitle();
    changeDescription();
    
    board.appendChild(boardT);
    board.appendChild(boardD);
    disp2.appendChild(board);
    return;
}

plus.addEventListener("click", function(){
    if (currentView[3] == null) {return;}
    createStoryboard(TitleD.innerHTML,DesD.innerHTML);
});