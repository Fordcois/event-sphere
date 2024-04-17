import React, { useState } from "react";
import TickIcon from "./TickIcon";
import ProgressBar from "./ProgressBar";
import Modal from "./Modal";
import "../index.css";

function ListItem({ task }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
      </div>
      <p>{task.title}</p>
      <ProgressBar />
      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          EDIT
        </button>
        <button className="edit">DELETE</button>
      </div>
      {showModal && (
        <Modal mode={"edit"} setShowModal={setShowModal} task={task} />
      )}
    </li>
  );
}

export default ListItem;
