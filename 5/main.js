const { readFileSync } = require('fs');

const transpose = (matrix) => {
  let [row] = matrix
  return row.map((_, column) => matrix.map(row => row[column]))
}

let [crates, instructions] = readFileSync('./input.txt').toString('utf8').split(/\n\s*\n/).map((input,idx) => {
    if(idx === 0) {
        let crates = input.split("\n")
        crates.pop()
        crates = crates.map(crate => crate.replaceAll("    ","[#]")).map(crate => crate.match(/[A-Z#]/g).map(match => `[${match}]`))
        return  transpose(crates)
    } else if (idx === 1 ) {
        return input.trim().split("\n")
    } 
    return input
})

const parsedInstructions = instructions.map(instruction => {
    const parsedInstruction = instruction.match(/\d+/g)
    return ({
        numberOfCratesToMove: parsedInstruction[0],
        from: parsedInstruction[1],
        to: parsedInstruction[2]
    })
})

crates = crates.map((crate) => crate.filter(slot => slot !== "[#]"))

let cratesForPartOne = JSON.parse(JSON.stringify(crates))
parsedInstructions.forEach((instruction) => {
    cratesForPartOne = cratesForPartOne.map((crate) => crate.filter(slot => slot !== " "))
    for (let index = 0; index < instruction.numberOfCratesToMove; index++) {
        const elementToMove = cratesForPartOne[instruction.from - 1][index]
        cratesForPartOne[instruction.to - 1].unshift(elementToMove)
        cratesForPartOne[instruction.from - 1][index] = " "
    }
})
cratesForPartOne = cratesForPartOne.map(crate => crate.filter(slot => slot !== " "))
const partOne = cratesForPartOne.reduce((acc, crate) => acc.concat(crate[0].replace(/\[|\]/g, '')), "")

console.log("Part One - Result ▶️ ", partOne)

let cratesForPartTwo = JSON.parse(JSON.stringify(crates))
parsedInstructions.forEach((instruction) => {
        cratesForPartTwo = cratesForPartTwo.map((crate) => crate.filter(slot => slot !== " "))
        let crates = cratesForPartTwo[instruction.from - 1].splice(0, instruction.numberOfCratesToMove, " ");
        cratesForPartTwo[instruction.to - 1].unshift(...crates);
})


cratesForPartTwo = cratesForPartTwo.map(crate => crate.filter(slot => slot !== " "))

const partTwo = cratesForPartTwo.reduce((acc, crate) => acc.concat(crate[0].replace(/\[|\]/g, '')), "")

console.log("Part Two - Result ▶️ ", partTwo)




