import React from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";
import HeroImage from "../components/Herobanner";
import Login from "../components/Login";
import Footer from "../components/Footer";
import CookiesInfo from "../utility/cookies";
import LogOut from "../components/LogOut";

const Homepage: React.FC = () => {
  const mobileDisplayMode: boolean = window.innerWidth < 767;
  // Define any state variables if needed using useState
  // const [stateVariable, setStateVariable] = useState<YourType>(initialValue);

  // Define any useEffect hooks for side effects
  // useEffect(() => {
  //   // Perform side effect here
  // }, []);

  return (
    <div>
      {/* Render the page content here */}
      <TopNavBar />
      {mobileDisplayMode ? "" : <LowerNavBar />}
      <HeroImage />
      <p>Standout Venues to book in [Random place]</p>
      Current Display:{mobileDisplayMode ? "Mobile Display" : "Desktop Display"}
      <br />
      <Login/>
      <LogOut/>
      <CookiesInfo/>
      <Footer />
    </div>
  );
};

export default Homepage;
