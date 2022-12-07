const { readFileSync } = require('fs');

const elvesBag = readFileSync('./input.txt').toString('utf8').trim().split(/\n\s*\n/)

const caloriesByElves = elvesBag.map(bag => bag.split("\n").reduce((acc, curr) => acc + parseInt(curr), 0))

// Part 1
const maxCalories = Math.max(...caloriesByElves)

// Part 2
const totalTop3Elves = caloriesByElves.sort((a, b) => b - a).slice(0,3).reduce((acc, curr) => acc +parseInt(curr), 0)

console.log("Part One - Result ▶️ ", totalTop3Elves)
console.log("Part Two - Result ▶️ ", maxCalories)

