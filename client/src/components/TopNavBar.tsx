import React from "react";
import "../index.css";

const TopNavBar: React.FC = () => {
  return (
    <div className="top-nav-bar">
      <span className="nav-bar-link">EVENT-SPHERE </span>
      <div className="nav-bar-links-container">
        <span className="nav-bar-link">Register a Venue</span>
        <span className="nav-bar-link">Plan Your Event</span>
        <span className="nav-bar-link">Sign In</span>
      </div>
    </div>
  );
};

export default TopNavBar;
