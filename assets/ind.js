let randomNumber=Math.floor(Math.random()*100)+1;
let guesses=document.querySelector(".guesses");
let lastResult=document.querySelector(".lastResult");
let lowOrHi=document.querySelector(".lowOrHi");
let guessField=document.querySelector(".guessField");
let guessSubmit=document.querySelector(".guessSubmit");
let guessCount=1;
let resetButton;

function checkGuess(){
    let userGuess=Number(guessField.value);
    if(guessCount===1){
        guesses.textContent="Previous guesses: ";
    } 
    guesses.textContent+=`${userGuess}`;
    if(userGuess===randomNumber){
        lastResult.textContent = "Congratulations!You are right!";
        lastResult.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        setGameOver();
    }
    else if(guessCount===10){
        lastResult.textContent="GAME OVER";
        setGameOver();
    }
    else{
        lastResult.textContent="Wrong";
        lastResult.style.backgroundColor="red";
    }
    if(userGuess<randomNumber){
        lowOrHi.textContent='Last guess is too low';
    }
    else if(userGuess>randomNumber){
        lowOrHi.textContent='You guess is to high'
    }
    guessCount++
    guessField.value='';
    guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);


