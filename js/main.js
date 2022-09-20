// provided functions ===================================================================
//
// RANDOM NUMBER ----------------------------------
function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}
// This function will return a random number
// between 1 and 5. This can be used to get
// the computers random choice. To save a
// random value into a variable, you can use
// it like this:
//     var computerPick = randomNumber();
//
//
// CONFETTI --------------------------------------
// to shoot confetti when the player wins,
// call this function: confetti();
//
//
// Requirements =========================================================================
//
// 1. Show the computer pick in the "computer-pick" input after the button is clicked.
//    Make sure it is a new random number every time the button is clicked.
//
// 2. Let the user know if they are too high, too low, or if they
//    are exact by updating the "results" div.
//
// 3. If the player is exact, add 1 to the "wins" counter.
//
// 4. If the player isn't exact, add 1 to the "losses" counter.
//
//
// Tips =================================================================================
//
// To get and update "computer-pick" and "player-pick" inputs,
// you'll want to use document.getElementById('id-here').value,
// not .innerText
//
// To get and update "wins", "losses", and "results", you'll want
// to use document.getElementById('id-here').innerText
//
// You'll want to use the "click" eventListener on the "guess-button" button.
//
// Make sure to run the code 'var computerPick = randomNumber();'
// inside of your eventListener. If this is on the outside, it will only
// generate a single random number on page load and not a new one when the
// button is clicked.
//
// when using document.getElementById() to get values, they will likely be
// strings. You can use parseInt() on them to make them integers.
//
// Don't be afraid to ask for help!

// your code can go below this line =====================================================

// getting html elements and keeping em' into consts
const btnGuess = document.getElementById('guess-button');
const cpuPicker = document.getElementById('computer-pick');
const playerPicker = document.getElementById('player-pick');
const resultMessage = document.getElementById('result');
const winsResult = document.getElementById('wins');
const lossesResult = document.getElementById('losses');

// set variables to keep track of the game's point
let lossesPoints = 0;
let winsPoints = 0;

// add the event listener to the button
btnGuess.addEventListener('click', () => {
  // puts the random number into the input
  cpuPicker.value = randomNumber();
  // checks to see whether the player guessed the right number, a lower or higher number
  if (cpuPicker.value == playerPicker.value) {
    // adds 1 point to the winner, if the guessed number is equal to the random number
    winsPoints++;
    // add the point into the html const
    winsResult.innerText = winsPoints;
    // output a message to let the user know he picked the right number
    resultMessage.innerText = 'You picked the right number!!!!';
    // calls the confetti function
    confetti();
  } else if (cpuPicker.value < playerPicker.value) {
    // adds 1 point to the losses, if the guessed number is not equal to the random number
    lossesPoints++;
    // add the point into the html const
    lossesResult.innerText = lossesPoints;
    // output a message to let the user know he picked a higher number
    resultMessage.innerText = 'You picked a higher number';
  } else {
    // adds 1 point to the losses, if the guessed number is not equal to the random number
    lossesPoints++;
    // add the point into the html const
    lossesResult.innerText = lossesPoints;
    // output a message to let the user know he picked a lower number
    resultMessage.innerText = 'You picked a lower number';
  }
});
