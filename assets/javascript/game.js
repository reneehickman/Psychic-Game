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

        // var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        //     'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        //     't', 'u', 'v', 'w', 'x', 'y', 'z'
        // ];

        console.log(activeLetter);

        if (letterChoices.indexOf(userKeyPress) > -1) {


            if (userKeyPress === activeLetter) {
                wins++;
                guessesLeft = 9;
                guessesSoFar = [];
            }

        //     if (userKeyPress != guessesSoFar){

        //     if (userKeyPress != activeLetter) {
        //         guessesLeft--;
        //         guessesSoFar.push(userKeyPress);
        //     }
        // }

            if (userKeyPress != activeLetter) {
                guessesLeft--;
                guessesSoFar.push(userKeyPress);
            }


            if (guessesLeft === 0) {

                guessesLeft = 9;
                losses++;
                guessesSoFar = [];

            }

    

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











