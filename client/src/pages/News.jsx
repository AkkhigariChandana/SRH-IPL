import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* NEWS IMAGES */

import pat from "../assets/Players/pat.png";
import klaasen from "../assets/Players/klaasen.png";
import hero from "../assets/hero.png";

function News() {
  const newsData = [
    {
      title:
        "Pat Cummins leads SRH bowling attack brilliantly",
      image: pat,
      link:
        "https://www.espncricinfo.com/cricketers/pat-cummins-489889/news",
    },

    {
      title:
        "Heinrich Klaasen climbs Orange Cap rankings",
      image: klaasen,
      link:
        "https://www.espncricinfo.com/cricketers/heinrich-klaasen-436757/news",
    },

    {
      title:
        "SRH wins thrilling IPL clash with explosive batting display",
      image: hero,
      link:
        "https://www.iplt20.com/video/highlights",
    },
  ];

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
            fontSize: "var(--hero-title)",
            fontWeight: "bold",
          }}
        >
          SRH Latest News
        </h1>

        <p
          style={{
            color: "#ffcc99",
            fontSize: "var(--hero-subtitle)",
            marginTop: "10px",
          }}
        >
          Latest updates from the Orange Army
        </p>
      </div>

      {/* NEWS GRID */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "var(--grid-columns)",
          gap: "40px",
          padding: "70px 40px",
        }}
      >
        {newsData.map((news, index) => (
          <div
            key={index}
            style={{
              background:
                "linear-gradient(to bottom, #1a0000, #000)",
              borderRadius: "25px",
              overflow: "hidden",
              border: "2px solid #ff6600",
              boxShadow:
                "0 0 25px rgba(255,102,0,0.6)",
            }}
          >
            <img
              src={news.image}
              alt={news.title}
              style={{
                width: "100%",
                height: "350px",
                objectFit: "cover",
                background: "#fff",
              }}
            />

            <div
              style={{
                padding: "25px",
              }}
            >
              <h2
                style={{
                  fontSize: "var(--nav-title)",
                  lineHeight: "1.2",
                }}
              >
                {news.title}
              </h2>

              <a
                href={news.link}
                target="_blank"
                rel="noreferrer"
              >
                <button
                  style={{
                    marginTop: "25px",
                    padding: "14px 35px",
                    background: "#ff6600",
                    border: "none",
                    borderRadius: "40px",
                    color: "white",
                    fontSize: "20px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Read More
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default News;