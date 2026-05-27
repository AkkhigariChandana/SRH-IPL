const express = require("express");
const cors = require("cors");

const app = express();

const playerRoutes = require("./routes/playerRoutes");

app.use(cors());

app.use(express.json());

app.use("/api/players", playerRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});