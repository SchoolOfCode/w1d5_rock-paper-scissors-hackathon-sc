// let result = getWinner(playerMove,computerMove); //0
// console.log(result);
// result = result + getWinner("paper","rock"); //1
// console.log(result);
// result = result + getWinner("scissors","paper"); //1
// console.log(result);
// result = result + getWinner("rock","paper"); //-1
// console.log(result);

//----------------------------------------------------------

// Take the if statements that you've written and tested and put them into a function. The variables from before should now be taken
//  in as parameters so that you can call the function with any two moves. Instead of printing the result to the console, the function 
//  should return:

// The function should be able to be used like so:

// This will be deemed as complete when the function can be called with any combination of valid moves and returns the appropriate
// number.


// - `1` if player1 wins
// - `0` if it is a draw
// - `-1` if player1 loses (player2 wins)


// ```js
// function getWinner(player1, player2) {
//   // code goes here...
// }

// let result = getWinner("rock", "paper");
// ```


//Wrap if statements in a function with 2 paramenters: Player ones choice, computer move
//Refactor if tree to use the arguments:
//change playerMove
//return number based on result(SEE OUTCOME)


//OUTCOME: return a number that means win loss draw( 1=win, 0 =Draw, -1 = loss)




function getWinner(playerMove, computerMove){


if (playerMove === "rock" && computerMove === "paper"){
    return -1;
}else if(playerMove === "rock" && computerMove === "scissors" ){
    return 1;
}else if(playerMove === "rock" && computerMove === "rock" ){
    return 0;



}else if(playerMove === "paper" && computerMove === "rock" ){
    return 1;
}else if(playerMove === "paper" && computerMove === "scissors" ){
    return -1;
}else if(playerMove === "paper" && computerMove === "paper" ){
    return 0;



}else if(playerMove === "scissors" && computerMove === "rock" ){
    return -1;
}else if(playerMove === "scissors" && computerMove === "paper" ){
    return 1;
}else if(playerMove === "scissors" && computerMove === "scissors" ){
    return 0;
}
}




let playerMove = "paper";
let computerMove = "paper";


let result = getWinner(playerMove,computerMove); //0
console.log(result);