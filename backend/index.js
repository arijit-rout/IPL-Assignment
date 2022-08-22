require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const dbConnection = require("./db");
const matchRoute = require("./routes/matches.route");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

dbConnection
  .sync()
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));
app.use("/api/matches", matchRoute);
app.get("/sum", (req, res) => {
  res.send("5 + 3");
});
// server
app.listen(5000, () => {
  console.log("server running");
});
