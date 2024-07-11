let randomNumber = parseInt(Math.random() * 100 + 1);
const guessSubmit = document.querySelector('#guessSubmit');
const userInput = document.querySelector('#userInput');
const preGuesses = document.querySelector('.preGuesses');
const remainingAtt=document.querySelector('.remainingAtt'); 
const result=document.querySelector('.result');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p');

let preGuess=[];
let numGuess=0;
let playGame=true;

if(playGame){                                //if play game is allowed then proceed
    guessSubmit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){               //validate the guess entered in field,and no of attempts
    if(isNaN(guess)){
        alert("Please enter a valid number");
    }
    else if(guess<1||guess>100){
        alert("Number must be between 1-100");
    }
    else{
        numGuess+=1;

        preGuess.push(guess);
        displayGuess(guess);

        checkGuess(guess);

        if(numGuess===10){
            displayMessage(`Game over. random number was ${randomNumber}`);
            endGame();
        }
    }
}

function checkGuess(guess){                 //check whether guess is high,low,correct
    if(guess===randomNumber){
        displayMessage(`You guessed it right,You won`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage(`Guess is TOO low,Please retry`);
    }
    else{
        displayMessage(`Guess is TOO high,Please retry`);
    }
}

function displayGuess(guess){              //display details
    userInput.value='';
    preGuesses.innerHTML+=`${guess}, `;
    remainingAtt.innerHTML=`${10-numGuess}`;
}

function displayMessage(message){             //display message in result section
    result.innerHTML=`${message}`;

}

function endGame(){                          //end the game(after won/loss)
    userInput.value='';
    userInput.setAttribute('disabled','');

    p.innerHTML=`<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame=false;

    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame');
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() * 100 + 1);
        preGuess=[];
        numGuess=0;
        remainingAtt.innerHTML=`${10-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage("GAME STARTED");

        playGame=true;
    })
}