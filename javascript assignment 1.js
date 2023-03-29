// var yourName = prompt("fine boy, what's your name")
// var yourAge = prompt("How old are you") 
// // var yourPersonality = prompt("congratulations Paul")
// alert("You are welcome " + yourName + ". you are " +yourAge + " . Congratulations , you are welcome " )
// var name = prompt ("what is your name")
// var firstletter = (name.slice(0,1)).toLocaleUpperCase()
// var restletters = (name.slice(1,120)).toLocaleLowerCase()
// alert(`You are welcome ${firstletter}${restletters}`)

var yourName = prompt("Hey Programmer, what's your name");
var yourAge = prompt("How old are you");
var yourCountry = prompt("What is your nationality");
var firstletter = (yourName.slice (0,1)).toLocaleUpperCase();
var restletters = (yourName.slice (1,100)).toLocaleLowerCase();
var firstcha = (yourCountry.slice (0,1)).toLocaleUpperCase();
var restcha = (yourCountry.slice (1,100)).toLocaleLowerCase();
alert(`You are welcome ${firstletter}${restletters}, you are ${yourAge} years old, ${firstcha}${restcha} is under our domain, please proceed to the next step`)