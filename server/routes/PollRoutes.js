const express = require("express");
const Poll = require("../models/Poll");
const User = require("../models/User");
const { getWeekIdentifier } = require("../utils/dateHelpers");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const weekId = getWeekIdentifier();
    let poll = await Poll.findOne({ weekIdentifier: weekId });

    if (!poll) {
      poll = new Poll({ weekIdentifier: weekId });
      await poll.save();
    }

    // Check if today is Sunday (day 0)
    const isSunday = new Date().getDay() === 0;
    
    if (isSunday) {
      // If it's Sunday and no winner is declared yet, find the winner
      if (!poll.winner) {
        let maxVotes = -1;
        let winnerName = null;
        for (const [player, votes] of poll.votes.entries()) {
          if (votes > maxVotes) {
            maxVotes = votes;
            winnerName = player;
          }
        }
        poll.winner = winnerName;
        await poll.save();
      }
    }

    res.json({
      weekId,
      votes: Object.fromEntries(poll.votes),
      winner: poll.winner,
      isSunday
    });
  } catch (error) {
    console.error("Poll GET Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/vote", async (req, res) => {
  try {
    const { email, playerName } = req.body;
    if (!email || !playerName) {
      return res.status(400).json({ error: "Email and playerName required" });
    }

    // Don't allow voting on Sunday
    if (new Date().getDay() === 0) {
      return res.status(403).json({ error: "Voting is closed on Sundays" });
    }

    const weekId = getWeekIdentifier();

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    if (user.lastVotedWeek === weekId) {
      return res.status(403).json({ error: "You have already voted this week" });
    }

    let poll = await Poll.findOne({ weekIdentifier: weekId });
    if (!poll) {
      poll = new Poll({ weekIdentifier: weekId });
    }

    if (poll.votes.has(playerName)) {
      poll.votes.set(playerName, poll.votes.get(playerName) + 1);
    } else {
      poll.votes.set(playerName, 1);
    }

    await poll.save();

    user.lastVotedWeek = weekId;
    await user.save();

    res.json({ message: "Vote submitted successfully", votes: Object.fromEntries(poll.votes) });
  } catch (error) {
    console.error("Poll POST Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
