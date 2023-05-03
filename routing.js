const express = require("express");

const app = express();
const PORT = 4000;

app.get("/", (req, res) => {
  res.send("<h1> HELLO </h1>");
});
app.get("/about", (req, res) => {
  res.send("<h1> ABOUT </h1>");
});
app.get("/contact", (req, res) => {
  res.send("<h1> CONTACT </h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
