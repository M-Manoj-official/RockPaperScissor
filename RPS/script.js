let userScore = 0;
let computerScore = 0;

const userScoreDisplay = document.getElementById("your-Score");
const computerScoreDisplay = document.getElementById("computer-Score");
const resultMessage = document.getElementById("resultMessage");
const userChoiceDisplay = document.getElementById("hdisplay");
const computerChoiceDisplay = document.getElementById("cdisplay");

const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(userChoice, computerChoice);

        userChoiceDisplay.textContent = userChoice.charAt(0).toUpperCase() + userChoice.slice(1);
        computerChoiceDisplay.textContent = computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1);
        resultMessage.textContent = winner;

        updateScores(winner);
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(user, computer) {
    if (user === computer) {
        return "It's a draw! Both chose " + user + ".";
    }
    if (
        (user === "rock" && computer === "scissor") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissor" && computer === "paper")
    ) {
        return `You win! ${user} beats ${computer}.`;
    } else {
        return `Computer wins! ${computer} beats ${user}.`;
    }
}

function updateScores(winner) {
    if (winner.startsWith("You win!")) {
        userScore++;
    } else if (winner.startsWith("Computer wins!")) {
        computerScore++;
    }
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
}
