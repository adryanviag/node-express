const fs = require("fs");

// ! reading files
// fs.readFile("./docs/test.txt", (err, data) => {
//   if (err) {
//     console.log("error, ", err.message);
//   }
//   console.log(data.toString());
// });

// console.log("last line, triggered first.");

// ! writing files
// fs.writeFile("./docs/test.txt", "hello world!", () => {
//   console.log("file modified.");
// });

// fs.writeFile("./docs/test1.txt", "hello test1!", () => {
//   console.log("file written.");
// });

// ! directories
// if (!fs.existsSync("./assets")) {
//   fs.mkdir("./assets", (err) => {
//     if (err) {
//       console.log(err.message);
//     }
//     console.log("folder created.");
//   });
// } else {
//   fs.rmdir("./assets", (err) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log("assets folder removed.");
//   });
// }

// ! deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file removed.");
  });
}
