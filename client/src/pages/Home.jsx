import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero from "../assets/hero.png";

import logo from "../assets/logo.png";

function Home() {
  const [showWinner, setShowWinner] = useState(false);
  const [winnerName, setWinnerName] = useState(null);

  useEffect(() => {
    const checkWinner = async () => {
      try {
        const response = await axios.get("/api/poll");
        if (response.data.isSunday && response.data.winner) {
          setWinnerName(response.data.winner);
          setShowWinner(true);
          setTimeout(() => setShowWinner(false), 6000);
        }
      } catch (err) {
        console.error("Failed to check poll winner", err);
      }
    };
    checkWinner();
  }, []);

  return (
    <div
      style={{
        background: "#000",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* HERO SECTION */}

      <div
        style={{
          height: "100vh",

          backgroundImage: `url(${hero})`,

          backgroundSize: "cover",

          backgroundPosition: "center",

          backgroundRepeat: "no-repeat",

          position: "relative",

          display: "flex",

          flexDirection: "column",

          justifyContent: "center",

          alignItems: "center",

          textAlign: "center",
        }}
      >
        {/* DARK OVERLAY */}

        <div
          style={{
            position: "absolute",

            top: 0,

            left: 0,

            width: "100%",

            height: "100%",

            background:
              "rgba(0,0,0,0.45)",
          }}
        ></div>

       
        {/* HERO CONTENT */}

        <div
          style={{
            position: "relative",

            zIndex: 2,

            animation:
              "floatHero 3s ease-in-out infinite",
          }}
        >
          <h1
            style={{
              fontSize: "var(--hero-title)",
              fontWeight: "bold",
              lineHeight: "var(--hero-line-height)",
              textShadow:
                "0 0 25px rgba(255,255,255,0.5)",
            }}
          >
            <span style={{ color: "white" }}>
              SUNRISERS
            </span>

            <br />

            <span
              style={{
                color: "#ff6600",

                textShadow:
                  "0 0 30px rgba(255,102,0,0.9)",
              }}
            >
              HYDERABAD
            </span>
          </h1>

          <p
            style={{
              fontSize: "var(--hero-subtitle)",
              marginTop: "25px",
              color: "#ffe0b3",

              textShadow:
                "0 0 10px rgba(255,255,255,0.3)",
            }}
          >
            Rise Orange. Rule The IPL.
          </p>

          {/* BUTTON */}

          <Link to="/squad">
            <button
              style={{
                marginTop: "45px",
                padding: "var(--button-padding)",
                fontSize: "var(--button-font)",
                border: "none",

                borderRadius: "50px",

                background:
                  "linear-gradient(to right,#ff6600,#ff9900)",

                color: "white",

                cursor: "pointer",

                fontWeight: "bold",

                transition: "0.4s",

                boxShadow:
                  "0 0 30px rgba(255,102,0,0.8)",
              }}
            >
              Explore Squad
            </button>
          </Link>
        </div>
      </div>

      <Footer />

      {/* WINNER POPUP (SUNDAY ONLY) */}
      {showWinner && winnerName && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.85)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 3000,
            animation: "fadeInOutPopup 6s forwards",
          }}
        >
          <div
            style={{
              background: "linear-gradient(to bottom, #1a0000, #000)",
              borderRadius: "30px",
              padding: "50px",
              textAlign: "center",
              border: "4px solid #ff6600",
              boxShadow: "0 0 50px rgba(255,102,0,0.9)",
            }}
          >
            <h2 style={{ color: "#ffcc99", fontSize: "40px", marginBottom: "20px" }}>
              Sunday Poll Winner!
            </h2>
            <h1 style={{ color: "white", fontSize: "60px", textShadow: "0 0 20px #ff6600" }}>
              {winnerName}
            </h1>
          </div>
        </div>
      )}

      {/* ANIMATIONS */}

      <style>
        {`
          button:hover {
            transform: scale(1.08);

            box-shadow:
              0 0 40px rgba(255,102,0,1);
          }

          @keyframes floatHero {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-12px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          @keyframes fadeInOutPopup {
            0% { opacity: 0; transform: scale(0.8); }
            10% { opacity: 1; transform: scale(1); }
            90% { opacity: 1; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.8); }
          }
        `}
      </style>
    </div>
  );
}

export default Home;