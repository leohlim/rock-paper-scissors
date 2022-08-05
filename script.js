const weapons = document.querySelectorAll("div.weapons button");
let playerScore = 0;
let computerScore = 0;


weapons.forEach(button => { button.addEventListener("click", getPlayerChoice)})



function playRound(playerSelection) {
    // Function that takes a user's input, compares it against the computer selection,
    // then determines whether the player or the computer won. 
    

    let computerSelection = getComputerChoice();   


    let result;        
    let wonRound = "NICE BRO. You won this round!!";    
    let lostRound = "FUCK. you lost this round...";
    console.log("Player chose" + playerSelection)
    console.log("Computer chose" + computerSelection)

    // We compare the computer choice versus player choice!

    if (computerSelection === playerSelection) {
        result = ("Draw. Go again!");
        console.log("Draw. You both threw " + playerSelection + ".")
    } else if (playerSelection == "rock") {
        if (computerSelection == "scissors") {
            result = wonRound;
            playerScore += 1;
            console.log("Win! Rock beats scissors.")
        } else {
            result = lostRound;
            computerScore += 1;
            console.log("Lost. Paper beats rock.")
        }
    } else if (playerSelection == "paper") {
        if (computerSelection == "rock") {
            result = wonRound;
            playerScore += 1;
            console.log("Win! Paper beats rock.")
        } else {
            result = lostRound;
            computerScore += 1;
            console.log("Lost. Scissors beat paper.")
        }
    } else if (playerSelection == "scissors") {
        if (computerSelection == "paper") {
            result = wonRound;
            playerScore += 1;
            console.log("Win! Scissors beats paper.")
        } else {
            result = lostRound;
            computerScore += 1;
            console.log("Lost. Rock beats scissors.")
        }
    }

    let computerSign = "";

    if (computerSelection === "Rock") {
        computerSign = "✊";
    } else if (computerSelection === "Paper") {
        computerSign = "🖐";
    } else {
        computerSign = "✌️";
    }

    if (playerScore === 5 ) {
        result = "... and you won! FUCK YEA";
        disableGame();
    } else if (computerScore === 5) {
        result = "... you lost. Go home.";
        disableGame();
    }
    
    
    document.getElementById("result").innerHTML = result;
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("computerSign").innerHTML = computerSign;


    
}

function getPlayerChoice(e) {
    let playerSelection = (e.target.id);
    document.getElementById("playerSign").innerHTML = e.target.innerHTML;
    playRound(playerSelection)
}

function getComputerChoice() {
    // Randomly returns a choice between rock, paper or scissors.

    let randomNumber = Math.floor(Math.random() * (3));     // Choose a random number between 0 and 2

    let computerSelection = (randomNumber == 0) ? "Rock" :  // 0 = Rock, 1 = Paper, and 2 = Scissors
        (randomNumber == 1) ? "Paper" :
        "Scissors";
        
    computerSelection = computerSelection.toLowerCase();    // Lowercase the computer's choice for comparison later



    return computerSelection;
}

function disableGame() {
    weapons.forEach(button => {
        button.disabled = true
    })
}

/*function game() {
    // Keep track of the game score. Report the loser and winner of each game

    playerScore = 0;
    computerScore = 0;

    // Create a game that loops the playRound function five times 
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose your weapon!").toLowerCase();      // Prompt the player for a RPS choice.

        // Ask again if user picks anything besides rock, paper or scissors
        while (!(playerSelection === "rock" || playerSelection === "paper" || playerSelection === "scissors")) {           
            alert("Please enter the rock, paper or scissors");
            playerSelection = prompt("Choose your weapon!").toLowerCase();  
        }


        // Console log the player choice and the computer choice.
        console.log("You chose: " + playerSelection);
        console.log("Computer chose: " + computerSelection);

        result = playRound(playerSelection,computerSelection);                  // Get the result from each round
        if (result === "Won!") {                                                // Determine the winner of the round, and
            playerScore += 1;                                                   // keep score each round.
            console.log("You won a point!");
        } else if (result === "Lost") {
            computerScore += 1;
            console.log("Computer won a point.");
        } 

        // Console log the round number, player score, and computer score.
        console.log("Round " + (i + 1) + "\nPlayer score: " + playerScore + "\nComputer score: " + computerScore);
    }

    // Tabulate scores to determine the winner or a draw

    if (playerScore > computerScore) {
        console.log("Congrats, you won!")
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost...")
    } else {
        console.log("You drew! Thats worse than losing.")
    }


}*/



         // Initialize the computer choice variable
