const API_KEY = "4b30408217d2c702532f9e3cf3ab9e79";




const geoImg = document.querySelector("img");
const geoResult =  document.querySelector(".geoSection h3");


navigator.geolocation.getCurrentPosition(geoFindSuccess, geoFindFail);

function geoFindSuccess(position){
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`;

fetch(url).then(v=>v.json()).then(data=>{

const city = data['name'];
const weather = data.weather[0].main;
const metric = data.main.temp;
const icon = data.weather[0].icon;
geoImg.src = `https://openweathermap.org/img/wn/${icon}@2x.png`

    geoResult.innerText = `${city}   
    ${metric}
    ${weather}
    `

});



}


function geoFindFail(){
    geoResult.ineerText = "Can't find your loaction";
}