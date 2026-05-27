const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  const players = [
    {
      name: "Pat Cummins",
      role: "Captain • Bowler",
    },

    {
      name: "Abhishek Sharma",
      role: "All-Rounder",
    },

    {
      name: "Heinrich Klaasen",
      role: "WK Batter",
    },

    {
      name: "Travis Head",
      role: "Batter",
    },

    {
      name: "Nitish Kumar",
      role: "Middle Order Batter",
    },

    {
      name: "Harshal Patel",
      role: "Bowler",
    },

    {
      name: "Kamindu Mendis",
      role: "All-Rounder",
    },

    {
      name: "Jaydev Unadkat",
      role: "Bowler",
    },

    {
      name: "Eshan Malinga",
      role: "Bowler",
    },

    {
      name: "Aniket Verma",
      role: "Batter",
    },

    {
      name: "Ishan Kishan",
      role: "WK Batter",
    },

    {
      name: "Harsh Dubey",
      role: "All-Rounder",
    },

    {
      name: "Shivang",
      role: "Bowler",
    },

    {
      name: "Salil",
      role: "Bowler",
    },
  ];

  res.json(players);
});

module.exports = router;