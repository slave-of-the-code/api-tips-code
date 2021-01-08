require("dotenv").config();
const app = require("./app");

function main() {
  const port = app.get("port");

  app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
  });
}

main();
