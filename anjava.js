// getComputerChoice; 
function getComputerChoice() {
    const numb = (Math.floor(Math.random()*(3-1+1)))+1;
    if (numb === 1) {
        return "rock";
    } else if (numb === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}



let humanScore = 0; 
let computerScore = 0; 

let gameRunning = true; 

function playRound (humanChoice, computerChoice) { 
    if (gameRunning === true) {
        if (humanChoice === "rock" && computerChoice === "paper") {
            roundResult.textContent = "You lose! paper beats rock"
            computerScore++;
        } else if ( humanChoice === "rock" && computerChoice === "scissors") {
            roundResult.textContent = "you win! Rock beats Scissors"
            humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "rock") {
            roundResult.textContent = "it's a tie! go again"
        } else if ( humanChoice === "paper" && computerChoice === "scissors") {
            roundResult.textContent = "you lose! Scissors beats Paper"
            computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            roundResult.textContent = "you win! Paper beats Rock"
            humanScore++;
        }else if ( humanChoice === "paper" && computerChoice === "paper") {
            roundResult.textContent = "it's a tie! go again"
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
            roundResult.textContent = "you lose! Rock beats Scissors"
            computerScore++;
        }else if ( humanChoice === "scissors" && computerChoice === "paper") {
            roundResult.textContent = "you win! Scissors beats paper"
            humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "scissors") {
            roundResult.textContent = "it's a tie! go again"
        } else {
            roundResult.textContent = "enter right option"
        }
        if (humanScore === 3 || computerScore === 3) {
            
            if (humanScore > computerScore) {
                finalResult.textContent = "congratulations you win!"
            } else if (humanScore< computerScore) {
                finalResult.textContent = "you lose! try again"
            } else {
                finalResult.textContent = "it's a draw!"
            }
            gameRunning = false; 
        } 
        score.textContent = `player: ${humanScore} computer: ${computerScore}`
        
    }
}

const rock = document.querySelector("#rock"); 
const paper = document.querySelector("#paper"); 
const scissors = document.querySelector("#scissors"); 

rock.addEventListener("click", () => {
    const humanChoice = "rock"; 
    playRound(humanChoice,getComputerChoice())
})
paper.addEventListener("click", () => {
    const humanChoice = "paper"; 
    playRound(humanChoice,getComputerChoice())
})
scissors.addEventListener("click", () => {
    const humanChoice = "scissors"; 
    playRound(humanChoice,getComputerChoice())
})

const finalResult = document.querySelector("#finalResult"); 
const score  = document.querySelector("#scores");
const roundResult = document.querySelector("#roundResult")

