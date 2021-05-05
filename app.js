const express = require("express");

const app = express();
app.use(express.json());

const port = 3000;

const todo = require("./routes/todo-routes");
app.use("/todo", todo);

app.get("/", (request, response) => {
  console.log("Base route hit!");
  response.json({ success: true, msg: "Base route HIT!" });
});

//HTTP Server
//127.0.0.1:1000
app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
