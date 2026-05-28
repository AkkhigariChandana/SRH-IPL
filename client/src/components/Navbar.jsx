import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
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
        background: "#000",

        padding: "20px 50px",

        display: "flex",

        justifyContent: "space-between",

        alignItems: "center",

        borderBottom: "2px solid #ff6600",

        boxShadow:
          "0 5px 25px rgba(255,102,0,0.3)",

        position: "sticky",

        top: "0",

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
      </div>

      {/* HOVER EFFECT */}

      <style>
        {`
          .nav-link:hover {
            color: #ff6600;

            text-shadow:
              0 0 15px #ff6600;
          }
        `}
      </style>
    </div>
  );
}

export default Navbar;