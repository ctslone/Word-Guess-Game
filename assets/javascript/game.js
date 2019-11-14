// page loads and all HTML elements and CSS is displayed
// press any letter to begin guessing. document.on(click) will set off the start of the game
// plage loads and newgame function runs and resets wins, guesses left, letters guessed
// when page loads, a random word from the word array will be selected as the winning word but will only be displayed in dashes --DONE--
// function will look at the random word selected and replace each letter in the word (mini array) with an underscore, separated by a space --DONE-- used a for loop
// if the guessed letter does not match one of the letters in the random word:
// subtract a guess and add the letter to the guessed letter array. 
// IF the guessed letter does match a letter in the random word:
// add the letter to guessed letters array and replace the underscore with the letter (however many of that letter there are in the word)
// if user correctly guesses the word, display the word (somewhere?) and then run the new game function
// if the user runs out of guesses, (guesses left = 0) display the word to the user but do not add to wins.
// run the new game function to pick a new word and reset variables

// waiting for document to load before loading the JS

// defining variables to be used during the game
var wins = 0;
var losses = 0;
// var guessesLeft = 20;
var newCar = "";
var lettersGuessed = [];
var carNames = [
    {
        name: "WRX",
        image: "./assets/images/wrx.jpg",
    },

    {
        name: "PORSCHE",
        image: "./assets/images/porsche.png",
    },

    {
        name: "CORVETTE",
        image: "./assets/images/corvette.jpg",
    },

    {
        name: "FERRARI",
        image: "./assets/images/ferrari.jpg",
    },

    {
        name: "MUSTANG",
        image: "./assets/images/mustang.jpg",
    },

    {
        name: "LAMBORGHINI",
        image: "./assets/images/lambo.jpg",
    }
];
// function that runs when the game loads, the user wins or the user runs out of guesses
function newGame() {
    // declaring variables to be reset at the begininng of new game and used throughout the game
    guessesLeft = 20;
    answerSpace = [];
    lettersGuessed = [];
    newCar = carNames[Math.floor(Math.random() * carNames.length)];
    console.log(newCar.name)
    // looping through the array newcar.name and treating the car name as an array. for each index of the word, replace the letter (push) with an underscore
    for (var i = 0; i < newCar.name.length; i++) {
        answerSpace.push("_")
    };
    // writing to the various HTML elements to display wins, guesses left and blank spaces for the new word
    document.getElementById("wins-text").innerHTML = "Wins: " + wins;
    // document.getElementById("loss-text").innerHTML = "Losses: " + losses;
    document.getElementById("guesses-left-text").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("letters-text").innerHTML = [];
    document.getElementById("answer-space").innerHTML = answerSpace.join(" ");
};
// calling newGame functon on document load
newGame()
// when user releases a letter key, run this function
document.onkeyup = function (event) {
    // user key press is assigned to variable and made uppercase
    var guessedLetter = event.key.toUpperCase();
    var letterIndex = lettersGuessed.indexOf(guessedLetter)
    console.log(letterIndex)
    console.log(lettersGuessed)
    var onlyLetters = /^[a-zA-Z]+$/.test(guessedLetter)
    console.log(onlyLetters);
    if (onlyLetters === false) {
        alert("That aint no letter fool!")
    }
    else if (letterIndex == (-1)) {
        lettersGuessed.push(guessedLetter);
        console.log("The user guessed: " + guessedLetter);
        console.log("User selected an eligible letter");
        // assigning false to the userGuess by default unless the user guesses a correct letter
        var correctGuess = false;
        // looping through the winning word and checking to see if the user guessed letter matches any of the letters in the word. use charAt
        for (var i = 0; i < newCar.name.length; i++) {
            // if the guessedletter matches one of the letters in the random new car...
            if (guessedLetter === newCar.name.charAt(i)) {
                console.log("User guessed a correct letter");
                answerSpace[i] = guessedLetter;
                console.log(answerSpace.join(''))
                correctGuess = true;
            }
        }
        // if the user guesses wrong
        if (!correctGuess) {
            guessesLeft--;
            console.log("Guesses left: " + guessesLeft)
        }
        if (guessesLeft === 0) {
            losses++
            console.log("Total losses: " + losses)
        }
        // if the user guesess the whole word
        if (answerSpace.join('') === newCar.name) {
            console.log("winner")
            wins++
            console.log(wins)
            document.getElementById("photoArea").src = newCar.image;
            newGame()
        }
        // re-writing elements on the dcument to display the word spaces, letters guessed, guesses left and wins
        document.getElementById("answer-space").innerHTML = answerSpace.join(" ");
        document.getElementById("letters-text").innerHTML = lettersGuessed;
        document.getElementById("guesses-left-text").innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;
        // document.getElementById("loss-text").innerHTML = "Losses: " + losses;
    }
    else {
        console.log("Guessed that")
        alert("Choose another letter! You already guessed that letter.")
    }

};



