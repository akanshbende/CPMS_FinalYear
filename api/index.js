const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("CPMS SERVER!!!");
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
