var previewBox = document.getElementById("previewBox"),
    redRange = document.getElementById("redRange"),
    greenRange = document.getElementById("greenRange"),
    blueRange = document.getElementById("blueRange"),
    addColor = document.getElementById("addColor"),
    popColor = document.getElementById("popColor"),
    shiftColor = document.getElementById("shiftColor"),
    spliceColor = document.getElementById("spliceColor"),
    display = document.getElementById("display"),
    averageBox = document.getElementById("averageBox"),
    mixBox = document.getElementById("mixBox"),
/*    redArr = [],
    greenArr = [],
    blueArr = [],*/
    colorsArr = [];

function changeColor(){
   previewBox.style.backgroundColor = "rgb("+redRange.value+","+greenRange.value+","+blueRange.value+")";    
}

redRange.addEventListener("change", function(){
    changeColor();
});

function calcAvg(){
    var totalred = 0,
        totalgreen = 0,
        totalblue = 0;
        
    for(var i = 0; i < colorArr.length; i += 1) {
        totalred += colorsArr[i].red;
        totalgreen += colorsArr[i].green;
        totalblue += colorsArr[i].blue;        
    }
    
    var roundRed = Math.round(totalred/colorArr.length);
    var roundGreen = Math.round(totalgreen/colorArr.length);
    var roundBlue = Math.round(totalblue/colorArr.length);
    
    averageBox.style.backgroundColor = "rgb("+roundRed+","+roundGreen+","+roundBlue+")";    
}

function calcAvg2(){
    var total = 0;
    for(var i = 0; i < redArr.length; i+=1) {
        total += redArr[i];
    }
    var avg = total/redArr.length;
    var roundRed = Math.round(avg);
    
    total = 0;
    for(var i = 0; i < greenArr.length; i+=1) {
        total += greenArr[i];
    }
    avg = total/greenArr.length;
    var roundGreen = Math.round(avg);

    total = 0;
    for(var i = 0; i < blueArr.length; i+=1) {
        total += blueArr[i];
    }
    avg = total/blueArr.length;
    var roundBlue = Math.round(avg);
 
    averageBox.style.backgroundColor = "rgb("+roundRed+","+roundGreen+","+roundBlue+")";
}


function calcSum(){
    var totalRed = 0,
        totalGreen = 0,
        totalBlue = 0;
    for(var i = 0; i < colorsArr.length; i += 1){
        totalRed += colorsArr[i].red;
        totalGreen += colorsArr[i].green;
        totalBlue += colorsArr[i].blue;
        if(totalRed > 255){
            totalRed = 255;
        }
        if(totalGreen > 255){
            totalGreen = 255;
        }
        if(totalBlue > 255){
            totalBlue = 255;
        }
    }
    
    mixBox.style.backgroundColor = "rgb("+totalRed+","+totalGreen+","+totalBlue+")";    
}

greenRange.addEventListener("change", function(){
    changeColor();
});

blueRange.addEventListener("change", function(){
    changeColor();
});

function pushColors() {
/*    redArr.push(parseInt(redRange.value));
    greenArr.push(parseInt(greenRange.value));
    blueArr.push(parseInt(blueRange.value));*/
    
    var obj = {
        red:parseInt(redRange.value),
        green:parseInt(greenRange.value),
        blue:parseInt(blueRange.value)
    };

    colorsArr.push(obj);
    console.log(colorsArr);
}

function popColors() {
/*    redArr.pop();
    greenArr.pop();
    blueArr.pop();*/
    colorsArr.pop();
}

function shiftColors() {
/*    redArr.shift();
    greenArr.shift();
    blueArr.shift();*/    
    colorsArr.shift();
}

function spliceColors() {
    var startIndex = document.getElementById("spliceIndex").value;
    
    redArr.splice(startIndex, 1);
    greenArr.splice(startIndex, 1);
    blueArr.splice(startIndex, 1);
    colorsArr.splice(startIndex, 1);
}

function createSwatch(){
/*    var ndiv = document.createElement("div");
    ndiv.style.backgroundColor = previewBox.style.backgroundColor;
    ndiv.className = "swatches";
    display.appendChild(ndiv);*/
    
    display.innerHTML = ""; // clear out everything in display
/*    for(var i = 0; i < redArr.length; i += 1) {
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb("+redArr[i]+","+greenArr[i]+","+blueArr[i]+")";
        ndiv.className = "swatches";
        display.appendChild(ndiv);
    }*/

    for(var i = 0; i < colorsArr.length; i += 1) {
        var ndiv = document.createElement("div");
        ndiv.style.backgroundColor = "rgb("+colorsArr[i].red+","+colorsArr[i].green+","+colorsArr[i].blue+")";
        ndiv.className = "swatches";
        display.appendChild(ndiv);
    }
    
    calcAvg();
    calcSum();
}

addColor.addEventListener("click", function(){
    pushColors();
    createSwatch();
});

popColor.addEventListener("click", function(){
    popColors();
    createSwatch();
});

shiftColor.addEventListener("click", function(){
    shiftColors();
    createSwatch();
});

spliceColor.addEventListener("click", function(){
    spliceColors();
    createSwatch();
});
