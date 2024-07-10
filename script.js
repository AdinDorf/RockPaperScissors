let humanPoints = 0;
let computerPoints = 0;
const HU = "human";
const CO = "computer";
const T = "It's a tie!";

playRound();
////////////////////////////////////////////////
//Function Declarations

//Returns an integer between 0 and max
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

//Returns a string containing the computer's move
function getComputerMove()
{
    let move = getRandomInt(3);
    switch (move)
     {
        case 0:
            return "rock";
        break;
        case 1:
            return "paper";
        break;
        case 2:
            return "scissors";
        break;
        default:
            return "error";
        break;
     }
}


function getHumanMove()
{
    let input = prompt("Please enter your move (rock, paper, or scissors)");
    input = input.trim().toLowerCase();
    if (!isValidInput(input)){
        console.log("Invalid input!");
        return getHumanMove();
    }
    console.log("Recieved input: " + input);
    return input;
}

function isValidInput(str)
{
    if (str === "rock" || str === "paper" || str === "scissors"){
        return true
    }
    return false;
}

function determineWinner(computer, human)
{

    if (computer === human){
        console.log("It's a tie!");
        return T;
    }

    switch (computer){
        case "rock":
            if (human === "paper")
            {
                humanPoints++;
                return HU;
            }
        case "paper":
            if (human === "scissors")
            {
                humanPoints++;
                return HU;
            }
        case "scissors":
            if (human === "rock")
            {
                humanPoints++;
                return HU;
            }
    }
    
    computerPoints++;
    return CO;
}

function playRound()
{
    let computer = getComputerMove();
    let human = getHumanMove();
    let winner = determineWinner(computer, human);
    console.log(`The human plays ${human} and the computer plays ${computer}`);
    if (winner === T)
    {
        console.log(T);
    }
    else {
        console.log(`The ${winner} wins!`);
    }
}
