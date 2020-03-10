var guessingGame = alert("Welcome to Coding Karaoke! Press ok to get started.");{
    console.log("alert here");
}

 //initial array and variables. Global scopes.
    var game=["Beat it", "Welcome to the Jungle", "Immigrant Song", "Call Me"]
    var choice= Math.floor(Math.random()*4);
    var answer = game[choice];
    var myLength = answer.length;
    var display=[myLength];
    var win=myLength;
    var letters = answer.split('')
    var attemptsLeft= 10;
    var output="";
    var userLetter="";

var setup = function(){

    for (var i=0; i<answer.length; i++){
        display[i] = "_ ";
        output = output+display[i];
    }
    document.getElementById('game').innerHTML=output;
    output ="";
}

window.onload=function(){
    setup()
}








