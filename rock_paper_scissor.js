let humanScore = 0
let computerScore = 0

function getComputerChoice(){
    let choices = ["rock","paper", "scissors" ]
    let random_choice = choices[Math.floor(Math.random() * choices.length )]
    return random_choice
}

function getHumanChoice(){
    let humanChoice = prompt("Choose between: rock, paper or scissors").toLowerCase()
    return humanChoice
}

function playGame(humanSelection, computerSelection){
    //compare computer and human choice and increment score
    if (humanSelection === computerSelection) {
        console.log("Draw! computer chose " + computerSelection + "you chose" + humanSelection )

    } else if (humanSelection === "rock" && computerSelection === "paper") {
        console.log("You lose! computer chose " + computerSelection + " you chose " + humanSelection)
        computerScore += 1

    } else if (humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You win! computer chose " + computerSelection + " you chose " + humanSelection)
        humanScore += 1

    } else if (humanSelection === "paper" && computerSelection === "rock") {
        console.log("You win! computer chose " + computerSelection + " you chose " + humanSelection)
        humanScore += 1

    } else if (humanSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose! computer chose " + computerSelection + " you chose " + humanSelection)
        computerScore += 1

    } else if (humanSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose! computer chose " + computerSelection + " you chose " + humanSelection)
        computerScore += 1 

    } else if (humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You win! computer chose " + computerSelection + " you chose " + humanSelection)
        humanScore += 1
    }
}

// while loop inside a function so that i can manually start it from dev console
function startGame(){
    while (humanScore < 5 && computerScore < 5) {
        console.log("Your score: " + humanScore)
        console.log("Computer score: " + computerScore)
        let humanSelection = getHumanChoice()
        let computerSelection = getComputerChoice()
        playGame(humanSelection, computerSelection)
    }
}
