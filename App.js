import React, { useState } from "react";
import Home from "./Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  return (
    <div>
      {loggedIn ? (
        <Home />
      ) : (
        <div style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#1e1e1e",
          color: "#fff"
        }}>
          <h1>AI Studio Pro</h1>
          <input
            type="text"
            placeholder="Email"
            style={{ margin: "10px", padding: "8px", borderRadius: "5px" }}
          />
          <input
            type="password"
            placeholder="Password"
            style={{ margin: "10px", padding: "8px", borderRadius: "5px" }}
          />
          <button
            onClick={handleLogin}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              fontSize: "16px",
              fontWeight: "bold",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              backgroundColor: "#8e44ad",
              color: "#fff"
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
