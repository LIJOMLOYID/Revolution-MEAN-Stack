const express = require("express");
const todo = require("./routes/todo-routes");

const app = express();
app.use(express.json());

const port = 3000;

app.use("/todo", todo);

app.get("/", (request, response) => {
  console.log("Base route hit!");
  response.json({ success: true, msg: "Base route HIT!" });
});

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
