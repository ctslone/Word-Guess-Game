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
    var guessesLeft = 20;
    var newCar = "";
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

    // function that runs when the game loads, the user wins or the user runs out of guesses
    function newGame() {
        // declaring variables to be reset at the begininng of new game and used throughout the game
        guessesLeft = 20;
        answerSpace = [];
        lettersGuessed = [];
        newCar = carNames[Math.floor(Math.random() * carNames.length)];
        console.log(newCar.name)
        // looping through the array newcar.name and treating the car name as an array. for each index of the word, replace the letter (push) with an underscore
        for (var i=0; i<newCar.name.length; i++) {
                answerSpace.push ("_")
                };
        // writing to the various HTML elements to display wins, guesses left and blank spaces for the new word
        document.getElementById("wins-text").innerHTML = "Wins: " + 0;
        document.getElementById("guesses-left-text").innerHTML = "Guesses left: " + 20;
        document.getElementById("letters-text").innerHTML = [];
        document.getElementById("answer-space").innerHTML = answerSpace.join(" ");
        };

        // when user releases a letter key, run this function
        document.onkeyup = function (event) {
            // user key press is assigned to variable and made uppercase
            var guessedLetter = event.key.toUpperCase();
                console.log("The user guessed: " + guessedLetter);
            // if user selects a letter they already guessed, dont do anything (ie return)

            // if (guessedLetter.includes(lettersGuessed)) {
            //     return;
            // }

            // adding guessed letters to the lettersGuessed array
            if (event.keyCode > 64 && event.keyCode < 91) {
                console.log ("User selected an eligible letter");
                // assigning false to the userGuess by default unless the user guesses a correct letter
                // var correctGuess = false;

                // looping throught the winning word and checking to see if the user guessed letter matches any of the letters in the word. use charAt
                for (var i=0; i < newCar.name.length; i++) {
                    // if the guessedletter matches one of the letters in the random new car...
                    if(guessedLetter === newCar.name.charAt(i)) {
                        console.log("User guessed a correct letter");
                        answerSpace[i] = guessedLetter;
                        // correctGuess = true;  
                    }
                }
                    // pushing the userguess into the guessed letter array and dispaying the guesses on the page
                    lettersGuessed.push(guessedLetter + " ");
                    document.getElementById("answer-space").innerHTML = answerSpace.join(" ");
                    document.getElementById("letters-text").innerHTML = lettersGuessed;

                if ()
                    

                    
                    
                
                
            }
        };
    
newGame()

