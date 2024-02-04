const bgImages = [
    "0.png",
    "1.png",
 
    "2.png",

    "3.png",

    "4.gif",
   

    
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
       i=0;
    }
}

return changeBgImg;
}

const slideShow = changeBg();


slideShow();
setInterval(slideShow, 3000);
