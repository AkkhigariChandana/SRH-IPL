import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Schedule() {
  const matches = [
  
  {
    team1: "SRH",
    team2: "MI",
    venue: "Wankhede Stadium, Mumbai",
    date: "2 June 2026",
    time: "7:30 PM",
    type: "Night Match",
  },

  {
    team1: "SRH",
    team2: "RCB",
    venue: "Chinnaswamy Stadium, Bengaluru",
    date: "6 June 2026",
    time: "3:30 PM",
    type: "Weekend Clash",
  },

  {
    team1: "SRH",
    team2: "KKR",
    venue: "Eden Gardens, Kolkata",
    date: "10 June 2026",
    time: "7:30 PM",
    type: "IPL League Match",
  },

  {
    team1: "SRH",
    team2: "GT",
    venue: "Narendra Modi Stadium, Ahmedabad",
    date: "14 June 2026",
    time: "7:30 PM",
    type: "Qualifier Match",
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

      {/* TITLE */}

      <div
        style={{
          textAlign: "center",
          paddingTop: "60px",
        }}
      >
        <h1
          style={{
            color: "#ff6600",
            fontSize: "80px",
            fontWeight: "bold",
          }}
        >
          SRH Match Schedule
        </h1>

        <p
          style={{
            color: "#ffcc99",
            fontSize: "28px",
            marginTop: "15px",
          }}
        >
          Upcoming Fixtures & Match Details
        </p>
      </div>

      {/* MATCH GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "40px",
          padding: "70px 40px",
        }}
      >
        {matches.map((match, index) => (
          <div
            key={index}
            className="player-card float-card fade-in"
            style={{
              background:
                "linear-gradient(to bottom, #1a0000, #000)",
              borderRadius: "30px",
              padding: "35px",
              border: "2px solid #ff6600",
              boxShadow:
                "0 0 25px rgba(255,102,0,0.6)",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                color: "#ff6600",
                fontSize: "50px",
              }}
            >
              {match.team1}
            </h1>

            <h2
              style={{
                margin: "20px 0",
                fontSize: "35px",
              }}
            >
              VS
            </h2>

            <h1
              style={{
                color: "#ff6600",
                fontSize: "50px",
              }}
            >
              {match.team2}
            </h1>

            <p
              style={{
                marginTop: "30px",
                fontSize: "24px",
                color: "#ffcc99",
              }}
            >
              📍 {match.venue}
            </p>

            <p
              style={{
                marginTop: "15px",
                fontSize: "22px",
              }}
            >
              📅 {match.date}
            </p>

            <p
              style={{
                marginTop: "10px",
                fontSize: "22px",
              }}
            >
              🕒 {match.time}
            </p>

            <p
              style={{
                marginTop: "15px",
                fontSize: "20px",
                color: "#ffb366",
              }}
            >
              {match.type}
            </p>
          </div>
        ))}
      </div>

      {/* OFFICIAL BUTTON */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "100px",
        }}
      >
        <a
          href="https://www.iplt20.com/teams/sunrisers-hyderabad/schedule"
          target="_blank"
          rel="noreferrer"
          style={{
            padding: "18px 45px",
            background: "#ff6600",
            color: "white",
            textDecoration: "none",
            borderRadius: "45px",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          View Official IPL Schedule
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default Schedule;