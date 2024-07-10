//Returns an integer between 0 and max
function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

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
    let input = window.prompt("Please enter your move (rock, paper, or scissors").trim().toLowerCase();
    if (!isValidInput(str)){
        console.log("Invalid input!");
        getHumanMove();
    }
    console.log("Recieved input: " + input);
}

function isValidInput(str)
{
    if (str === "rock" || str === "paper" || str == "scissors"){
        return true
    }

    return false;
}


