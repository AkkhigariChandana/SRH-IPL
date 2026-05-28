import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import loginBg from "../assets/login-bg-new.jpg";

function Login() {
  const [view, setView] = useState("login"); // login, signup, forgot, otp, reset
  const [isFlipped, setIsFlipped] = useState(false);

  // Form Fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [city, setCity] = useState("");
  const [otp, setOtp] = useState("");

  const handleFlip = (newView) => {
    setIsFlipped(true);
    setTimeout(() => {
      setView(newView);
      setIsFlipped(false);
    }, 400); // Wait for half the flip animation before changing content
  };

  const handleLogin = async () => {
    if (!email || !password) return alert("Fill all fields");
    try {
      const response = await axios.post("/api/auth/login", { email, password });
      if (response.data) {
        alert("Login Successful");
        localStorage.setItem("user", email);
        window.location.href = "/";
      }
    } catch (error) {
      alert(error.response?.data?.error || "Error logging in");
    }
  };

  const handleSignup = async () => {
    if (!name || !email || !password) return alert("Name, email and password required");
    try {
      await axios.post("/api/auth/signup", { name, email, mobile, city, password });
      alert("Signup successful! Please login.");
      handleFlip("login");
    } catch (error) {
      alert(error.response?.data?.error || "Error signing up");
    }
  };

  const handleForgot = async () => {
    if (!email) return alert("Please enter your email");
    try {
      await axios.post("/api/auth/forgot-password", { email });
      alert("OTP sent to your email!");
      handleFlip("otp");
    } catch (error) {
      alert(error.response?.data?.error || "Error sending OTP");
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) return alert("Enter OTP");
    try {
      await axios.post("/api/auth/verify-otp", { email, otp });
      handleFlip("reset");
    } catch (error) {
      alert(error.response?.data?.error || "Invalid OTP");
    }
  };

  const handleReset = async () => {
    if (!password) return alert("Enter new password");
    try {
      await axios.post("/api/auth/reset-password", { email, otp, newPassword: password });
      alert("Password reset successful! Please login.");
      handleFlip("login");
    } catch (error) {
      alert(error.response?.data?.error || "Error resetting password");
    }
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        backgroundColor: "#000",
        color: "white",
        overflowX: "hidden",
      }}
    >
      {/* FULL SCREEN BACKGROUND IMAGE */}
      <div
        style={{
          position: "absolute",
          top: 38,
          left: 0,
          width: "100%",
          height: "110%",
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: 0,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <Navbar transparent={true} />

        <div style={{ perspective: "1000px", width: "100%", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "100%",
              maxWidth: "500px", 
              padding: "40px", 
              background: "transparent", 
              borderRadius: "0",
              border: "none", 
              boxShadow: "none",
              transition: "transform 0.8s",
              transformStyle: "preserve-3d",
              transform: isFlipped ? "rotateY(90deg)" : "rotateY(0deg)",
            }}
          >
            {/* LOGIN VIEW */}
            {view === "login" && (
              <div>
                <h1 style={titleStyle}>Login</h1>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                
                <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px" }}>
                  <span style={linkStyle} onClick={() => handleFlip("forgot")}>Forgot Password?</span>
                </div>

                <button onClick={handleLogin} style={buttonStyle}>Login</button>
                
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <span style={linkStyle} onClick={() => handleFlip("signup")}>Don't have an account? Sign Up</span>
                </div>
              </div>
            )}

            {/* SIGNUP VIEW */}
            {view === "signup" && (
              <div>
                <h1 style={titleStyle}>Sign Up</h1>
                <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
                <input type="email" placeholder="Email (Gmail)" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                <input type="text" placeholder="Mobile Number" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} />
                <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} style={inputStyle} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                
                <button onClick={handleSignup} style={buttonStyle}>Sign Up</button>
                
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <span style={linkStyle} onClick={() => handleFlip("login")}>Already have an account? Login</span>
                </div>
              </div>
            )}

            {/* FORGOT PASSWORD VIEW */}
            {view === "forgot" && (
              <div>
                <h1 style={titleStyle}>Recover Password</h1>
                <p style={{textAlign: "center", color: "#ccc"}}>Enter your registered email to receive an OTP</p>
                <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                
                <button onClick={handleForgot} style={buttonStyle}>Send OTP</button>
                
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                  <span style={linkStyle} onClick={() => handleFlip("login")}>Back to Login</span>
                </div>
              </div>
            )}

            {/* OTP VERIFICATION VIEW */}
            {view === "otp" && (
              <div>
                <h1 style={titleStyle}>Verify OTP</h1>
                <p style={{textAlign: "center", color: "#ccc"}}>Enter the 6-digit code sent to your email</p>
                <input type="text" placeholder="Enter OTP" value={otp} onChange={(e) => setOtp(e.target.value)} style={inputStyle} />
                
                <button onClick={handleVerifyOtp} style={buttonStyle}>Verify Code</button>
              </div>
            )}

            {/* RESET PASSWORD VIEW */}
            {view === "reset" && (
              <div>
                <h1 style={titleStyle}>New Password</h1>
                <input type="password" placeholder="Enter New Password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                
                <button onClick={handleReset} style={buttonStyle}>Reset & Login</button>
              </div>
            )}
            
          </div>
        </div>
      </div>
    </div>
  );
}

const titleStyle = {
  textAlign: "center",
  color: "#ff6600",
  fontSize: "45px",
  marginBottom: "20px"
};

const inputStyle = {
  width: "100%",
  padding: "16px",
  marginTop: "15px",
  borderRadius: "15px",
  border: "none",
  fontSize: "18px",
  boxSizing: "border-box"
};

const buttonStyle = {
  width: "100%",
  padding: "16px",
  marginTop: "25px",
  border: "none",
  borderRadius: "15px",
  background: "#ff6600",
  color: "white",
  fontSize: "22px",
  fontWeight: "bold",
  cursor: "pointer",
};

const linkStyle = {
  color: "#ffcc99",
  cursor: "pointer",
  textDecoration: "underline",
  fontSize: "16px"
};

export default Login;