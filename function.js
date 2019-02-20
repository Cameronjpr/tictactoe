
// This array stores the values of the tiles. The first three items point to the first row in the grid!
let tileArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// This function takes the id of an element and passes it as the index of the above array.
function changeColor(elementId) {
  let div = document.getElementById(elementId);
  let i = parseInt(elementId - 1);
  if (tileArr[i] === 0) {
    tileArr[i] ++
    console.log((i + 1).toString() + " is currently " + tileArr[i])
    div.style.backgroundColor = "white"
  }
  else if (tileArr[i] === 1) {
    tileArr[i] --
    console.log((i + 1).toString() + " is currently " + tileArr[i])
    div.style.backgroundColor = "black"
  }
  console.log(tileArr)
  checkVictoryConditions()
}

function checkVictoryConditions() {
  console.log("checking victory conditions...")

  // ROWS:
  if (tileArr[0] + tileArr[1] + tileArr[2] === 3) {
    // win condition is met on top row
    console.log("Game over. Top row")
  }
  else if (tileArr[3] + tileArr[4] + tileArr[5] === 3) {
    // win condition is met on middle row
    console.log("Game over. middle row")
  }
  else if (tileArr[6] + tileArr[7] + tileArr[8] === 3) {
    // win condition is met on bottom row
    console.log("Game over. bottom row")
  }
  // COLUMNS:
  else if (tileArr[0] + tileArr[3] + tileArr[6] === 3) {
    // win condition is met on left column
    console.log("Game over. Left column")
  }
  else if (tileArr[1] + tileArr[4] + tileArr[7] === 3) {
    // win condition is met on middle column
    console.log("Game over. Middle column")
  }
  else if (tileArr[2] + tileArr[5] + tileArr[8] === 3) {
    // win condition is met on right column
    console.log("Game over. Right column")
  }
  // DIAGONALS:
  else if (tileArr[0] + tileArr[4] + tileArr[8] === 3) {
    // win condition is met on the back-slash diag.
    console.log("Game over. Back-slash!")
  }
  else if (tileArr[2] + tileArr[4] + tileArr[6] === 3) {
    // win condition is met on the forward-slash diag.
    console.log("Game over. Forward-slash!")
  }
  else {
    console.log("Next move...")
  }
}
