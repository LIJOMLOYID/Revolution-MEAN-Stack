const express = require("express");

const app = express();

const port = 3000;

app.get("/", (request, response) => {
  console.log("Base route hit!");
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
