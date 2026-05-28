import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* PLAYER IMAGES */

import pat from "../assets/Players/pat.png";
import abhishek from "../assets/Players/abhishek.png";
import klaasen from "../assets/Players/klaasen.png";
import travis from "../assets/Players/travis.png";

import nitish from "../assets/Players/nitish.png";
import harshal from "../assets/Players/harshal.png";
import kamindu from "../assets/Players/kamindu.png";
import jaydev from "../assets/Players/jaydev.png";

import eshan from "../assets/Players/eshan.png";
import aniket from "../assets/Players/aniket.png";
import ishan from "../assets/Players/ishan.png";
import harsh from "../assets/Players/harsh.png";
import shivang from "../assets/Players/shivang.png";
import salil from "../assets/Players/salil.png";

function PlayerDetails() {
  const { name } = useParams();

  const players = {
    "Pat Cummins": {
      image: pat,
      role: "Captain • Bowler",
      dob: "8 May 1993",
      nationality: "Australia",
      batting: "Right-hand Bat",
      bowling: "Right-arm Fast",
      father: "Peter Cummins",
      mother: "Maria Cummins",
      marital: "Married",
      jersey: "30",
    },

    "Abhishek Sharma": {
      image: abhishek,
      role: "All-Rounder",
      dob: "4 September 2000",
      nationality: "India",
      batting: "Left-hand Bat",
      bowling: "Slow Left-arm Orthodox",
      father: "Raj Kumar Sharma",
      mother: "Manju Sharma",
      marital: "Unmarried",
      jersey: "4",
    },

    "Heinrich Klaasen": {
      image: klaasen,
      role: "WK Batter",
      dob: "30 July 1991",
      nationality: "South Africa",
      batting: "Right-hand Bat",
      bowling: "Wicket Keeper",
      father: "Unknown",
      mother: "Unknown",
      marital: "Married",
      jersey: "45",
    },

    "Travis Head": {
      image: travis,
      role: "Batter",
      dob: "29 December 1993",
      nationality: "Australia",
      batting: "Left-hand Bat",
      bowling: "Off Break",
      father: "Simon Head",
      mother: "Ann Head",
      marital: "Married",
      jersey: "62",
    },

    "Nitish Kumar": {
      image: nitish,
      role: "Middle Order Batter",
      dob: "26 May 2003",
      nationality: "India",
      batting: "Right-hand Bat",
      bowling: "Right-arm Medium",
      father: "Mutyala Reddy",
      mother: "Manjula",
      marital: "Unmarried",
      jersey: "8",
    },

    "Harshal Patel": {
      image: harshal,
      role: "Bowler",
      dob: "23 November 1990",
      nationality: "India",
      batting: "Right-hand Bat",
      bowling: "Right-arm Medium Fast",
      father: "Vikram Patel",
      mother: "Darshana Patel",
      marital: "Married",
      jersey: "36",
    },

    "Kamindu Mendis": {
      image: kamindu,
      role: "All-Rounder",
      dob: "30 September 1998",
      nationality: "Sri Lanka",
      batting: "Left-hand Bat",
      bowling: "Ambidextrous",
      father: "Unknown",
      mother: "Unknown",
      marital: "Unmarried",
      jersey: "55",
    },

    "Jaydev Unadkat": {
      image: jaydev,
      role: "Bowler",
      dob: "18 October 1991",
      nationality: "India",
      batting: "Left-hand Bat",
      bowling: "Left-arm Medium Fast",
      father: "Bharat Unadkat",
      mother: "Pinal Unadkat",
      marital: "Married",
      jersey: "91",
    },

    "Eshan Malinga": {
      image: eshan,
      role: "Bowler",
      dob: "4 February 2001",
      nationality: "Sri Lanka",
      batting: "Right-hand Bat",
      bowling: "Right-arm Fast",
      father: "Unknown",
      mother: "Unknown",
      marital: "Unmarried",
      jersey: "99",
    },

    "Aniket Verma": {
      image: aniket,
      role: "Batter",
      dob: "5 February 2002",
      nationality: "India",
      batting: "Right-hand Bat",
      bowling: "Off Spin",
      father: "Unknown",
      mother: "Unknown",
      marital: "Unmarried",
      jersey: "21",
    },

    "Ishan Kishan": {
      image: ishan,
      role: "WK Batter",
      dob: "18 July 1998",
      nationality: "India",
      batting: "Left-hand Bat",
      bowling: "Wicket Keeper",
      father: "Pranav Pandey",
      mother: "Suchitra Singh",
      marital: "Unmarried",
      jersey: "32",
    },

    "Harsh Dubey": {
      image: harsh,
      role: "All-Rounder",
      dob: "12 August 2002",
      nationality: "India",
      batting: "Left-hand Bat",
      bowling: "Slow Left-arm Orthodox",
      father: "Unknown",
      mother: "Unknown",
      marital: "Unmarried",
      jersey: "18",
    },

    "Shivang": {
      image: shivang,
      role: "Bowler",
      dob: "10 January 2003",
      nationality: "India",
      batting: "Right-hand Bat",
      bowling: "Right-arm Medium",
      father: "Unknown",
      mother: "Unknown",
      marital: "Unmarried",
      jersey: "77",
    },

    "Salil": {
      image: salil,
      role: "Bowler",
      dob: "15 March 2002",
      nationality: "India",
      batting: "Right-hand Bat",
      bowling: "Left-arm Medium",
      father: "Unknown",
      mother: "Unknown",
      marital: "Unmarried",
      jersey: "14",
    },
  };

  const player = players[name];

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
          maxWidth: "1100px",
          margin: "50px auto",
          padding: "40px",
          borderRadius: "30px",
          background:
            "linear-gradient(to bottom, #1a0000, #000)",
          border: "2px solid #ff6600",
          boxShadow:
            "0 0 25px rgba(255,102,0,0.6)",
        }}
      >
        {/* IMAGE */}

        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={player.image}
            alt={name}
            style={{
              width: "280px",
              height: "280px",
              objectFit: "contain",
            }}
          />

          <h1
            style={{
              fontSize: "60px",
              marginTop: "20px",
            }}
          >
            {name}
          </h1>

          <p
            style={{
              color: "#ffb366",
              fontSize: "30px",
            }}
          >
            {player.role}
          </p>
        </div>

        {/* DETAILS */}

        <div
          style={{
            marginTop: "50px",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px,1fr))",
            gap: "25px",
          }}
        >
          <Detail title="Date of Birth" value={player.dob} />

          <Detail
            title="Nationality"
            value={player.nationality}
          />

          <Detail
            title="Batting Style"
            value={player.batting}
          />

          <Detail
            title="Bowling Style"
            value={player.bowling}
          />

          <Detail
            title="Father"
            value={player.father}
          />

          <Detail
            title="Mother"
            value={player.mother}
          />

          <Detail
            title="Marital Status"
            value={player.marital}
          />

          <Detail
            title="Jersey Number"
            value={player.jersey}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}

function Detail({ title, value }) {
  return (
    <div
      style={{
        background: "#111",
        padding: "25px",
        borderRadius: "20px",
        border: "1px solid #ff6600",
      }}
    >
      <h2
        style={{
          color: "#ff6600",
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>

      <p
        style={{
          fontSize: "22px",
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default PlayerDetails;