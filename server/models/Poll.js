const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
  weekIdentifier: {
    type: String,
    required: true,
    unique: true, // format like "2023-W42"
  },
  votes: {
    type: Map,
    of: Number,
    default: {
      "Pat Cummins": 0,
      "Heinrich Klaasen": 0,
      "Abhishek Sharma": 0,
      "Travis Head": 0,
    },
  },
  winner: {
    type: String,
    default: null,
  }
});

module.exports = mongoose.model("Poll", PollSchema);
