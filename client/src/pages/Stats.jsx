import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Stats() {
  const stats = [
    {
      title: "IPL Titles",
      value: "1",
      color:
        "linear-gradient(135deg,#ff6a00,#ff3d3d)",
    },

    {
      title: "Captain",
      value: "Pat Cummins",
      color:
        "linear-gradient(135deg,#f7b500,#ff7b00)",
    },

    {
      title: "Coach",
      value: "Daniel Vettori",
      color:
        "linear-gradient(135deg,#2f80ed,#1cb5e0)",
    },

    {
      title: "Founded",
      value: "2012",
      color:
        "linear-gradient(135deg,#a044ff,#ff4ecd)",
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
          paddingTop: "40px",
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
          Team Stats
        </h1>

        <p
          style={{
            color: "#ffb366",
            fontSize: "30px",
            marginTop: "10px",
          }}
        >
          Sunrisers Hyderabad Overview
        </p>
      </div>

      {/* STATS GRID */}

      <div
        style={{
          display: "grid",

          gridTemplateColumns:
            "repeat(auto-fit, minmax(280px, 1fr))",

          gap: "40px",

          padding: "70px 40px",

          maxWidth: "1400px",

          margin: "0 auto",
        }}
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="stats-card"
            style={{
              background: item.color,

              borderRadius: "35px",

              padding: "40px",

              minHeight: "320px",

              display: "flex",

              flexDirection: "column",

              justifyContent: "center",

              overflow: "hidden",

              cursor: "pointer",

              transition: "0.4s",

              animation:
                "floatAnimation 3s ease-in-out infinite",

              boxShadow:
                "0 0 40px rgba(255,255,255,0.2)",
            }}
          >
            {/* TITLE */}

            <h2
              style={{
                fontSize: "40px",

                marginBottom: "30px",

                lineHeight: "50px",
              }}
            >
              {item.title}
            </h2>

            {/* VALUE */}

            <h1
              style={{
                fontSize: "48px",

                fontWeight: "bold",

                wordBreak: "break-word",

                lineHeight: "60px",
              }}
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>

      {/* ANIMATIONS */}

      <style>
        {`
          .stats-card:hover {
            transform: translateY(-15px) scale(1.04);

            box-shadow:
              0 0 50px rgba(255,255,255,0.5);
          }

          @keyframes floatAnimation {
            0% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-10px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      </style>

      <Footer />
    </div>
  );
}

export default Stats;