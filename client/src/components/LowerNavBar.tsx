import React from "react";
import "../index.css";

const LowerNavBar: React.FC = () => {
  return (
    <div className="lower-nav-bar">
      <span className="lower-nav-bar-element">Conferences</span>
      <span className="lower-nav-bar-element">Corporate Events</span>
      <span className="lower-nav-bar-element">Parties</span>
      <span className="lower-nav-bar-element">Meetings</span>
      <span className="lower-nav-bar-element">Private Dining</span>
      <span className="lower-nav-bar-element">Studios</span>
      <span className="lower-nav-bar-element">Christmas</span>
    </div>
  );
};

export default LowerNavBar;
