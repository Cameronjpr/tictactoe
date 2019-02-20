
let tileArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]

// THIS WORKS!!!!
// function changeToWhite(elementId) {
//   let i = parseInt(elementId - 1);
//   let div = document.getElementById(elementId);
//   div.style.backgroundColor = "white"
//   invertIndexBit(i)
// }
//
// function changeToBlack(elementId) {
//   let i = parseInt(elementId - 1);
//   let div = document.getElementById(elementId);
//   div.style.backgroundColor = "black"
//   invertIndexBit(i)
//   }
//
//
// function invertIndexBit(i) {
//   if (tileArr[i] === 0) {
//     tileArr[i] ++
//     console.log((i + 1).toString() + " is currently " + tileArr[i])
//   }
//   else if (tileArr[i] === 1) {
//     tileArr[i] --
//     console.log((i + 1).toString() + " is currently " + tileArr[i])
//   }
//   console.log(tileArr)
// }

// This function is attempting to blend changeToX and invertIndexBit
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
}

// function checkValueAtIndex() {
//   console.log("starting check value function")
//   if tileArr[elementId] === 0 {
//     tileArr[elementId] ++;
//     return tileArr[elementId];
//   }
//   else if tileArr[elementId] === 1 {
//     tileArr[elementId] --;
//     return tileArr[elementId];
//   }
// }
//
// function changeColor(elementId) {
//   let div = document.getElementById(elementId)
//   indexValue = checkValueAtIndex(elementId)
//
//   if indexValue === 0 {
//     div.style.backgroundColor = "white"
//   }
//   else if indexValue === 1 {
//     div.style.backgroundColor = "black"
//   }
// }

// function changeColor() {
//   document.getElementsByClassName('box').style.backgroundColor = "white";
// }
