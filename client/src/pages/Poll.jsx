import { useState, useEffect } from "react";
import axios from "axios";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* PLAYER IMAGES */

import pat from "../assets/Players/pat.png";
import klaasen from "../assets/Players/klaasen.png";
import abhishek from "../assets/Players/abhishek.png";
import travis from "../assets/Players/travis.png";

function Poll() {
  const [votes, setVotes] = useState({});
  const [voted, setVoted] = useState(false);
  const [isSunday, setIsSunday] = useState(false);
  const [winner, setWinner] = useState(null);
  const userEmail = localStorage.getItem("user");

  useEffect(() => {
    const fetchPoll = async () => {
      try {
        const response = await axios.get("/api/poll");
        setVotes(response.data.votes || {});
        setIsSunday(response.data.isSunday);
        setWinner(response.data.winner);
      } catch (error) {
        console.error("Error fetching poll:", error);
      }
    };
    fetchPoll();
  }, []);

  const players = [
    {
      name: "Pat Cummins",
      image: pat,
    },

    {
      name: "Heinrich Klaasen",
      image: klaasen,
    },

    {
      name: "Abhishek Sharma",
      image: abhishek,
    },

    {
      name: "Travis Head",
      image: travis,
    },
  ];

  const handleVote = async (playerName) => {
    if (!userEmail) {
      alert("Please login first to vote");
      window.location.href = "/login";
      return;
    }

    try {
      const response = await axios.post("/api/poll/vote", {
        email: userEmail,
        playerName,
      });

      setVotes(response.data.votes);
      setVoted(true);
      alert(response.data.message);
    } catch (error) {
      if (error.response && error.response.status === 403) {
        alert(error.response.data.error || "You have already voted this week");
        setVoted(true);
      } else {
        console.error("Vote Error:", error);
        alert("Failed to submit vote");
      }
    }
  };

  const winnerPlayer = winner ? players.find((p) => p.name === winner) : null;
  return (
    <div
      style={{
        background: "#000",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <Navbar />

      {/* TITLE */}

      <div
        style={{
          textAlign: "center",
          paddingTop: "50px",
        }}
      >
        <h1
          style={{
            color: "#ff6600",
            fontSize: "80px",
            fontWeight: "bold",
          }}
        >
          SRH Fan Poll
        </h1>

        <p
          style={{
            color: "#ffcc99",
            fontSize: "28px",
            marginTop: "10px",
          }}
        >
          Vote for your favorite SRH player
        </p>
      </div>

      {/* PLAYER GRID OR WINNER */}

      {isSunday ? (
        <div style={{ textAlign: "center", padding: "50px 20px" }}>
          <h2 style={{ color: "#ffcc99", fontSize: "45px", marginBottom: "30px" }}>
            This Week's Fan Favorite!
          </h2>
          {winnerPlayer ? (
            <div
              style={{
                background: "linear-gradient(to bottom, #1a0000, #000)",
                borderRadius: "30px",
                border: "4px solid #ff6600",
                display: "inline-block",
                padding: "40px",
                boxShadow: "0 0 50px rgba(255,102,0,0.8)",
                animation: "fadeIn 1s ease",
              }}
            >
              <img
                src={winnerPlayer.image}
                alt={winnerPlayer.name}
                style={{
                  width: "300px",
                  height: "300px",
                  objectFit: "contain",
                  filter: "drop-shadow(0 0 20px rgba(255,102,0,0.5))",
                }}
              />
              <h2 style={{ fontSize: "50px", color: "white", marginTop: "20px" }}>
                {winnerPlayer.name}
              </h2>
              <p style={{ color: "#ffb366", fontSize: "28px", marginTop: "10px" }}>
                Winner of the Week
              </p>
            </div>
          ) : (
            <p style={{ fontSize: "30px" }}>No votes were cast this week!</p>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "40px",
            padding: "70px 40px",
          }}
        >
          {players.map((player, index) => (
            <div
              key={index}
              className="player-card float-card fade-in"
              style={{
                background: "linear-gradient(to bottom, #1a0000, #000)",
                borderRadius: "25px",
                padding: "25px",
                textAlign: "center",
                border: "2px solid #ff6600",
                boxShadow: "0 0 25px rgba(255,102,0,0.6)",
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
                  fontSize: "34px",
                }}
              >
                {player.name}
              </h2>

              <p
                style={{
                  marginTop: "15px",
                  fontSize: "24px",
                  color: "#ffcc99",
                }}
              >
                Votes: {votes[player.name] || 0}
              </p>

              <button
                onClick={() => handleVote(player.name)}
                disabled={voted}
                style={{
                  marginTop: "20px",
                  padding: "14px 35px",
                  background: voted ? "gray" : "#ff6600",
                  border: "none",
                  borderRadius: "40px",
                  color: "white",
                  fontSize: "20px",
                  cursor: voted ? "not-allowed" : "pointer",
                  fontWeight: "bold",
                }}
              >
                {voted ? "Voted" : "Vote"}
              </button>
            </div>
          ))}
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Poll;