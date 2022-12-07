const { readFileSync } = require('fs');

const mod = (a, b) => {
  const c = a % b;
  return c < 0 ? c + b : c;
}

const ruler = (x, y) => {
    if (x == y) {
        return (y + 1) + 3; 
    }
    if (mod(x - y, 3) < 3 / 2) {
        return (y + 1);
    } else {
        return 6 + (y + 1);
    }
}

const scoreComputer = (computerInput, userIinput) => {
    const computerChoices = ["A", "B", "C"]; // ["rock", "paper", "scissors"]
    const userChoices = ["X", "Y", "Z"]; // ["rock", "paper", "scissors"]
    const x = computerChoices.indexOf(computerInput.toUpperCase());
    const y = userChoices.indexOf(userIinput.toUpperCase());
    return ruler(x,y)
};

const gamePredictor = (computerInput, endIndicator) => {
    const computerChoices = ["A", "B", "C"]; // ["rock", "paper", "scissors"]
    const endType = ["X", "Y", "Z"]; // ["rock", "paper", "scissors"]
    const computerChoice =  computerChoices.indexOf(computerInput.toUpperCase()) + 1;
    const endIndicatorIndex = endType.indexOf(endIndicator.toUpperCase())
    let res = 0
    if(endIndicatorIndex === 0) { // X (loose)
        res = computerChoice - 1
        return res === 0 ? 3 : res
    } else if(endIndicatorIndex === 1) { // Y (tie)
        res = computerChoice + 3
        return res
    } else if (endIndicatorIndex === 2 ) { // Z (win)
        res = computerChoice + 1
        return res == 4 ? 7 : res + 6
    }
}

const games = readFileSync('./input.txt').toString('utf8').trim().split("\n")

const resultsPartOne = games.map((game) => {
    return scoreComputer(game.split(" ")[0], game.split(" ")[1])
}).reduce((acc, curr) => acc + curr, 0)

const resultsPartTwo = games.map((game) => {
    return gamePredictor(game.split(" ")[0], game.split(" ")[1])
}).reduce((acc, curr) => acc + curr, 0)

console.log("Part One - Result ▶️ ", resultsPartOne)
console.log("Part Two - Result ▶️ ", maxCalories)