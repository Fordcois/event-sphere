import React from "react";
import "../index.css";

const TopNavBar: React.FC = () => {
  return (
    <div className="top-nav-bar">
      <span
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span className="LogoFontBlue">EVENTSP</span>
        <span className="LogoFontOrange">HERE </span>
      </span>
      <div className="nav-bar-links-container">
        <span className="nav-bar-link">Register a Venue</span>
        <span className="nav-bar-link">Plan Your Event</span>
        <span className="nav-bar-link">Sign In</span>
      </div>
    </div>
  );
};

export default TopNavBar;
