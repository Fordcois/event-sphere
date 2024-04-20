import React from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";
import HeroImage from "../components/Herobanner";

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
      <LowerNavBar />
      <HeroImage />
      <p>Standout Venues to book in [Random place]</p>
      Current Display:{mobileDisplayMode ? "Mobile Display" : "Desktop Display"}
      <br />
      Photo by{" "}
      <a href="https://unsplash.com/@alelmes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Al Elmes
      </a>{" "}
      on{" "}
      <a href="https://unsplash.com/photos/people-raising-wine-glass-in-selective-focus-photography-ULHxWq8reao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
        Unsplash
      </a>
    </div>
  );
};

export default Homepage;
