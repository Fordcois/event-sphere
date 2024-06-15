import React from "react";
import "../index.css";

const LowerNavBar: React.FC = () => {
  return (
    <div className="lower-nav-bar">
      <a href='/' className="lower-nav-bar-element">Home</a>
      <a href='/newevent' className="lower-nav-bar-element">New Event</a>
      <span className="lower-nav-bar-element">Corporate Events</span>
      <span className="lower-nav-bar-element">Parties</span>
      <span className="lower-nav-bar-element">Meetings</span>
      <span className="lower-nav-bar-element">Private Dining</span>

    </div>
  );
};

export default LowerNavBar;
