// ## Task 1: Logic

// To complete this ticket you will need to write a set of if statements that will determine the winner of rock, paper, scissors. 

// The two moves should be stored in two variables like so:


let playerMove = "paper";
let computerMove = "paper";

//choices either: ROCK PAPER SCISSORS
//OUTCOME 


//{rock paper} LOSS
//{rock scissors) WIN 
//{rock rock} DRAW

//{paper rock} WIN
//{paper scissors} LOSS
//{paper paper} DRAW

//{scissors rock} LOSS
//{scissors paper} WIN
//{scissors scissors} DRAW 

if (playerMove === "rock" && computerMove === "paper"){
    console.log("YOU LOSE D:");
}else if(playerMove === "rock" && computerMove === "scissors" ){
    console.log("You WIN :D");
}else if(playerMove === "rock" && computerMove === "rock" ){
    console.log("DRAW IDIOT. WHAT WERE YOU THINKING!?");



}else if(playerMove === "paper" && computerMove === "rock" ){
    console.log("YOU WIN :D");
}else if(playerMove === "paper" && computerMove === "scissors" ){
    console.log("YOU LOSE D:");
}else if(playerMove === "paper" && computerMove === "paper" ){
    console.log("DRAW IDIOT. WHAT WERE YOU THINKING!?");



}else if(playerMove === "scissors" && computerMove === "rock" ){
    console.log("YOU LOSE D:");
}else if(playerMove === "scissors" && computerMove === "paper" ){
    console.log("YOU WIN :D");
}else if(playerMove === "scissors" && computerMove === "scissors" ){
    console.log("DRAW IDIOT. WHAT WERE YOU THINKING!?");
}



// You'll want to hard-code each move in these variables (like the example above) to check each piece of logic at first. 

// This will be deemed as complete when all permutations of the three possible moves for each player have been handled correctly, e.g.
// rock vs rock is a draw, paper vs rock is a paper win, etc.

//if playermove === rock && computermove === paper{

//}