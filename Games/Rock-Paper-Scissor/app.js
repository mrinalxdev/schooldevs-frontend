// USING NUMBER 
console.log("this will be the game using Number Matching")

let userInput1 = 2

if (userInput1 >= 1){
    console.log("The Game Begins")

    console.log("1 : Rock")
    console.log("2 : Paper")
    console.log("3 : Scissors")

    let randomNumber = Math.floor((Math.random()*4))
    
    if (randomNumber == 1 || randomNumber == 2 || randomNumber == 3) {
        console.log("Valid Numbers Entered")
        console.log(randomNumber)
    }

    if (randomNumber == 1) {
        console.log("ROCK")
    }
    else if (randomNumber == 2) {
        console.log("Paper")
    }
    else if (randomNumber == 3){
        console.log("Scissor")
    }
    
    
}
else{
    console.log("Please enter any Valid Number to start")
}
