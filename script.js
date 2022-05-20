

let randomNumber = Math.floor(Math.random() * 90 + 10); //assigns the variable randomNumber a numerical value between 10 and 100

// these variables are used to store a reference to the results p elements of our HTML
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

// these variables are used to store references to the form and the submit buttons
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

let counmas=0;
function checkGuess() {
    let userGuess = Number(guessField.value);     
    if (guessCount === 1) {     
      guesses.textContent = 'Previous guesses: ';
    }
    
    guesses.textContent += userGuess + ' ';  
    if (userGuess === randomNumber)
    {  
      counmas++;
      if(counmas==3){
        lastResult.textContent = 'Congratulations! You mastered the game!';
        lastResult.style.backgroundColor = 'green';   
        lowOrHi.textContent = '';
        setGameOver(); 
      }

      else{
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.backgroundColor = 'green';   
        lowOrHi.textContent = '';
        setGameOver(); 
      }

    }else if (guessCount === 7) {     // if the player reaches 7 guesses
      counmas=0;
      lastResult.textContent = '!!!GAME OVER!!!'; 
      let num = randomNumber;
      let textwit = num.toString();
      lowOrHi.textContent = 'Correct number is : ' + textwit;  
      setGameOver();   

    } else {    // if the player has not reached 7 guesses (and its just playing wrong)
      lastResult.textContent = 'Wrong!';    
      lastResult.style.backgroundColor = 'red'; 
      let gu1 = parseInt(userGuess/10);
      let gu2 = userGuess%10;
      let ran1 = parseInt(randomNumber/10);
      let ran2 = randomNumber%10;
      if (ran1 != gu1 && ran2 != gu2) {
        if (ran1 == gu2 && ran2 == gu1) {
          lowOrHi.textContent = "0B,2C" ;
        } else if (ran1 != gu2 && ran2 != gu1) {
          lowOrHi.textContent ="0B,0C";
        } else {
            lowOrHi.textContent ="0B,1C";
        }
      }else {
        lowOrHi.textContent ="1B,0C";
      }
    }
   

    guessCount++; 
    guessField.value = ''; 
    guessField.focus();  
  }

  
  guessSubmit.addEventListener('click', checkGuess);

  //a function to end the game 
  function setGameOver() {
    guessField.disabled = true;   
    guessSubmit.disabled = true;  
    resetButton = document.createElement('button'); 
    resetButton.textContent = 'Start new game';  
    document.body.append(resetButton);   
    resetButton.addEventListener('click', resetGame);   
  }

  //when the game is resetted
  function resetGame() {
    guessCount = 1;   
  
    const resetParas = document.querySelectorAll('.resultParas p'); 
    for (let i = 0 ; i < resetParas.length ; i++) {
      resetParas[i].textContent = '';
    }
  
    resetButton.parentNode.removeChild(resetButton);
  
    guessField.disabled = false;   
    guessSubmit.disabled = false;   
    guessField.value = '';    
    guessField.focus(); 
  
    lastResult.style.backgroundColor = 'white';   
  
    randomNumber = Math.floor(Math.random() * 90 + 10);   //declares a random value  again
  }

