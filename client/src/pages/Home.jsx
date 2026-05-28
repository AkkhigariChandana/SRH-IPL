import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero from "../assets/hero.png";

import logo from "../assets/logo.png";

function Home() {
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
              fontSize: "120px",

              fontWeight: "bold",

              lineHeight: "120px",

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
              fontSize: "38px",

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

                padding: "20px 55px",

                fontSize: "28px",

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
        `}
      </style>
    </div>
  );
}

export default Home;