'use strict';

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let diceImg = document.querySelector('.dice');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');



// Starting conditions
score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add('hidden');

const scores = [0, 0]
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality

btnRoll.addEventListener('click', function(){
    // 1. Generating a random dice roll
    let dice = Math.floor(Math.random() * 6) + 1;

    // 2. Display dice
    diceImg.setAttribute('src', `dice-${dice}.png`);
    diceImg.classList.remove('hidden');

    // 3. Check for rolled 1
    if(dice !== 1){
        // Add dice to current score
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;

    } else {
        // Switch to next player
        if (activePlayer === 0){
            activePlayer = 1;
        } else {
            activePlayer = 0;
        }
    }
})