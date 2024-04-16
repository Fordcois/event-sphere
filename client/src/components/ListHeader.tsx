import React from "react";
import "../index.css";

interface ListHeaderProps {
  ListName: string;
}

const ListHeader: React.FC<ListHeaderProps> = ({ ListName }) => {
  const signOut = () => {
    console.log("sign out");
  };

  return (
    <div className="list-header">
      <h1>{ListName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
