var myHeading = document.querySelector('h1');
myHeading.textContent = 'Виды боевых искусств';
var myVariable = document.querySelector('h1');
alert('Привет!');

window.onload = function(){
 window.setInterval(function(){
      var now = new Date();
       var clock = document.getElementById("clock");
     clock.innerHTML = now.toLocaleTimeString();
 }, 1000);
};