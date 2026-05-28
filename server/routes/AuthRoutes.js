const express = require("express");
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const User = require("../models/User");

const router = express.Router();

// Helper to send email
const sendOTPEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "SRH Fan Club - Password Reset OTP",
    html: `<div style="font-family: Arial; padding: 20px; text-align: center; border: 2px solid #ff6600; border-radius: 10px; background: #fff4e6;">
      <h2 style="color: #ff6600;">Password Reset Request</h2>
      <p style="font-size: 16px;">You requested a password reset. Your 6-digit OTP code is:</p>
      <h1 style="font-size: 40px; letter-spacing: 5px; color: #cc5200;">${otp}</h1>
      <p style="font-size: 14px; color: #666;">This code is valid for 10 minutes.</p>
    </div>`,
  };

  await transporter.sendMail(mailOptions);
};

// 1. SIGNUP
router.post("/signup", async (req, res) => {
  try {
    const { name, email, mobile, city, password } = req.body;
    
    if (!email || !password || !name) {
      return res.status(400).json({ error: "Name, email, and password are required" });
    }

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already registered" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user = new User({
      name,
      email,
      mobile,
      city,
      password: hashedPassword,
    });

    await user.save();
    res.json({ message: "Signup successful", user: { email: user.email, name: user.name } });
  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// 2. LOGIN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Check if user has a password (they might have been created before this feature)
    if (!user.password) {
       return res.status(400).json({ error: "Please reset your password first (legacy account)." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    res.json({ message: "Login successful", user: { email: user.email, name: user.name } });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// 3. FORGOT PASSWORD (Send OTP)
router.post("/forgot-password", async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    
    user.resetOtp = otp;
    user.resetOtpExpires = Date.now() + 10 * 60 * 1000; // 10 minutes
    await user.save();

    // Only send email if ENV vars are set
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      await sendOTPEmail(user.email, otp);
      res.json({ message: "OTP sent to your email" });
    } else {
      console.warn("EMAIL_USER or EMAIL_PASS not set. Showing OTP in console for dev:", otp);
      res.json({ message: "OTP sent to your email (dev mode check console)" });
    }

  } catch (error) {
    console.error("Forgot Password Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// 4. VERIFY OTP
router.post("/verify-otp", async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await User.findOne({ email, resetOtp: otp });

    if (!user || user.resetOtpExpires < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired OTP" });
    }

    res.json({ message: "OTP verified" });
  } catch (error) {
    console.error("Verify OTP Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// 5. RESET PASSWORD
router.post("/reset-password", async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    
    const user = await User.findOne({ email, resetOtp: otp });
    if (!user || user.resetOtpExpires < Date.now()) {
      return res.status(400).json({ error: "Invalid or expired session" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);
    
    // Clear OTP
    user.resetOtp = undefined;
    user.resetOtpExpires = undefined;
    
    await user.save();

    res.json({ message: "Password reset successful" });
  } catch (error) {
    console.error("Reset Password Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
