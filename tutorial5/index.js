var dispDiv = document.getElementById("display"),
    st1 = document.getElementById("st1"),
    st2 = document.getElementById("st2"),
    imgSrc = null,
    stInp = document.getElementById("stickerUrl"),
    hInp = document.getElementById("stickerHeight"),
    imgH = 100,
    stC = document.getElementById("cursor");

document.getElementById("bgcolor").addEventListener("change", function(){
    // "this" refers to document.getElementById("bgcolor")
    dispDiv.style.backgroundColor = this.value;
});

function changeSrc(source) {
    dispDiv.style.cursor = "none";
    console.log(source);
    imgSrc = source;
    stC.src = source;
}

st1.addEventListener("click", function(){
    changeSrc(this.src);
});

st2.addEventListener("click", function(){
    changeSrc(this.src);
});

dispDiv.addEventListener("click", function (ev){
    if (imgSrc == null) {return;}
    var newImg = document.createElement("img");
    newImg.src = imgSrc;
    newImg.className = "displayStickers";
    newImg.style.height = imgH + "px";
    dispDiv.appendChild(newImg);
    
    // ev.pageX/Y refer to mouse position
    newImg.style.left = ev.pageX-parseInt(newImg.width)/2+"px";
    newImg.style.top = ev.pageY-parseInt(newImg.height)/2+"px";
});

stInp.addEventListener("keyup", function(ev){
    if (ev.keyCode == 13) { // 13 is enter
        var newSticker = document.createElement("img");
        newSticker.src = stInp.value;
        newSticker.className = "stickers";
        document.getElementById("stickers").appendChild(newSticker);
        stInp.value = "";
        newSticker.addEventListener("click", function() {
            changeSrc(this.src);
        });
    }
});

hInp.addEventListener("keyup", function(ev) {
    if (ev.keyCode == 13) {
       imgH = hInp.value;
       hInp.placeholder = "Sticker height: " + hInp.value + "px";
       hInp.value = "";
   } 
});

dispDiv.addEventListener("mousemove", function(ev){
    stC.style.top = ev.pageY-parseInt(stC.height)/2+"px";
    stC.style.left = ev.pageX-parseInt(stC.width)/2+"px";
});