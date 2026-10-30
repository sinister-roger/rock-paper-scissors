
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

getComputerChoice1()

// step 3 //; 

function getHumanChoice() {
    const humanInput = prompt("choose among rock, paper, and scissors");
    return humanInput 
}

getHumanChoice()

// step 4 //;

const humanScore = 0; 
const computerScore = 0; 

