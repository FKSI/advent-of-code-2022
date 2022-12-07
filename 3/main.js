const { readFileSync } = require('fs');

const TYPES_VS_PRIORITIES = {
    'a': 1,
    'b': 2,
    'c': 3,
    'd': 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26,
    'A':27,
    'B':28,
    'C':29,
    'D':30,
    'E':31,
    'F':32,
    'G':33,
    'H':34,
    'I':35,
    'J':36,
    'K':37,
    'L':38,
    'M':39,
    'N':40,
    'O':41,
    'P':42,
    'Q':43,
    'R':44,
    'S':45,
    'T':46,
    'U':47,
    'V':48,
    'W':49,
    'X':50,
    'Y':51,
    'Z':52
}

const ruckstacks = readFileSync('./input.txt').toString('utf8').trim().split("\n")

let [ruckstacksByGroup, groupeSize] = [ruckstacks, 3];

ruckstacksByGroup = [...Array(Math.ceil(ruckstacksByGroup.length / groupeSize))].map(_ => {
    return ruckstacksByGroup.splice(0,groupeSize)
})

const partOne = ruckstacks.reduce((acc, ruckstack) => {
    ruckstackLength = ruckstack.length
    const ruckstackCompartiment1 = new Set(ruckstack.slice(0, ruckstackLength / 2).split(''))
    const ruckstackCompartiment2 = new Set(ruckstack.slice(ruckstackLength / 2, ruckstackLength).split(''))
    for(let char of ruckstackCompartiment1.values()){
       if(ruckstackCompartiment2.has(char)) return acc + TYPES_VS_PRIORITIES[char]
    }
}, 0)

console.log("Part One - Result ▶️ ", partOne)
const partTwo = ruckstacksByGroup.reduce((acc,ruckstackByGroup) => {
    for (let index = 0; index < ruckstackByGroup[0].length; index++) {
        const char = ruckstackByGroup[0][index];
        const ruckstackByGroup2 = new Set(ruckstackByGroup[1].split(''))
        const ruckstackByGroup3 = new Set(ruckstackByGroup[2].split(''))
        if(ruckstackByGroup2.has(char) && ruckstackByGroup3.has(char)) {
            return acc + TYPES_VS_PRIORITIES[char]
        }
    }
}, 0)
console.log("Part Two - Result ▶️ ", partTwo)





