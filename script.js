const weapons = document.querySelectorAll("div.weapons button");
let playerScore = 0;
let computerScore = 0;
document.getElementById('restartBtn').style.visibility = 'hidden';
const element = document.getElementById("myBtn");


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

    document.getElementById('restartBtn').style.visibility = 'visible';

}