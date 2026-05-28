import { useState } from "react";
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
  const [selectedPlayer, setSelectedPlayer] = useState(null);

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
            fontSize: "var(--hero-title)",
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
            fontSize: "var(--hero-subtitle)",
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
          gridTemplateColumns: "var(--grid-columns)",
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
              width: "var(--card-width)",
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
              onClick={() => setSelectedPlayer(player)}
              style={{
                width: "220px",
                height: "220px",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
                cursor: "pointer",
              }}
            />

            <h2
              style={{
                marginTop: "20px",
                fontSize: "var(--nav-title)",
                lineHeight: "1.2",
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

      {selectedPlayer && (
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
            zIndex: 2000,
          }}
          onClick={() => setSelectedPlayer(null)}
        >
          <div
            style={{
              width: "var(--login-box-width)",
              background: "linear-gradient(to bottom, #1a0000, #000)",
              border: "2px solid #ff6600",
              borderRadius: "20px",
              padding: "40px",
              textAlign: "center",
              boxShadow: "0 0 30px rgba(255,102,0,0.8)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPlayer(null)}
              style={{
                position: "absolute",
                top: "15px",
                right: "20px",
                background: "transparent",
                color: "#ff6600",
                fontSize: "35px",
                border: "none",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <img
              src={selectedPlayer.image}
              alt={selectedPlayer.name}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "contain",
              }}
            />
            <h2 style={{ color: "#ff6600", fontSize: "45px", marginTop: "20px" }}>
              {selectedPlayer.name}
            </h2>
            <p style={{ color: "#ffb366", fontSize: "28px", marginTop: "10px" }}>
              {selectedPlayer.role}
            </p>
            <p style={{ color: "white", fontSize: "20px", marginTop: "25px", lineHeight: "1.5" }}>
              {selectedPlayer.name} is a vital part of the Sunrisers Hyderabad squad. 
              Known for incredible performances and dedication, this {selectedPlayer.role.toLowerCase()} 
              brings massive value to the Orange Army!
            </p>
          </div>
        </div>
      )}

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