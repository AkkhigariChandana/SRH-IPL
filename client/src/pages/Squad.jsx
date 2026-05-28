import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import pat from "../assets/Players/pat.png";
import abhishek from "../assets/Players/abhishek.png";
import klaasen from "../assets/Players/klaasen.png";
import travis from "../assets/Players/travis.png";
import nitish from "../assets/Players/nitish.png";
import ishan from "../assets/Players/ishan.png";
import harshal from "../assets/Players/harshal.png";
import kamindu from "../assets/Players/kamindu.png";
import shivang from "../assets/Players/shivang.png";
import salil from "../assets/Players/salil.png";

function Squad() {
  const players = [
    {
      name: "Pat Cummins",
      role: "Captain • Bowler",
      image: pat,
    },

    {
      name: "Abhishek Sharma",
      role: "All-Rounder",
      image: abhishek,
    },

    {
      name: "Heinrich Klaasen",
      role: "WK Batter",
      image: klaasen,
    },

    {
      name: "Travis Head",
      role: "Batter",
      image: travis,
    },

    {
      name: "Nitish Kumar",
      role: "Middle Order Batter",
      image: nitish,
    },

    {
      name: "Ishan Kishan",
      role: "WK Batter",
      image: ishan,
    },

    {
      name: "Harshal Patel",
      role: "Bowler",
      image: harshal,
    },

    {
      name: "Kamindu Mendis",
      role: "All-Rounder",
      image: kamindu,
    },

    {
      name: "Shivang",
      role: "Bowler",
      image: shivang,
    },

    {
      name: "Salil",
      role: "Bowler",
      image: salil,
    },
  ];

  return (
    <div
      style={{
        background: "#000",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Navbar />

      {/* HEADING */}

      <div
        style={{
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <h1
          style={{
            color: "#ff6600",
            fontSize: "90px",
            fontWeight: "bold",
            textShadow:
              "0 0 25px rgba(255,102,0,0.8)",
          }}
        >
          SRH Squad
        </h1>

        <p
          style={{
            color: "#ffb366",
            fontSize: "35px",
            marginTop: "10px",
          }}
        >
          Meet The Orange Army
        </p>
      </div>

      {/* PLAYERS GRID */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",

          gap: "40px",

          padding: "70px 40px",

          justifyItems: "center",
        }}
      >
        {players.map((player, index) => (
          <div
            key={index}
            className="player-card"
            style={{
              background:
                "linear-gradient(to bottom,#1a0000,#000)",

              border: "2px solid #ff6600",

              borderRadius: "30px",

              padding: "30px",

              width: "280px",

              minHeight: "420px",

              textAlign: "center",

              transition: "0.4s",

              boxShadow:
                "0 0 25px rgba(255,102,0,0.5)",
            }}
          >
            <img
              src={player.image}
              alt={player.name}
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />

            <h2
              style={{
                marginTop: "20px",
                fontSize: "38px",
                lineHeight: "45px",
              }}
            >
              {player.name}
            </h2>

            <p
              style={{
                color: "#ffb366",
                fontSize: "24px",
                marginTop: "15px",
              }}
            >
              {player.role}
            </p>
          </div>
        ))}
      </div>

      <Footer />

      {/* HOVER EFFECT */}

      <style>
        {`
          .player-card:hover {
            transform: translateY(-15px) scale(1.03);

            box-shadow:
              0 0 40px rgba(255,102,0,0.9);
          }
        `}
      </style>
    </div>
  );
}

export default Squad;