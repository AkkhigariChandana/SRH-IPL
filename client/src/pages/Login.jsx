import { useState } from "react";
import Navbar from "../components/Navbar";

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

  alert("Login Successful");

  localStorage.setItem("user", email);

  window.location.href = "/";
};
  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      <div
        style={{
          maxWidth: "500px",
          margin: "100px auto",
          padding: "40px",
          background:
            "linear-gradient(to bottom, #1a0000, #000)",
          borderRadius: "25px",
          border: "2px solid #ff6600",
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
          onClick={handleLogin}
          style={buttonStyle}
        >
          Login
        </button>
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