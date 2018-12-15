window.onload = function () {


    var letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];


    // variables that hold numbers of wins, losses guesses remaining and guesses so far
    var wins = 0;
    var losses = 0;
    var guessesLeft = 9;
    var guessesSoFar = [];
    var userChoices = [];


    // Create variables that hold references to the places in the HTML where we want to display things.
    var winsTextElement = document.getElementById("winsText");
    var lossesTextElement = document.getElementById("lossesText");
    var guessesLeftTextElement = document.getElementById("guessesLeftText");
    var guessesSoFarTextElement = document.getElementById("guessesSoFarText");

    winsTextElement.textContent = + wins;
    lossesTextElement.textContent = + losses;
    guessesLeftTextElement.textContent = + guessesLeft;
    guessesSoFarTextElement.textContent = " " + guessesSoFar;


    // wait for users key press
    document.onkeyup = function (event) {

        var userKeyPress = event.key;

        // the active letter the user is trying to guess
        var activeLetter = letterChoices[Math.floor(Math.random() * letterChoices.length)];


        console.log(activeLetter);

        // check to see if user pressed a valid key
        if (letterChoices.indexOf(userKeyPress) > -1) {

            // if the user guesses the letter right, increase wins, reset game by setting guessesLeft back to 9 and emptying lettersGuessedSoFar array.
            if (userKeyPress === activeLetter) {
                wins++;
                guessesLeft = 9;
                guessesSoFar = [];
            }

            // if the user guess the letter wrong, decrease guessesLeft by 1 and push the letter into GuessesSoFar array.
            if (userKeyPress != activeLetter) {
                guessesLeft--;
                guessesSoFar.push(userKeyPress);
            }

            // if user runs out of guess, losses increase by 1 and game resets. Set guessesLeft back to 9 and empty lettersGuessedSoFar array.
            if (guessesLeft === 0) {

                guessesLeft = 9;
                losses++;
                guessesSoFar = [];

            }

    
            // Displays to html page
            winsTextElement.textContent = + wins;
            lossesTextElement.textContent = + losses;
            guessesLeftTextElement.textContent = + guessesLeft;
            guessesSoFarTextElement.textContent = " " + guessesSoFar;



        }

        console.log(wins);
        console.log(guessesLeft);
        console.log(guessesSoFar);


    }

};











