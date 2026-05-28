import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar({ transparent = false }) {
  const [showWelcome, setShowWelcome] = useState(false);
  const user = localStorage.getItem("user");

  useEffect(() => {
    const welcomeShown = sessionStorage.getItem("welcomeShown");
    if (user && !welcomeShown) {
      setShowWelcome(true);
      sessionStorage.setItem("welcomeShown", "true");
      setTimeout(() => {
        setShowWelcome(false);
      }, 5000);
    }
  }, [user]);

  const linkStyle = {
    color: "white",

    textDecoration: "none",

    fontSize: "22px",

    fontWeight: "bold",

    transition: "0.3s",
  };

  return (
    <div
      style={{
        background: transparent ? "transparent" : "#000",
        padding: "20px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: transparent ? "none" : "2px solid #ff6600",
        boxShadow: transparent ? "none" : "0 5px 25px rgba(255,102,0,0.3)",
        position: transparent ? "absolute" : "sticky",
        top: "0",
        left: "0",
        width: "100%",
        boxSizing: "border-box", // Prevents padding from making it wider than 100%
        zIndex: "1000",
      }}
    >
      {/* LEFT LOGO */}

      <div
        style={{
          display: "flex",

          alignItems: "center",

          gap: "15px",
        }}
      >
        <img
          src={logo}
          alt="SRH Logo"
          style={{
            width: "50px",
            height: "50px",
            objectFit: "contain",

            filter:
              "drop-shadow(0 0 15px rgba(255,102,0,0.8))",
          }}
        />

        <h1
          style={{
            color: "#ff6600",

            fontSize: "40px",

            fontWeight: "bold",

            textShadow:
              "0 0 20px rgba(255,102,0,0.8)",
          }}
        >
          SRH
        </h1>
      </div>

      {/* WELCOME MESSAGE */}
      {showWelcome && user && (
        <div
          style={{
            color: "#ffcc99",
            fontSize: "24px",
            fontWeight: "bold",
            animation: "fadeInOut 5s forwards",
            textAlign: "center",
          }}
        >
          Welcome, {user.split('@')[0]}!
        </div>
      )}

      {/* NAV LINKS */}

      <div
        style={{
          display: "flex",

          gap: "40px",
        }}
      >
        <Link className="nav-link" style={linkStyle} to="/">
          Home
        </Link>

        <Link className="nav-link" style={linkStyle} to="/squad">
          Squad
        </Link>

        <Link className="nav-link" style={linkStyle} to="/stats">
          Stats
        </Link>

        <Link className="nav-link" style={linkStyle} to="/schedule">
          Schedule
        </Link>

        <Link className="nav-link" style={linkStyle} to="/news">
          News
        </Link>

        <Link className="nav-link" style={linkStyle} to="/poll">
          Poll
        </Link>

        {localStorage.getItem("user") && (
          <span 
            className="nav-link" 
            style={{ ...linkStyle, cursor: "pointer", color: "#ff4d4d" }} 
            onClick={() => {
              localStorage.removeItem("user");
              sessionStorage.removeItem("welcomeShown");
              window.location.href = "/login";
            }}
          >
            Logout
          </span>
        )}
      </div>

      {/* HOVER EFFECT */}

      <style>
        {`
          .nav-link:hover {
            color: #ff6600;

            text-shadow:
              0 0 15px #ff6600;
          }

          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(-15px); }
            10% { opacity: 1; transform: translateY(0); }
            90% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;