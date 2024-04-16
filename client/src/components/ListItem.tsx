import React from "react";
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import "../index.css";

function ListItem({ task }) {
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
      </div>
      <p>{task.title}</p>
      <ProgressBar />
      <div className="button-container">
        <button className="edit">EDIT</button>
        <button className="delete">DELETE</button>
      </div>
    </li>
  );
}

export default ListItem;
