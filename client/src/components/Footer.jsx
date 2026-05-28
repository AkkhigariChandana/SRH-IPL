function Footer() {
  return (
    <footer
      style={{
        background: "#111",
        color: "white",
        padding: "50px 20px",
        textAlign: "center",
        borderTop: "2px solid #ff6600",
      }}
    >
      <h1
        style={{
          color: "#ff6600",
          fontSize: "45px",
          fontWeight: "bold",
        }}
      >
        SUNRISERS HYDERABAD
      </h1>

      <p
        style={{
          marginTop: "15px",
          fontSize: "22px",
          color: "#ccc",
        }}
      >
        Rise Orange. Rule The IPL.
      </p>

      {/* SOCIAL LINKS */}
      <div
        style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          flexWrap: "wrap",
        }}
      >
      </div>

      <p
        style={{
          marginTop: "40px",
          color: "#777",
          fontSize: "18px",
        }}
      >
        SRH Fan Club 
        Orange Army
      </p>
    </footer>
  );
}

const linkStyle = {
  color: "#ffb366",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "bold",
};

export default Footer;