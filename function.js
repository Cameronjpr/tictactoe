
// This array stores the values of the tiles. The first three items point to the first row in the grid!
let tileArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let tileArrForReset = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let turnCounter = 0

function tileIsClicked(elementId) {
  changeColor(elementId)
}

function resetTiles() {
  tileArrForReset.forEach(tile => {
  document.getElementById(tile).style.backgroundColor = "black";
  });
  tileArr = [0, 0, 0, 0, 0, 0, 0, 0, 0];
}

function turnDisplay() {
  if (turnCounter === 0) {
    turnCounter = 1
    console.log("player two, it's your turn")
  }
  else if (turnCounter === 1) {
    turnCounter = 0
    console.log("player one, it's your turn")
  }
}

function changeColor(elementId) {
  let div = document.getElementById(elementId);
  let i = parseInt(elementId - 1);

  if (tileArr[i] != 0) {
    console.log("Invalid move! Go again...")
  }
  if (tileArr[i] === 0 && turnCounter === 0) {
    tileArr[i] = 1;
    // console.log("Tile number "(i + 1).toString() + " was changed.")
    div.style.backgroundColor = "red";
    turnCounter = 1
    document.getElementById('topmessage').style.color = "blue"
    document.getElementById('topmessage').innerHTML = "Blue's turn..."
  }
  else if (tileArr[i] === 0 && turnCounter === 1) {
    tileArr[i] = 10;
    // console.log("Tile number "(i + 1).toString() + " was changed.")
    div.style.backgroundColor = "blue";
    turnCounter = 0
    document.getElementById('topmessage').style.color = "red"
    document.getElementById('topmessage').innerHTML = "Red's turn..."
  }
  else {
    console.log("All if/else statements failed. Something went very wrong!")
  }
  console.log(tileArr)
  checkVictoryConditions()
}





function checkVictoryConditions() {
  console.log("checking victory conditions...")

  // ROWS:
  if (tileArr[0] + tileArr[1] + tileArr[2] === 30) {
    // win condition is met on top row
    console.log("Game over. Top row")
    playerBlueWins()
  }
  else if (tileArr[3] + tileArr[4] + tileArr[5] === 30) {
    // win condition is met on middle row
    console.log("Game over. middle row")
    playerBlueWins()
  }
  else if (tileArr[6] + tileArr[7] + tileArr[8] === 30) {
    // win condition is met on bottom row
    console.log("Game over. bottom row")
    playerBlueWins()
  }
  // COLUMNS:
  else if (tileArr[0] + tileArr[3] + tileArr[6] === 30) {
    // win condition is met on left column
    console.log("Game over. Left column")
    playerBlueWins()
  }
  else if (tileArr[1] + tileArr[4] + tileArr[7] === 30) {
    // win condition is met on middle column
    console.log("Game over. Middle column")
    playerBlueWins()
  }
  else if (tileArr[2] + tileArr[5] + tileArr[8] === 30) {
    // win condition is met on right column
    console.log("Game over. Right column")
    playerBlueWins()
  }
  // DIAGONALS:
  else if (tileArr[0] + tileArr[4] + tileArr[8] === 30) {
    // win condition is met on the back-slash diag.
    console.log("Game over. Back-slash!")
    playerBlueWins()
  }
  else if (tileArr[2] + tileArr[4] + tileArr[6] === 30) {
    // win condition is met on the forward-slash diag.
    console.log("Game over. Forward-slash!")
    playerBlueWins()
  }
  else {
    console.log("Next move...")
  }
}

function checkVictoryConditions() {
  console.log("checking victory conditions...")

  // ROWS:
  if (tileArr[0] + tileArr[1] + tileArr[2] === 3) {
    // win condition is met on top row
    console.log("Game over. Top row")
    playerRedWins()
  }
  else if (tileArr[3] + tileArr[4] + tileArr[5] === 3) {
    // win condition is met on middle row
    console.log("Game over. middle row")
    playerRedWins()
  }
  else if (tileArr[6] + tileArr[7] + tileArr[8] === 3) {
    // win condition is met on bottom row
    console.log("Game over. bottom row")
    playerRedWins()
  }
  // COLUMNS:
  else if (tileArr[0] + tileArr[3] + tileArr[6] === 3) {
    // win condition is met on left column
    console.log("Game over. Left column")
    playerRedWins()
  }
  else if (tileArr[1] + tileArr[4] + tileArr[7] === 3) {
    // win condition is met on middle column
    console.log("Game over. Middle column")
    playerRedWins()
  }
  else if (tileArr[2] + tileArr[5] + tileArr[8] === 3) {
    // win condition is met on right column
    console.log("Game over. Right column")
    playerRedWins()
  }
  // DIAGONALS:
  else if (tileArr[0] + tileArr[4] + tileArr[8] === 3) {
    // win condition is met on the back-slash diag.
    console.log("Game over. Back-slash!")
    playerRedWins()
  }
  else if (tileArr[2] + tileArr[4] + tileArr[6] === 3) {
    // win condition is met on the forward-slash diag.
    console.log("Game over. Forward-slash!")
    playerRedWins()
  }
  else {
    console.log("Next move...")
  }
}

function playerRedWins() {
  console.log("Paint the town red. Player one wins!")
}

function playerBlueWins() {
  console.log("No need to feel blue. Player two wins!")
}
