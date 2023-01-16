// USING NUMBER 
console.log(`
    1 : Rock,
    2 : Paper,
    3 : Scissors
`)

let userInput = prompt('Enter the Desired Event')

if (userInput == 1) {
    console.log('Rock')
}
else if (userInput == 2) {
    console.log('Paper')
}
else if (userInput == 3){
    console.log('Scissor')
}

let randomNumber = Math.floor(Math.random() * 4)
if (randomNumber == 1) {
    console.log('Rock')
}
else if (randomNumber == 2) {
    console.log('Paper')
}
else if (randomNumber == 3){
    console.log('Scissor')
}

if (randomNumber == 1 && randomNumber == userInput){
    console.log('Draw')
}
else if (randomNumber == 2 && randomNumber == userInput){
    console.log('Draw')
}
else if (randomNumber == 3 && randomNumber == userInput) {
    console.log('Draw')
}


// Win Case for the User 
if (randomNumber == 1 && userInput == 2) {
    console.log('Win for the User')
}
else if (randomNumber == 2 && userInput == 3) {
    console.log('Win for User')
}
else if (randomNumber == 3 && userInput == 1){
    console.log('Win for User')
}

//Win Cases for the Computer 
if (randomNumber == 1 && userInput == 3){
    console.log('Win for the Comp')
}
else if (randomNumber == 2 && userInput == 1){
    console.log('Win for the Comp')
}
else if (randomNumber == 3 && userInput == 2) {
    console.log('Win for the Comp')
}
