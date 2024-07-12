import React from "react";
import { useEffect } from "react";
const EnquiryResults: React.FC = ({CurrentEnquiry}) => {


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
  }, [CurrentEnquiry]);



  
  
  
  
  // event_type,
  // expected_guests,
  // style_casual,
  // style_formal,
  // style_industrial,
  // style_luxury,
  // style_lively,
  // style_modern,
  // style_professional,
  // style_quiet,
  // style_social,
  // style_traditional
  
  return (
    <div style={{marginTop:'50px'}}>
        Here are the results for your enquiry:<br/>
        {CurrentEnquiry? CurrentEnquiry.event_name : 'No Enquiry Sent'}





    </div>
  );
};

export default EnquiryResults;
