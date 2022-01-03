const { readFile, writeFile } = require("fs");

readFile("./content/one.txt", "utf8", (err, result) => {
  if (err) {
    console.log(error);
  } else {
    console.log(result);
    writeFile(
      "./content/two.txt",
      ` here is the new data   ${result}`,
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          console.log(result);
        }
      }
    );
  }
});
