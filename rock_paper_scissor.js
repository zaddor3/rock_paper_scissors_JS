let humanScore = 0
let computerScore = 0

let computerSelection = getComputerChoice()

const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")
const gameHistory = document.createElement("h1")
gameHistory.textContent = ""

document.body.appendChild(gameHistory)

rock.addEventListener("click", () => playGame("rock", getComputerChoice()))
paper.addEventListener("click",() => playGame("paper", getComputerChoice()))
scissors.addEventListener("click", () => playGame("scissors", getComputerChoice()))

function playGame(humanSelection, computerSelection){
    //compare computer and human choice and increment score
    if (humanSelection === computerSelection) {
        gameHistory.textContent = "Draw! computer chose " + computerSelection + " you chose " + humanSelection 

    } else if (humanSelection === "rock" && computerSelection === "paper") {
        gameHistory.textContent = "You lose! computer chose " + computerSelection + " you chose " + humanSelection
        computerScore += 1

    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        gameHistory.textContent = "You win! computer chose " + computerSelection + " you chose " + humanSelection
        humanScore += 1

    } else if (humanSelection === "paper" && computerSelection === "rock") {
        gameHistory.textContent = "You win! computer chose " + computerSelection + " you chose " + humanSelection
        humanScore += 1

    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        gameHistory.textContent = "You lose! computer chose " + computerSelection + " you chose " + humanSelection
        computerScore += 1

    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        gameHistory.textContent = "You lose! computer chose " + computerSelection + " you chose " + humanSelection
        computerScore += 1 

    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        gameHistory.textContent = "You win! computer chose " + computerSelection + " you chose " + humanSelection
        humanScore += 1
    }
    document.body.appendChild(gameHistory)
    updateScoreBoard()
}

function updateScoreBoard (){
    const humanScoreElement = document.querySelector(".humanScore")
    const computerScoreElement = document.querySelector(".computerScore")

    humanScoreElement.textContent = `Your score: ${humanScore}`
    computerScoreElement.textContent = `Computer score: ${computerScore}`

}

function getComputerChoice(){
    let choices = ["rock","paper", "scissors" ]
    let random_choice = choices[Math.floor(Math.random() * choices.length )]
    return random_choice
}
