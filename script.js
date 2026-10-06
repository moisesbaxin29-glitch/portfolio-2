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