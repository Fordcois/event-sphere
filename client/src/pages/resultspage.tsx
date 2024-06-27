import React from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";
import NewEventWizard from "../components/NewEventWizard";

const ResultingVenues: React.FC = () => {
  return (
    <div style={{ color: "lightgray" }}>
      <TopNavBar />
      <LowerNavBar />
      Here are some new events that have recieved your venue
    </div>
  );
};

export default ResultingVenues;