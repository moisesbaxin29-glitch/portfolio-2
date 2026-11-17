// HTML Elements
const resetButton = document.querySelector('#reset');
const currentPlayer = document.querySelector('#current-player');
const squares = document.querySelectorAll('.square');
const messageText = document.querySelector('#message');

// Score HTML Elements
const xScoreText = document.querySelector('#x-score');
const oScoreText = document.querySelector('#o-score');
const drawScoreText = document.querySelector('#draw-score');

// Counters & Game State
let moves = 0;
let xWins = 0;
let oWins = 0;
let draws = 0;
let gameOver = false;

// Winning combinations array
const winningLines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Switches the active player
function switchPlayer() {
  if (currentPlayer.textContent === 'X') {
    currentPlayer.textContent = 'O';
  } else {
    currentPlayer.textContent = 'X';
  }
}

// Handles player clicks on squares
function playTurn(event) {
  const square = event.target;

  // Only allow plays on empty squares and if game is active
  if (square.textContent === "" && !gameOver) {
    square.textContent = currentPlayer.textContent;
    moves = moves + 1; // Increment moves counter

    checkWinner();

    // Only switch player if the game is still ongoing
    if (!gameOver) {
      switchPlayer();
    }
  }
}

// Checks win conditions and draws
function checkWinner() {
  for (const line of winningLines) {
    const first = squares[line[0]].textContent;
    const second = squares[line[1]].textContent;
    const third = squares[line[2]].textContent;

    if (first !== '' && first === second && first === third) {
      console.log(first + ' wins!');
      messageText.textContent = first + ' wins!';
      gameOver = true;

      // Update score count and text
      if (first === 'X') {
        xWins = xWins + 1;
        xScoreText.textContent = 'X: ' + xWins;
      } else {
        oWins = oWins + 1;
        oScoreText.textContent = 'O: ' + oWins;
      }
      return; // Stop function execution once a winner is found
    }
  }

  // Check for draw if 9 moves are reached without a winner
  if (moves === 9) {
    messageText.textContent = "It's a draw!";
    gameOver = true;
    draws = draws + 1;
    drawScoreText.textContent = 'Draws: ' + draws;
  }
}

// Resets board state while retaining scores
function resetGame() {
  moves = 0;
  gameOver = false;
  messageText.textContent = '';
  currentPlayer.textContent = 'X';

  for (const square of squares) {
    square.textContent = '';
  }  
}

// Event Listeners
for (const square of squares) {
  square.addEventListener('click', playTurn);
}

resetButton.addEventListener('click', resetGame);

// 1. Define a function, then call it
function showTonight() {
  console.log("Tonight's lineup:");
}

showTonight();

// 2. Send a value in with a parameter
function announceMovie(title) {
  console.log("Up next: " + title);
}

announceMovie("Wicked");
announceMovie("Dune: Part Two");
announceMovie("Inside Out 2");

// 3. Pick the right TMDB list
function getEndpoint(page) {
  if (page === "upcoming") {
    return "upcoming";
  } else if (page === "popular") {
    return "popular";
  } else if (page === "top-rated") {
    return "top_rated";
  }
}

console.log(getEndpoint("popular"));
console.log(getEndpoint("top-rated"));

// 4. Build a poster URL
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

function makePosterUrl(posterPath) {
  return IMAGE_URL + posterPath;
}

console.log(makePosterUrl("/poster.jpg"));

// 5. Check a rating
function isHighlyRated(rating) {
  return rating >= 7;
}

console.log(isHighlyRated(8.2));
console.log(isHighlyRated(5.5));

// 6. Two parameters
function makeMovieLine(title, rating) {
  return title + " (" + rating + " / 10)";
}

let line = makeMovieLine("Wicked", 7.4);
console.log(line);

// 7. Use a function inside a loop
const ratings = [8.2, 5.5, 7, 6.9];

for (let i = 0; i < ratings.length; i++) {
  if (isHighlyRated(ratings[i])) {
    console.log(ratings[i] + " is a great pick!");
  }
}
// Grab all three buttons from the HTML
const buttons = document.querySelectorAll(".nav-btn");
const bannerTitle = document.querySelector("#featured h2");
const loader = document.querySelector(".loader");

// Loop through each button and listen for a click
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    // 1. Get the text on the button (e.g. "Popular")
    let buttonText = buttons[i].textContent;

    // 2. Change the blue banner's heading
    bannerTitle.textContent = buttonText;

    // 3. Hide the spinning loader
    loader.style.display = "none";

    // 4. Test your getEndpoint function in the Console
    let pageName = buttonText.toLowerCase().replace(" ", "-");
    console.log("Loading endpoint:", getEndpoint(pageName));
  });
}