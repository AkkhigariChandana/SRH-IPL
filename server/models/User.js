const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: { type: String },
  mobile: { type: String },
  password: { type: String },
  city: { type: String },
  resetOtp: { type: String },
  resetOtpExpires: { type: Date },
  lastVotedWeek: {
    type: String,
    default: null, // format like "2023-W42"
  },
});

module.exports = mongoose.model("User", UserSchema);
