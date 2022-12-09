const { readFileSync } = require('fs');

const messages = readFileSync('./input.txt').toString('utf8').trim().split("\n")

const START_MESSAGE_MARKER_PART_ONE = 4
const START_MESSAGE_MARKER_PART_TWO = 14

const firstDifferentPosition = (message, marker) => {
    let previousChars = [];
    
    for (let i = 0; i < message.length; i++) {
        const c = message[i];
        previousChars.push(c);
        if (previousChars.length > marker) {
            previousChars.shift();
        }
        if (new Set(previousChars).size === marker) {
            return i + 1;
        }
    }
    
    return -1;
}

messages.forEach(message => {
    const partOne = firstDifferentPosition(message, START_MESSAGE_MARKER_PART_ONE)
    const partTwo = firstDifferentPosition(message, START_MESSAGE_MARKER_PART_TWO)
    console.log("Part One - Result ▶️ ", partOne)
    console.log("Part One - Result ▶️ ", partTwo)
});