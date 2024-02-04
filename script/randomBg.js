const bgImages = [
    "0.gif",
    "1.gif",
    "2.gif",
    "3.gif",

    
];
//let nowBg = bgImages[Math.floor(Math.random() * bgImages.length)];


function changeBg(){

let i =0;

function changeBgImg (){
    let nowBg = bgImages[i];
    document.querySelector(".backgroundSection").style.backgroundImage = `url('img/${nowBg}')`;
    
   
    console.log(i);
    i++;
    if(i>= bgImages.length){
       return i=0;
    }
}

return changeBgImg;
}

const slideShow = changeBg();


slideShow();
setInterval(slideShow, 3000);
