
// step 2: //
// function getComputerChoice() {
//     const values = (Math.floor(Math.random()*100));
//     // console.log(values)
//     if (values <= 33) {
//         return "rock"; 
//     } else if ( values <= 66) {
//         return "paper";
//     } else {
//         return "scissors"; 
//     }
// }

// // console.log(getComputerChoice()); 
// getComputerChoice(); 


function getComputerChoice1() {
    const numb = (Math.floor(Math.random()*(3-1+1)))+1;
    if (numb === 1) {
        return "rock";
    } else if (numb === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

// getComputerChoice1()

// step 3 //; 

function getHumanChoice() {
    const humanInput = prompt("choose among rock, paper, and scissors");
    return humanInput.toLowerCase()
}

// getHumanChoice()

// step 4 //;

let humanScore = 0; 
let computerScore = 0; 


// step 5 //; 

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
    } else if ( humanChoice === "rock" && computerChoice === "scissors") {
        console.log("you win! Rock beats Scissors");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("it's a tie! go again.");
    } else if ( humanChoice === "paper" && computerChoice === "scissors") {
        console.log("you lose! Scissors beats Paper");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("you win! Paper beats Rock");
        humanScore++;
    }else if ( humanChoice === "paper" && computerChoice === "paper") {
        console.log("it's a tie! go again.");
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("you lose! Rock beats Scissors");
        computerScore++;
    }else if ( humanChoice === "scissors" && computerChoice === "paper") {
        console.log("you win! Scissors beats paper");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
        console.log("it's a tie! go again.")
    } else {
        console.log("enter right option");
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice1();

playRound(humanSelection, computerSelection);


