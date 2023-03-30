

var yourName = prompt("Hey Programmer, what's your name");
var yourAge = prompt("How old are you");
var yourCountry = prompt("What is your nationality");
var firstletter = (yourName.slice (0,1)).toLocaleUpperCase();
var restletters = (yourName.slice (1,100)).toLocaleLowerCase();
var firstcha = (yourCountry.slice (0,1)).toLocaleUpperCase();
var restcha = (yourCountry.slice (1,100)).toLocaleLowerCase();
alert(`You are welcome ${firstletter}${restletters}, you are ${yourAge} years old, ${firstcha}${restcha} is under our domain, please proceed to the next step`)
