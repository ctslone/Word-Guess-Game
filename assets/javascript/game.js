// page loads and all HTML elements and CSS is displayed
// press any letter to begin guessing. document.on(click) will set off the start of the game
// plage loads and newgame function runs and resets wins, guesses left, letters guessed
// when page loads, a random word from the word array will be selected as the winning word but will only be displayed in dashes
    // function will look at the random word selected and replace each letter in the word (mini array) with an underscore, separated by a space
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
    var guessesLeft = 20;
    var lettersGuessed = [];
    var carNames = [
        {
        name: "WRX",
        image: "assets/images",
        },

        {
        name: "PORSCHE",
        image: "assets/images",
        },

        {
        name: "CORVETTE",
        image: "assets/images",
        },

        {
        name: "FERRARI",
        image: "assets/images",
        },

        {
        name: "MUSTANG",
        image: "assets/images",
        },

        {
        name:"LAMBORGHINI",
        image: "assets/images",
        }
    ];


    function newGame() {
        guessesLeft = 20;
        lettersGuessed = [];
        newCar = carNames[Math.floor(Math.random() * carNames.length)];
        console.log(newCar.name)

        winsText = document.getElementById("wins-text").innerHTML = "Wins: " + 0;
        currentWordText = document.getElementById("current-word-text").innerHTML = "Current car to guess: " + newCar.name;
        guessesText = document.getElementById("guesses-text").innerHTML = "Guesses left: " + 20;
        lettersText = document.getElementById("letters-text").innerHTML = [];
        
        
    }
newGame()

