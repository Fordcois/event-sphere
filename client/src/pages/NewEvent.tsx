import React from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";
import NewEventWizard from "../components/NewEventWizard";

const NewEvent: React.FC = () => {
  return (
    <div style={{ color: "lightgray" }}>
      <TopNavBar />
      <LowerNavBar />
      <NewEventWizard />
    </div>
  );
};

export default NewEvent;
