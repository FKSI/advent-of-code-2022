const { readFileSync } = require('fs');

const mapOfTrees = readFileSync('./example.txt').toString('utf8').trim().split("\n").map(row => row.split("").map(item => parseInt(item, 10)))

console.log("☘️☘️☘️☘️ ~ file: main.js:4 ~ maps", mapOfTrees)

const core = mapOfTrees.slice(1,mapOfTrees.length-1).map(row => row.slice(1,row.length -1))

const lookUP = (currentTree, currentIndex) => {
  let upperRow = mapOfTrees[currentIndex -1]
  if(upperRow) {
    upperRow = upperRow.slice(1, upperRow.length -1)
    return currentTree > upperRow[currentIndex]
  }
}
const lookBottom = (currentTree, currentIndex) => {
  let bottomRow = mapOfTrees[currentIndex + 1]
  if(bottomRow) {
    bottomRow = bottomRow.slice(1, bottomRow.length -1)
    return currentTree > bottomRow[currentIndex]
  }
}

const lookRight = (currentTree, currentIndex, row) => {
  if(currentIndex + 1 <= row.length ) {
    return currentTree > row[currentIndex + 1]
  }
}

const lookLeft = (currentTree, currentIndex, row) => {
  if(currentIndex - 1 >= 0 && currentIndex < row.length) {
    return currentTree > row[currentIndex - 1]
  }
}



let lookedUp = [];
let lookedBottom = [];
let lookedRight = [];

core.forEach((row, currentRowIndex ) => {
  const lookedUpRow = []
  const lookedBottomRow = []
  const lookedRightRow = []
  row.forEach((tree, currentTreeIndex)=> {
    lookedUpRow.push(lookUP(tree, currentRowIndex + 1))
    lookedBottomRow.push(lookBottom(tree, currentRowIndex + 1))
    lookedRightRow.push(lookRight(tree, currentTreeIndex, row))
    console.log("☘️☘️☘️☘️ ~ file: main.js:52 ~ row.forEach ~ lookLeft(tree, currentTreeIndex, row)", lookLeft(tree, currentTreeIndex, row))
  })
  lookedUp.push(lookedUpRow)
  lookedBottom.push(lookedBottomRow)
  lookedRight.push(lookedRightRow)

})
console.log("☘️☘️☘️☘️ ~ file: main.js:21 ~ lookedUp", lookedUp)
console.log("☘️☘️☘️☘️ ~ file: main.js:21 ~ lookedBottom", lookedBottom)
console.log("☘️☘️☘️☘️ ~ file: main.js:21 ~ lookedRight", lookedRight)


// // 1713
