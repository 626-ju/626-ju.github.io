const clock = document.querySelector("#clock");
const nowDate = document.querySelector("#nowDate");




showClock();
setInterval(showClock, 1000);





function showClock(){

const date= new Date();

const year = String(date.getFullYear()).padStart(2,0);
const month = String(date.getMonth() + 1).padStart(2,0);
const day = String(date.getDate()).padStart(2,0);

const hours = String(date.getHours()).padStart(2,0);
const minutes = String(date.getMinutes()).padStart(2,0);
const seconds = String(date.getSeconds()).padStart(2,0);

nowDate.innerText = `${year}년 ${month}월 ${day}일`
clock.innerText = `${hours} : ${minutes} : ${seconds}`;

}