'use strict';

// console.log(document.querySelector('.message').
// textContent);
// document.querySelector('.message').textContent = 'Correct Number!🎉';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//when there is no input 
    if(!guess) {
        document.querySelector('.message').textContent = 'No number🚫';

        //when guess is correct
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number!🎉';
        document.querySelector('.number').textContent = secretNumber

        // set background colour to green on win
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
   
// when guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
        document.querySelector('.message').textContent = 'Too High!';
        score--;
        } else {
            document.querySelector('.message').textContent = 'You lost the game!!';
        document.querySelector('.score').textContent = 0;
        }
 
// when guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = 'You lost the game!!';
                document.querySelector('.score').textContent = 0;
                }
                
    }
    
});
// Resets the game to start again
document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    const gameReset = Math.trunc(Math.random()*20)+1;
    const guess = Number(document.querySelector('.guess').value);
    console.log(gameReset)

    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

// resets the background colour and sizing
    if (gameReset) {
        document.querySelector('body').style.backgroundColor = '#222';

        document.querySelector('.number').style.width = '15rem';
    } else if (!guess) {
        document.querySelector('.message').textContent = 'No number🚫';
   
    } 
})
