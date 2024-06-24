import React from "react";
import { useParams } from 'react-router';
import { useEffect,useState } from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";


const UsersEnquiriesPage: React.FC = () => {


  const params= useParams<{ user_id: string }>()

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/enquiry/enquiriesbyuser/${params.user_id}`,
            {
              method: "GET",
              headers: { "Content-Type": "application/json" }
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
    }, [params.user_id]);

  return (
    <div>
      <TopNavBar/>
      <LowerNavBar/>

        Here all enquiries from the user 
        These should be console Logged:
  

    </div>
  );
};

export default UsersEnquiriesPage;
