
// There must be a better way of express this maths...
function checkVictoryConditionsForBlue() {
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

function checkVictoryConditionsForRed() {
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
