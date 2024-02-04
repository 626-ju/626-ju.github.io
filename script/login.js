const loginForm = document.querySelector(".loginForm");
const loginGreet = document.querySelector(".greeting");

let userName = "";
let savedUserName = localStorage.getItem("userName");

if (savedUserName !== null) {
  userName = savedUserName;
  greet(userName);
}
loginForm.addEventListener("submit", submitUserName);





function submitUserName(event) {
  event.preventDefault();
  userName = loginForm.querySelector("input").value;
  saveUserName(userName);
  greet(userName);
}

function saveUserName(userName) {
  localStorage.setItem("userName", userName);
}

function greet(userName) {
  loginForm.classList.add("hidden");
  loginGreet.classList.remove("hidden");


  loginGreet.innerText = `お久しぶりです ${userName}`;

  /*
  const tempDate = new Date().getHours();
  
  if(tempDate< 12 && tempDate>6 ){
    loginGreet.innerText = `Good moring ${userName}`;
  }
  else if(tempDate >= 12 && tempDate<18){
    loginGreet.innerText = `Good afternoon ${userName}`;
  } else if( tempDate >= 18 && tempDate<22) {
    loginGreet.innerText = `Good evening ${userName}`;
  }else{
    loginGreet.innerText = `Good night ${userName}`;
  }
  */

 
}
