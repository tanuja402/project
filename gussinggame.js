const secretNumber = Math.floor(Math.random() * 100) + 1;
let a = 5;
alert("Welcome to the Guessing Game!");
alert("You have 5 chances to guess the secret number between 1 and 100.");
function startGame() {
  for (let i = 1; i <= 5; i++) {
    let guess = parseInt(prompt("Enter your guess:"));
    if (guess === secretNumber) {
      alert("Congratulations! You guessed the correct number!");
      return; 
    } else if (guess < secretNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }
    
    a--; 
    alert(`You have ${a} chances left.`);
  }

  alert("Sorry, you've run out of chances. The secret number was: " + secretNumber);
}

startGame();
