const choices = ["rock", "paper", "scissors"];

// Function to get a random computer choice
function getRandomChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

// Event listeners for player's choice
document.getElementById('rock').addEventListener('click', function () {
    playGame("rock");
});

document.getElementById('paper').addEventListener('click', function () {
    playGame("paper");
});

document.getElementById('scissors').addEventListener('click', function () {
    playGame("scissors");
});

function playGame(playerChoice) {
    const computerChoice = getRandomChoice();
    const result = determineWinner(playerChoice, computerChoice);
    alert(`You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`);
}
