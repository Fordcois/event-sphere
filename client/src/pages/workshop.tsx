import React from "react";
import { useParams } from 'react-router';
import { useEffect,useState } from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";


const Workshop: React.FC = () => {

const [enquiry, setEnquiry] = useState<Enquiry | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/venue/styles`,
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ 'style':'style_traditional' }),
              }
          );
          if (response.status === 200) {
            const result = await response.json();
            console.log(result)
      
          } else {
            console.log("Fetch failed with status:", response.status);
          }
        } catch (err) {
          console.error(err);
        }
      };
  
      // Call the async function
      fetchData();
    }, []);

  return (
    <div>
      <TopNavBar/>
      <LowerNavBar/>

      Here we go
 
        

      </div>
  );
};

export default Workshop;
