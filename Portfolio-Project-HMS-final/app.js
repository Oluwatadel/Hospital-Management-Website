var i = 0;
var images = [];
var time = 3000;

//Image list
images[0]='doc1.jpg';
images[1]='doc2.jpg';
images[2]='doc3.jpg';
images[3]='doc4.jpg';
images[4]='doc5.jpg';

//Change image
function changeImg(){
    document.slide.src = images[i];
    if (i < images.length - 1){
        i++;
    }else{
        i = 0;
    }
    setTimeout("changeImg()", time)
}

window.onload = changeImg;