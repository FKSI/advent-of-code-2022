// Source: https://github.com/FriendlyUser1/adventofcode/blob/main/2022/day7/tree.js

const { readFileSync } = require('fs');
class FileSystem {
	constructor() {
		this.view = {};
		this.pwd = [];
	}

	add(item) {
		let curDir = this.pwd.reduce((curDir, d) => curDir[d], this.view);
		curDir[item[1]] = !isNaN(item[0]) ? parseInt(item[0]) : {};
	}

	cd(name) {
		if (name === "/") this.pwd = [];
		else if (name === "..") this.pwd.pop();
		else this.pwd.push(name);
	}
}

const inputs = readFileSync(`./input.txt`, "utf-8").split("\n")
const fileSystem = new FileSystem();


for (let i = 0; i < inputs.length; i++) {
	let ins = inputs[i].split(" ");
	if (ins[0] === "$") {
		if (ins[1] === "cd") fileSystem.cd(ins[2]);
	} else {
		fileSystem.add(ins);
	}
}

let dirs = {};

// Get sizes of directories
const crawl = (dir = "", branch = fileSystem.view) => {
	let size = 0;
	for (let [k, v] of Object.entries(branch)) {
		if (!isNaN(v)) size += v;
		else size += crawl(`${dir}/${k}`, branch[k]);
	}
	dirs[dir ? dir : "/"] = size;
	return size;
};

crawl();

dirs = Object.fromEntries(Object.entries(dirs).sort((a, b) => a[1] - b[1]));

// Part 1

const partOne = Object.values(dirs)
		.filter((n) => n < 100000)
		.reduce((a, n) => a + n, 0)

        console.log("Part One - Result ▶️ ", partOne)


let spaceNeeded = 30000000 - (70000000 - dirs["/"])
const partTwo = dirs[Object.keys(dirs).filter((dir) => dirs[dir] >= spaceNeeded)[0]];

console.log("Part Two - Result ▶️ ", partTwo)
