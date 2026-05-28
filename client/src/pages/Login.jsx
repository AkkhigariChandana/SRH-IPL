import { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import loginBg from "../assets/login-bg.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const handleSubmit = async () => {
  /* EMAIL VALIDATION */

  const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("Enter valid email format");

    return;
  }

  /* PASSWORD CHECK */

  if (password.length < 6) {
    alert(
      "Password must contain minimum 6 characters"
    );

    return;
  }

  try {
    const response = await axios.post("/api/auth/login", { email });
    
    if (response.data) {
      alert("Login Successful");
      localStorage.setItem("user", email);
      window.location.href = "/";
    }
  } catch (error) {
    console.error("Login failed:", error);
    alert("Error logging in. Please try again.");
  }
};
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        color: "white",
        backgroundColor: "#000",
      }}
    >
      {/* BACKGROUND IMAGE OVERLAY */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${loginBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.35,
          zIndex: 0,
        }}
      ></div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />

        <div
          style={{
            maxWidth: "500px",
            margin: "100px auto",
            padding: "40px",
            background:
              "linear-gradient(to bottom, rgba(26,0,0,0.85), rgba(0,0,0,0.95))",
            borderRadius: "25px",
            border: "2px solid #ff6600",
            boxShadow: "0 0 40px rgba(255,102,0,0.5)",
            backdropFilter: "blur(5px)",
          }}
        >
        <h1
          style={{
            textAlign: "center",
            color: "#ff6600",
            fontSize: "55px",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
        />

        <button
          onClick={handleSubmit}
          style={buttonStyle}
        >
          Login
        </button>
      </div>
      </div>
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px",
  marginTop: "25px",
  borderRadius: "15px",
  border: "none",
  fontSize: "18px",
};

const buttonStyle = {
  width: "100%",
  padding: "18px",
  marginTop: "30px",
  border: "none",
  borderRadius: "15px",
  background: "#ff6600",
  color: "white",
  fontSize: "22px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;