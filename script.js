'use strict';

let player0El = document.querySelector('.player--0');
let player1El = document.querySelector('.player--1');
let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let btnRoll = document.querySelector('.btn--roll');
let btnNew = document.querySelector('.btn--new');
let btnHold = document.querySelector('.btn--hold');
let diceImg = document.querySelector('.dice');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let scores;
let currentScore;
let activePlayer
let playing;


// Starting conditions


const init = function(){
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    score0.textContent = 0;
    score1.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceImg.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
}

// Calling the initial game setting function
init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

// Rolling dice functionality

btnRoll.addEventListener('click', function () {

    if (playing) {
        // 1. Generating a random dice roll
        let dice = Math.floor(Math.random() * 6) + 1;

        // 2. Display dice
        diceImg.setAttribute('src', `dice-${dice}.png`);
        diceImg.classList.remove('hidden');

        // 3. Check for rolled 1
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;

        } else {
            // Switch to next player
            switchPlayer();
        }
    }

})

btnHold.addEventListener('click', function () {

    if (playing) {
        // 1. Add current score to active player's score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // 2. Check if the score >= 100

        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');

            diceImg.classList.add('hidden');
        } else {
            // Switch to the next player

            switchPlayer();
        }
    }



})


// Reset the game


btnNew.addEventListener('click', init)