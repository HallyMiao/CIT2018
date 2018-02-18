var bgText = document.getElementById("bgText");
var prevDiv = document.getElementById("preview");
var c1 = document.getElementById("choice1");
var c2 = document.getElementById("choice2");
var c3 = document.getElementById("choice3");
var picChooser = document.getElementById("picChooser");

var numUse = 0;

// keyup return key lifted to first argument in fuunction
bgText.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13) { // code 13 = enter
        if(c1.checked) { // checked returns if a radio button is checked
            //document.body.style.backgroundColor = bgText.value;
            if(bgText.value == "picture") {
                document.body.style.backgroundImage = "url(imgs/1.png)";
            } else if(bgText.value == "wind") {
                document.body.style.backgroundImage = "url(imgs/2.png)";
            } else if(bgText.value == "sun") {
                document.body.style.backgroundImage = "url(imgs/3.png)";
            } else {
                document.body.style.backgroundColor = bgText.value;
            }
        } else if(c2.checked) {
            //prevDiv.style.backgroundColor = bgText.value;
            if(bgText.value == "picture") {
                prevDiv.style.backgroundImage = "url(imgs/1.png)";
            } else if(bgText.value == "wind") {
                prevDiv.style.backgroundImage = "url(imgs/2.png)";
            } else if(bgText.value == "sun") {
                prevDiv.style.backgroundImage = "url(imgs/3.png)";
            } else {
                prevDiv.style.backgroundColor = bgText.value;
            }
        } else if(c3.checked) {
            //menu.style.backgroundColor = bgText.value;
            if(bgText.value == "picture") {
                menu.style.backgroundImage = "url(imgs/1.png)";
            } else if(bgText.value == "wind") {
                menu.style.backgroundImage = "url(imgs/2.png)";
            } else if(bgText.value == "sun") {
                menu.style.backgroundImage = "url(imgs/3.png)";
            } else {
                menu.style.backgroundColor = bgText.value;
            }
        } else {
            alert("Choose an option");
        }
    
        bgText.value = "";

        numUse++;
        if(numUse > 5){
            //alert("You've reached the limit. Please pay to use more!");
            document.body.innerHTML = "You've reached the limit. Please pay to use more!";
        }
    }
});

picChooser.addEventListener("change", function() {
    var picNum = parseInt(picChooser.value);
    
    if(picNum > 3) {
        picChooser.value = 1;
    }
    
    if(picNum < 1) {
        picChooser.value = 3;
    }
    prevDiv.style.backgroundImage = "url(imgs/"+picChooser.value+".png";
});