// Letters
const letters = "abcdefghijklmnopqrstuvwxyz";

// Get Array Form Letters
let lettersArray = Array.from(letters);

// Select Letters Container 
let lettersContainer = document.querySelector(".letters");

// Generate Letters
lettersArray.forEach(letter => {

  //  Create Span
  let span = document.createElement("span");

  // Create Lerrers Text Node
  let theLetter = document.createTextNode(letter);

  // Append The Letter To Span
  span.appendChild(theLetter);

  // Add Class On Span
  span.className = "letter-box"; 

  // Append Span To The LEtters Continer
  lettersContainer.appendChild(span);
}); 


// Object Of Words + Categories
const words = {
  programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
  movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
  people: ["Albert Einstein", "Hotchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
  countries: ["Syria", "Palestine", "Yemen", "Egypt", "bahrain", "Qatar"],
}
 // Get Random Property
let allKeys = Object.keys(words);

// Random Number Depend On Keys Length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
// Category
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

// Random Number Depend On Words
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// The Chosen Word
let randomValueValue = randomPropValue[randomValueNumber];

// Set Category Info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// Select Letters Guess Element
let lettersGuessContainer = document.querySelector(".letters-guess");

// Convert Chosen Word To Array
let lettersAndSpace = Array.from(randomValueValue);

// Create Spans Depened On Word
lettersAndSpace.forEach(letter => {

  // Create Empty Span
  let emptySpan = document.createElement("span");

  // IF Letter Is Space
  if (letter === ' ') {

    // Add Class To The Span
    emptySpan.className = 'with-space';

  }

  // Append Spans To The Letters Guess Container
  lettersGuessContainer.appendChild(emptySpan);
});

//  Select Guess Spans
let guessSpans = document.querySelectorAll(".letters-guess span");

//  Set Wrong Attempts
let wrongAttempts = 0;

// Select The Drae Element
let theDraw = document.querySelector(".hangman-draw");

// Handle Clickking On Letters
document.addEventListener("click", (e) => {

  // Set The Chose Status
  let theStatus = false
  let theStatus2 = true

  if (e.target.className === 'letter-box') {

    e.target.classList.add("clicked");

    // Get Clicked Letter 
    let theClickedLetter = e.target.innerHTML.toLowerCase();

    // The Chosen Word
    let theChosenWord = Array.from(randomValueValue.toLowerCase());

    theChosenWord.forEach((wordLetter, WordIndex) => {

      // IF The Clicked Letter Equal To One OF The Chosen Word Letter
      if (theClickedLetter == wordLetter) {

        // Set Status To Correct
        theStatus = true;
        theStatus2 = false;

        // Lpp On All Guess Spans
        guessSpans.forEach((span, spanIndex) => {

          if (WordIndex === spanIndex) {

            span.innerHTML = theClickedLetter;

          }

        });

      }


    });

    // Outside Loop
    
    // IF Letter IS Wrong
    if (theStatus !== true) {

      // Increase The Wrong Attempts
      wrongAttempts++;

      // Add Class WRong On The Draw Element
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      //  Play Fail Sound
      document.getElementById("fail").play();

      if (wrongAttempts === 8) {
        
        lettersContainer.classList.add("finished");

        endGame();
      }

    } else {

      // play Success Sound
      document.getElementById("success").play();
    }


  }

});

// End Game Fuction
function endGame() {

  // Create poup
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Game Over, The Word Is ${randomValueValue}`);

  // Apend Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);
}
function goodGame() {

  // Create poup
  let div = document.createElement("div");

  // Create Text
  let divText = document.createTextNode(`Well, you win, you look professional`);

  // Apend Text To Div
  div.appendChild(divText);

  // Add Class On Div
  div.className = 'popup';

  // Append To The Body
  document.body.appendChild(div);
}