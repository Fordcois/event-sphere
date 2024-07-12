import React from "react";
import { useEffect,useState } from "react";

const EnquiryResults: React.FC = ({CurrentEnquiry}) => {
  const [matchingVenues,setmatchingVenues] = useState(null)


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/venue/filter/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              event_type: CurrentEnquiry.event_type,           
              expected_guests: CurrentEnquiry.expected_guests, 
              style_formal: CurrentEnquiry.style_formal,        // Boolean flag for formal style
              style_casual: CurrentEnquiry.style_casual,        // Boolean flag for casual style
              style_modern: CurrentEnquiry.style_modern,        // Boolean flag for modern style
              style_luxury: CurrentEnquiry.style_luxury,        // Boolean flag for luxury style
              style_traditional: CurrentEnquiry.style_traditional, // Boolean flag for traditional style
              style_industrial: CurrentEnquiry.style_industrial,   // Boolean flag for industrial style
              style_social: CurrentEnquiry.style_social,        // Boolean flag for social style
              style_lively: CurrentEnquiry.style_lively,        // Boolean flag for lively style
              style_quiet: CurrentEnquiry.style_quiet,          // Boolean flag for quiet style
              style_professional: CurrentEnquiry.style_professional, // Boolean flag for professional style
            }),
          }
        );
        if (response.status === 200) {
          const result = await response.json();
          setmatchingVenues(result)
        } else {
          console.log("Fetch failed with status:", response.status);
        }
      } catch (err) {
        console.error(err);
      }
    };

    // Call the async function
    fetchData();
  }, [CurrentEnquiry]);



  return (
    <div style={{marginTop:'50px'}}>
        You have {matchingVenues?.length ?? 0} {matchingVenues?.length === 1 ? "match" : "matches"}<br/>
        
        <ul>
      {matchingVenues?.map((item, index) => (
        <li key={index}>{item.venue_name}</li>
      ))}
    </ul>






    </div>
  );
};

export default EnquiryResults;
