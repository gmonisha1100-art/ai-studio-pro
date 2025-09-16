import React from "react";

function Home() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#121212",
      color: "#fff",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1>🎬 AI Studio Pro</h1>
      <p>Welcome to your dashboard!</p>

      <button style={{
        marginTop: "20px",
        padding: "10px 20px",
        fontSize: "16px",
        fontWeight: "bold",
        borderRadius: "8px",
        border: "none",
        cursor: "pointer",
        backgroundColor: "#8e44ad",
        color: "#fff"
      }}>
        ➕ New Project
      </button>

      <div style={{ marginTop: "40px" }}>
        <h3>📂 Recent Projects</h3>
        <p>No projects yet...</p>
      </div>
    </div>
  );
}

export default Home;
