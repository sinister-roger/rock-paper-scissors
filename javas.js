// write the code so that  getComputerChoice will randomly return one of the following string values: "rock", "paper", or "scissors". 

// 1) create a variable named stringNumber
// 2) assign "stringNumebr" random math value using Math.floor(Math.random)*100. #this gives values between 1 and 100. 
// 3) IF number is <= 33
//      print rock
//    ELSE IF number is <= 66 
//      print paper
//    ELSE 
//      print scissors.

// ++++++++++
// console.log(Math.floor(Math.random()*100)) #to test the function.

function getComputerChoice() {
    const stringNumber = Math.floor((Math.random())*100)

    // console.log(stringNumber) # to use the number 

    if (stringNumber <= 33) {
        console.log("rock"); 
    } else if (stringNumber <=66) {
        console.log("paper");
    } else {
        console.log("scissors");
    }
}

getComputerChoice()