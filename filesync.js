const { readFileSync, writeFileSync } = require("fs");
const read1 = readFileSync("./names.js", "latin1");
console.log(read1);
writeFileSync("./content/one.txt", "fisrst file baby", { flag: "aw" });
