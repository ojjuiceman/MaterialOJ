import React from "react";
import "./App.css";

export default function App() {
  return (
    <div>
      <header className="Navbar">
        <div className="Toolbar">
          <div className="Logo">
            {" "}
            <span role="img" aria-label="logo">
              😏
            </span>{" "}
          </div>
          <div className="Title"> My Sweet App </div>
          <div>
            <button> Login </button>
          </div>
        </div>
      </header>
      <div className="Toolbar" />
      <h1> Custom React CSS Navbar </h1>
      <p>
        {" "}
        Above you will see a custom CSS Navbar inspired by Material UI's AppBar.{" "}
      </p>
    </div>
  );
}


