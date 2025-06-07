const fs = require("fs");

fs.writeFile(
  "./data/exemplCallback.txt",
  "Hello Coders! Virei um arquivo!",
  (err) => {
    if (err) {
      return console.log("0 - Errouuuu", err);
    }
    // 1
    fs.readFile("./data/exemplCallback.txt", "utf-8", (err, resultado) => {
      // 1, 2
      if (err) {
        return console.log("1 - Errouuuu");
      }
      console.log(resultado);
      fs.appendFile("./data/exemplCallback.txt", " Mais conteúdo! ", (err) => {
        // 1, 2, 3
        if (err) {
          return console.log("2 - Errouuuu");
        }
        fs.readFile("./data/exemplCallback.txt", "utf-8", (err, resultado) => {
          // 1,2,3,4
          if (err) {
            return console.log("3 - Errouuuu");
          }
          console.log(resultado);
        });
      });
    });
  }
);