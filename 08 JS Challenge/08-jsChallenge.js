// Function to get the player's choice
function getPlayerChoice () 
{
    const choiceOptions = document.getElementsByName("choice"); // Get the radio buttons with the name "choice"
   

    for (let i = 0; i < choiceOptions.length; i++) // Loop through the radio buttons
    {
        if (choiceOptions[i].checked) // If the radio button is checked
        {
            return choiceOptions[i].value; // Return the value of the radio button
        }
    }

}

// Function to get the computer's choice
function getComputerChoice() 
{
   const choices = ["Rock", "Paper", "Scissors"];
   let computerChoice = Math.floor(Math.random() * 3); // Generate a random number between 0 and 2

   return choices[computerChoice]; // Return the choice based on the random number
}

// Function to find the winner
function findWinner(playerChoice, computerChoice) 
{
    if (playerChoice == computerChoice) // If the player and computer choices are the same
    {
        return "It's a tie!"; // Return that it's a tie
    }

    if (playerChoice == "Rock") // If the player chose Rock
    {
        if (computerChoice == "Scissors") // If the computer chose Scissors
        {
            return "You win!"; // Return that the player wins
        }
        else
        {
            return "You lose!"; // Return that the player loses
        }
    }

    if (playerChoice == "Paper") // If the player chose Paper
    {
        if (computerChoice == "Rock") // If the computer chose Rock
        {
            return "You win!"; // Return that the player wins
        }
        else
        {
            return "You lose!"; // Return that the player loses
        }
    }

    if (playerChoice == "Scissors") // If the player chose Scissors
    {
        if (computerChoice == "Paper") // If the computer chose Paper
        {
            return "You win!"; // Return that the player wins
        }
        else
        {
            return "You lose!"; // Return that the player loses
        }
    }
}

// Function to play the game
function playGame() 
{
    let playerChoice = getPlayerChoice(); // Get the player's choice
    let computerChoice = getComputerChoice(); // Get the computer's choice

    document.getElementById("playerChoice").innerHTML = "You chose: " + playerChoice; // Display the player's choice
    document.getElementById("computerChoice").innerHTML = "Computer chose: " + computerChoice; // Display the computer's choice

    document.getElementById("result").innerHTML = findWinner(playerChoice, computerChoice); // Display the result of the game
}


