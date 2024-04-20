import React from "react";
import MainImage from "../assets/Hero-al-elmes.jpg";
import "../index.css";

const HeroImage: React.FC = () => {
  return (
    <div className="shade">
      <div
        className="homepage-image-banner"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 60%, rgba(20, 33, 61, .8)), url(${MainImage})`,
        }}
      >
        <p className="banner-text">LET THE PERFECT NIGHT FIND YOU</p>
        <p className="smaller-banner-text">
          Get fast,personalised responses from available venues that match what
          you're looking for
        </p>
        <button
          className="Button"
          onClick={() => console.log("Button Clicked")}
        >
          <p>Get Started</p>
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
