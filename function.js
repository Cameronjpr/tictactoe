
// This array stores the values of the tiles. The first three items point to the first row in the grid!
let tileArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let tileArrForReset = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let turnCounter = 0
let redWinCount = 1
let blueWinCount = 1
let gameIsWon = false

function tileIsClicked(elementId) {
  changeColor(elementId);
}

function resetTiles() {
  tileArrForReset.forEach(tile => {
  document.getElementById(tile).style.backgroundColor = "#DDDDDD";
  });
  tileArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  console.log(tileArr);
  console.log("It's a new game. Enjoy!");
  playerToStart();
  gameIsWon = false;
}

function playerToStart() {
  if (turnCounter === 1) {
    document.getElementById('topmessage').style.color = "#0074D9"
    document.getElementById('topmessage').innerHTML = "Blue goes first..."
  }
  else if (turnCounter === 0) {
    console.log("Red goes first...");
    document.getElementById('topmessage').style.color = "#FF4136"
    document.getElementById('topmessage').innerHTML = "Red goes first..."
  }
}

function turnDisplay() {
  if (turnCounter === 0) {
    turnCounter = 1;
    console.log("Blue, it's your turn");
  }
  else if (turnCounter === 1) {
    turnCounter = 0;
    console.log("Red, it's your turn");
  }
}

function changeColor(elementId) {
  let div = document.getElementById(elementId);
  let i = parseInt(elementId - 1);

  if (tileArr[i] != 0) {
    console.log("Invalid move! Go again...")
  }
  if (tileArr[i] === 0 && turnCounter === 0 && gameIsWon === false) {
    tileArr[i] = 1;
    // console.log("Tile number "(i + 1).toString() + " was changed.")
    div.style.backgroundColor = "#FF4136";
    document.getElementById('topmessage').style.color = "#0074D9"
    document.getElementById('topmessage').innerHTML = "Blue's turn..."
    turnDisplay()
  }
  else if (tileArr[i] === 0 && turnCounter === 1 && gameIsWon === false) {
    tileArr[i] = 10;
    // console.log("Tile number "(i + 1).toString() + " was changed.")
    div.style.backgroundColor = "#0074D9";
    document.getElementById('topmessage').style.color = "#FF4136"
    document.getElementById('topmessage').innerHTML = "Red's turn..."
    turnDisplay()
  }
  else {
    console.log("All if/else statements failed. Something went very wrong!")
  }
  console.log(tileArr)
  checkVictoryConditions()
}

// Master function containing the checks for each colour (3 for red vs 30 for blue)
function checkVictoryConditions() {
  if (gameIsWon === false) {
  checkVictoryConditionsForBlue()
  checkVictoryConditionsForRed()
  }
  else {
    console.log("Game has already been won.")
  }
}

// Takes the color counter (as in the HTML div) and updates the score
function updateTheWinCount(color, count) {
  document.getElementById(color).innerHTML = count.toString()
}

function playerRedWins() {
  console.log("Paint the town red. Player one wins!")
  let passedCount = (redWinCount ++);
  paintTheBoardRed();
  updateTheWinCount('redwincount', passedCount);
  gameIsWon = true;
}

function playerBlueWins() {
  console.log("No need to feel blue. Player two wins!")
  let passedCount = (blueWinCount ++);
  paintTheBoardBlue();
  updateTheWinCount('bluewincount', passedCount);
  gameIsWon = true;
}

function paintTheBoardRed() {
  tileArrForReset.forEach(tile => {
  document.getElementById(tile).style.backgroundColor = "#FF4136";
  });
  document.getElementById('topmessage').style.color = "black"
  document.getElementById('topmessage').innerHTML = "Well done, Red!"
}

function paintTheBoardBlue() {
  tileArrForReset.forEach(tile => {
  document.getElementById(tile).style.backgroundColor = "#0074D9";
  });
  document.getElementById('topmessage').style.color = "black"
  document.getElementById('topmessage').innerHTML = "Well done, Blue!"
}
