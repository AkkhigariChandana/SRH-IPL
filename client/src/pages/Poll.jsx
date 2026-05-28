import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* PLAYER IMAGES */

import pat from "../assets/Players/pat.png";
import klaasen from "../assets/Players/klaasen.png";
import abhishek from "../assets/Players/abhishek.png";
import travis from "../assets/Players/travis.png";

function Poll() {
  const [votes, setVotes] = useState(() => {
  const savedVotes =
    localStorage.getItem("votes");

  return savedVotes
    ? JSON.parse(savedVotes)
    : {
        "Pat Cummins": 0,
        "Heinrich Klaasen": 1,
        "Abhishek Sharma": 0,
        "Travis Head": 0,
      };
});
  const [voted, setVoted] = useState(
    localStorage.getItem("voted") === "true"
  );

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

  const handleVote = (playerName) => {
  const alreadyVoted =
    localStorage.getItem("voted");

  if (alreadyVoted) {
    alert("You already voted");
    return;
  }

  const updatedVotes = {
    ...votes,
    [playerName]:
      votes[playerName] + 1,
  };

  setVotes(updatedVotes);

  localStorage.setItem(
    "votes",
    JSON.stringify(updatedVotes)
  );

  localStorage.setItem("voted", "true");

  setVoted(true);

  alert(`Vote submitted for ${playerName}`);
};
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

      {/* PLAYER GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "40px",
          padding: "70px 40px",
        }}
      >
        {players.map((player, index) => (
          <div
            key={index}
            className="player-card float-card fade-in"
            style={{
              background:
                "linear-gradient(to bottom, #1a0000, #000)",
              borderRadius: "25px",
              padding: "25px",
              textAlign: "center",
              border: "2px solid #ff6600",
              boxShadow:
                "0 0 25px rgba(255,102,0,0.6)",
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

            {/* VOTE COUNT */}

            <p
              style={{
                marginTop: "15px",
                fontSize: "24px",
                color: "#ffcc99",
              }}
            >
              Votes: {votes[player.name]}
            </p>

            {/* VOTE BUTTON */}

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
                cursor: voted
                  ? "not-allowed"
                  : "pointer",
                fontWeight: "bold",
              }}
            >
              {voted ? "Vote Submitted" : "Vote"}
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default Poll;