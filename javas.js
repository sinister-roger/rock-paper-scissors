

// step 1: write the logic to get the computer answer: 

// write the code so that  getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors". 


// 1) create a variable named stringNumber
// 2) assign "stringNumebr" random math value using Math.floor(Math.random)*100. #this gives values between 1 and 100. 
// 3) IF number is <= 33
//      print rock
//    ELSE IF number is <= 66 
//      print paper
//    ELSE 
//      print scissors.

// console.log(Math.floor(Math.random()*100)) #to test the function.

function getComputerChoice() {
    const stringNumber = Math.floor((Math.random())*100)

    // console.log(stringNumber) # to use the number 

    if (stringNumber <= 33) {
        // console.log("rock");
        return "rock";  
    } else if (stringNumber <=66) {
        // console.log("paper");
        return "paper";
    } else {
        // console.log("scissors");
        return "scissors";
    }
}

// getComputerChoice()


// step 2 : write the logic to get the human choice. 

// write the function that take user choice and return it. 


// 1) create the function named getHumanChoice.
// 2) create variable named input and use prompt method to get input.
// 3) use return


function getHumanChoice () {
    const input = prompt("enter your decision", "rock, paper or scissors");
    // console.log(input)
}

// getHumanChoice()

// step 3: declar the players score variables


// 1)create variable humanScore in the gloabal scope and assign it to 0
// 2)  create variable computerScore in the global scope and assign it to 0. 

const humanScore =0; 
const computerScore =0; 

// step 4: write the logic to play a single round.

