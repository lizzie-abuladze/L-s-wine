let btnElement = document.getElementById("buttonEl");
btnElement.addEventListener('click' , function(){
    alert("Awesome! Your news will be delivered shortly.");
})
let navElement = document.getElementById("navBar");
let burgerElement = document.getElementById("burgerBar");

burgerElement.addEventListener('click' , function(){
    navElement.classList.toggle("activeNav");
})