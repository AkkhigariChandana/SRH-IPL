const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });
const mongoose = require("mongoose");

const app = express();

const playerRoutes = require("./routes/PlayerRoutes");
const authRoutes = require("./routes/AuthRoutes");
const pollRoutes = require("./routes/PollRoutes");

app.use(cors());

app.use(express.json());

app.use("/api/players", playerRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/poll", pollRoutes);

// ---------- Serve React build (production) ----------
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

// ---------- MongoDB Connection ----------
const MONGO_URI = process.env.MONGO_URI;

if (MONGO_URI) {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
} else {
  console.warn("MONGO_URI not set – skipping database connection");
}

// ---------- Start Server ----------
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});