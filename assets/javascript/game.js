alert("Welcome to Coding Karaoke! Press ok to get started.");{
    console.log("alert here");
}

 //initial array and variables. Global scopes.
    var names=["Beat it", "Welcome to the Jungle", "Immigrant Song", "Call Me"]
    var choice= Math.floor(Math.random()*4);

    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z']
    hints = ["Micheal Jackson's hit song where he collabs with Eddie Van Halen", "Axl Rose sings about his love of forestry", "That Led Zeplin song from the Good Thor movie",
    "Blondie hit song about a lady of the night"];

    var wordHolder ="";
    var numOfLetters = [];
    var numBlank = 0;
    var blanksAndLetters = [];
    var incorrect = [];

    var wins = 0;
    var losses =0;
    var guessesRemaining = 0;

    var messages = {
        start: "Type a letter to get started...",
        hint: "hintIndex",
        lose: "Not even close, bud",
        win: "Oh good for you!",
        warning: "please enter a letter"
    };

  //functions for the game  
    function startTheGame(){
        wordHolder = names[Math.floor(Math.random()* names.length)];
        numOfLetters = wordHolder.split("");
        numBlank = numOfLetters.length;
    
    hint.onclick = function (){
//find index of current word
        var hintIndex = names.indexOf(wordHolder);
//will display a hint
        document.getElementById("messages").innerHTML = hints[hintIndex];

    }
    
//resets
    guessesRemaining= 10;
    incorrect = [];
    blanksAndLetters = [];


    document.getElementById("messages").innerHTML = blanksAndLetters.join(".");
    for (var i = 0; i< numBlank; i++){
        blanksAndLetters.push("_");
    }


    document.getElementById("display").innerHTML = blanksAndLetters.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesRemaining;
    
    console.log(wordHolder);
    console.log(numOfLetters);
    console.log(numBlank);
    console.log(blanksAndLetters);
    };


    function checkLetter(letter) {
     
        // if exists
        var isInWord = false;
        for (var i = 0; i <numBlank; i++) {
            if(wordHolder[i]=== letter) {
                isInWord = true;
            }
        }
        if(isInWord){
            for (var i = 0; i<numBlank; i++){
                if(wordHolder[i]===letter){    
                blanksAndLetters[i] = letter;
            }
        }
    }else if (incorrect.includes(letter)){

    }else {
        incorrect.push(letter);
        guessesRemaining--;
    }

function roundAndRound(){
    console.log ("wins:"+ wins +" | Losses:" + losses + " | Guesses left:" + guessesRemaining);

    document.getElementById("display").innerHTML =  blanksAndLetters.join(".");
    doocument.getElementById("numGuesses").innerHTML = guessesRemaining;
    document.getElementById("incorrect").innerHTML = incorrect.join(".");

///Winner    
    if(numOfLetters.toString() === blanksAndLetters.toString()){
        audioElement.play();
        wins++;
        alert ("Winner!")
        document.getElementById("messages").innerHTML = messages["win"];
        document.getElementById("winCounter").innerHTML = wins;

        startTheGame();
    } ///loser
    else if (guessesRemaining === 0){
        losses++;
        alert ("Bummer my dude, try again.")
        document.getElementById("messages").innerHTML = messages["lose"];
        document.getElementById("winCounter").innetHTML = losses;

        startTheGame();
    }
}
    for (var i = 0; i < alphabet.length;++) {
        var letterBtn = $("<button>");
        letterBtn.addClass("letter-button letter btn-link letter-button-color");
        letterBtn.attr ("data-alphabet", alphabet[i]);
        letterBtn.text(alphabet[i]);
        $("#keyboard").append(letterBtn);
    }
// letteer button 'on-click'
$(document).on("click", '.letter-button', function (e) {
    var letterGuessed =  e.target.innerHTML.toLowerCase();

    checkLetter(letterGuessed);
    roundAndRound();

    console.log(letterGuessed);
});
//onkeyup
document.onkeyup = function(e){
    var letterGuessed = String.fromCharCode(e.keyCode).toLocaleLowerCase();

    if (e.keyCode >= 65 && e.keyCode <= 90){
        checkLetter(letterGuessed);
        roundAndRound();
    }else {
        document.getElementById("messages").innerHTML = messages["warning"];
    }
   console.log(letterGuessed); 
}





    var setup = function(){
    for (var i=0; i<answer.length; i++){
        display[i] = "_ ";
        output = output+display[i];
    }
    document.getElementById('game').innerHTML=output;
    output ="";
}

//automatically correts letters guessed from what's typed to lower case letters.
document.onkeyup = function(e) {
    var letterGuessed = String.fromCharCode(e.keyCode).toLowerCase();

    if (e.keyCode >= && e.keyCode <= 90){
        checkLetter(letterGuessed);
        roundAndRound();
    } else {
        document.getElementById('').innerHTML = messages["warning"];
    }
        console.log(letterGuessed);
    }


}

window.onload=function(){
    setup()
}










