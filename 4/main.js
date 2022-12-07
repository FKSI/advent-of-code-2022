const { readFileSync } = require('fs');

const sectionIdsFiller = (a, b) => {
    const arr = []
    if(!a) return [b]
    if(!b) return [a]
    if(a === b) return [a]
    if(a < b) {
        for (var i = a; i <= b; i++) {
            arr.push(i);
        }
        return arr
    }
}

const elvesPairs = readFileSync('./input.txt').toString('utf8').trim().split("\n")

const partOne = elvesPairs.map((assignments) => {
    return assignments.split(",").map(sectionIds => {
        return sectionIdsFiller(parseInt(sectionIds.split("-")[0]), parseInt(sectionIds.split("-")[1]))
    })
}).reduce((acc, section) => {
    var intersection = new Set([...new Set(section[0])].filter(x => new Set(section[1]).has(x)));
    var intersection2 = new Set([...new Set(section[1])].filter(x => new Set(section[0]).has(x)));
    if(intersection.size === section[0].length) {
        acc++
    } else if (intersection2.size === section[1].length) {
        acc++
    }
    return acc
}, 0)

const partTwo = elvesPairs.map((assignments) => {
    return assignments.split(",").map(sectionIds => {
        return sectionIdsFiller(parseInt(sectionIds.split("-")[0]), parseInt(sectionIds.split("-")[1]))
    })
}).reduce((acc, section) => {
    var intersection = new Set([...new Set(section[0])].filter(x => new Set(section[1]).has(x)));
    if(intersection.size > 0) {
        acc++
    }
    return acc
}, 0)

console.log("Part One - Result ▶️ ", partOne)
console.log("Part Two - Result ▶️ ", partTwo)
