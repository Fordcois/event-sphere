import React, { useState } from "react";
import Modal from "./Modal";
import "../index.css";

interface ListHeaderProps {
  ListName: string;
}

const ListHeader: React.FC<ListHeaderProps> = ({ ListName, getData }) => {
  const [showModal, setShowModal] = useState(false);
  const signOut = () => {
    console.log("sign out");
  };

  return (
    <div className="list-header">
      <h1>{ListName}</h1>
      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          ADD NEW
        </button>
        <button className="edit" onClick={signOut}>
          Sign Out
        </button>
      </div>
      {showModal && (
        <Modal mode={"create"} setShowModal={setShowModal} getData={getData} />
      )}
    </div>
  );
};

export default ListHeader;
