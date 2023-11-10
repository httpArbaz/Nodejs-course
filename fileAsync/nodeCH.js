const fs = require("fs");

fs.mkdir("arbaz", (err) => {
  console.log("Folder!");
});

fs.writeFile("./arbaz/bio.txt", "hello world", (err) => {
  console.log("Done! ");
});

fs.appendFile("./arbaz/bio.txt", "hello world Noob", (err) => {
  console.log("Done! ");
});

fs.readFile("./arbaz/bio.txt", "UTF-8", (err, data) => {
  console.log(data);
});
