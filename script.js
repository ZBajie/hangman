const number = 1;
switch (number) {
  case 1:
    hangmanGame();
}

function hangmanGame() {
  const listOfWords = [
    "january",
    "monday",
    "elephant",
    "summer",
    "lawyer",
    "school",
  ];
  word = listOfWords[Math.floor(Math.random() * listOfWords.length)];
  console.log(word);
  linesForLetterInWord(word);
  const userGuess = document.querySelector("#forguessbutton");
  userGuess.addEventListener("click", userLetter);
}

function linesForLetterInWord(word) {
  const letterList = document.querySelector("#letterlist");
  for (let i = 0; i < word.length; i++) {
    const letterItem = document.createElement("li");
    letterItem.innerText = "_";
    letterList.append(letterItem);
  }
}

// gets user guess, control that its a letter and send to testGuesLetter function!
function userLetter() {
  let letter = document.querySelector("#forguess").value;
  console.log("letter", letter);
  if (letter.length === 1 && letter.match(/[a-z]/i)) {
    testGuessLetter(letter);
    console.log("letter", letter);
  }
  else {
    alert("Wrong input. enter only (1) letter without special characters.")
}
  document.querySelector("#forguess").value = ""; // empty input


const maxWrongGuesses = 4;
let wrongGuesses = 0;

function testGuessLetter(letter) {
  let found = false;
  for (let i = 0; i < word.length; i++) {
    if (letter.toLowerCase() === word[i]) {
      let k = i + 1;
      let placeNewLetter = document.querySelector(
        "#letterlist li:nth-child(" + k + ")"
      );
      placeNewLetter.innerText = letter.toLowerCase();
      found = true;
      break;
    }
  }
  if (!found) {
    handleWrongGuess();
    if (wrongGuesses === maxWrongGuesses) {
      document.getElementById("legs");
      setTimeout(function () {
        alert("You lost unfortunately 😕, try again? 😍");
        newGame();
      }, 500);
    }
  }
}


function handleWrongGuess() {
  wrongGuesses++;

  if (wrongGuesses === 1) {
    document.getElementById("head").style.display = "block";
  } else if (wrongGuesses === 2) {
    document.getElementById("body").style.display = "block";
  } else if (wrongGuesses === 3) {
    document.getElementById("arms").style.display = "block";
  } else if (wrongGuesses === 4) {
    document.getElementById("legs").style.display = "block";
  } else{
    alert("Something went wrong, restart the game and try again!")
  }
}

function newGame() {
  wrongGuesses = 0;
  document.getElementById("head").style.display = "none";
  document.getElementById("body").style.display = "none";
  document.getElementById("arms").style.display = "none";
  document.getElementById("legs").style.display = "none";
=======

}
