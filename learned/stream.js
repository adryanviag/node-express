const fs = require("fs");

const readstream = fs.createReadStream("./docs/test2.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/test3.txt");

// readstream.on("data", (chunk) => {
//   console.log("----NEW CHUNK----");
//   console.log(chunk);
//   writeStream.write("\nNEW CHUNK\n");
//   writeStream.write(chunk);
// });

// ! piping
readstream.pipe(writeStream);
