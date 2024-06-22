import React from "react";
import { useParams } from 'react-router';
import { useEffect,useState } from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";


const SingleEnquiryPage: React.FC = () => {
  const params= useParams()
  const [enquiry,setEnquiry] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/venue/findbyid/${params.enquiry_id}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" }
            }
          );
          if (response.status === 200) {
            const result = await response.json();
            console.log(result[0])
          } else {
            console.log("Fetch failed with status:", response.status);
          }
        } catch (err) {
          console.error(err);
        }
      };
  
      // Call the async function
      fetchData();
    }, [params.enquiry_id]);

  return (
    <div>
      <TopNavBar/>
      <LowerNavBar/>
      {/* Render the page content here */}
      <h1>Enquiry {params.enquiry_id}</h1>
      

      {/* Add more content, components, or UI elements as needed */}
    </div>
  );
};

export default SingleEnquiryPage;
