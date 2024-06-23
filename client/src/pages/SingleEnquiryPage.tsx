import React from "react";
import { useParams } from 'react-router';
import { useEffect,useState } from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";


const SingleEnquiryPage: React.FC = () => {

  interface Enquiry {
    id: string;
    first_name:string;
    last_name:string;
    email:string;
    eventName: string;
    eventType: string;
    corporateEvent:boolean;
    eventDate:Date;
    startTime:string;
    endTime:string;
    flexible:boolean;
    SeatingArrangment:string;
    ExpectedGuests:number;
    styleCasual:boolean;
    styleFormal:boolean;
    styleIndustrial:boolean; 
    styleLively:boolean;
    styleLuxury:boolean;
    styleModern:boolean; 
    styleProfessional:boolean; 
    styleQuiet:boolean; 
    styleSocial:boolean; 
    styleTraditional:boolean; 
    Notes:string
  }

  const params= useParams<{ enquiry_id: string }>()
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);

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
            console.log(result)
            setEnquiry(result[0])
      
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
      {enquiry && 
        <div>

        <h1>Enquiry {params.enquiry_id}</h1>

        <b>Name: </b>{enquiry.first_name && enquiry.last_name && `${enquiry.first_name} ${enquiry.last_name}`}
        <br/>
        <b>Email: </b>{enquiry.email && enquiry.email}
        <br/>

        <b>Event Name: </b>{enquiry.eventName && enquiry.eventName} 
        <br/>
        <b>Event Type: </b>{enquiry.eventType && enquiry.eventType} 
        <br/>
        <b>Corporate Event:</b>{enquiry.corporateEvent.toString()} 
        <br/>
        <b>Date:</b>{enquiry.eventDate && enquiry.eventDate.toString()} 
        <br/>
        <b>Start Time:</b>{enquiry.startTime && enquiry.startTime} 
        <br/>
        <b>End Time:</b>{enquiry.endTime && enquiry.endTime}
        <br/>
        <b>Flexible on Date?:</b>{enquiry.flexible.toString()} 
        <br/>
        <b>Seating:</b>{enquiry.SeatingArrangment && enquiry.SeatingArrangment}
        <br/>
        <b>Expected Guests:</b>{enquiry.ExpectedGuests && enquiry.ExpectedGuests}
        <br/>
        <b>Styles:</b><br/>
        {enquiry.styleCasual && 'Causal '}
        {enquiry.styleFormal && 'Formal '}
        {enquiry.styleIndustrial && 'Industrial '}
        {enquiry.styleLively && 'Lively '}
        {enquiry.styleLuxury && 'Luxury '}
        {enquiry.styleModern && 'Modern '}
        {enquiry.styleProfessional && 'Professional '}
        {enquiry.styleQuiet && 'Quiet '}
        {enquiry.styleSocial && 'Social '}
        {enquiry.styleTraditional && 'Traditional '}

        <br/>
        <b>Additional Note:</b><br/>{enquiry.Notes && enquiry.Notes}
        
        
      
      </div>}
      {/* Add more content, components, or UI elements as needed */}
    </div>
  );
};

export default SingleEnquiryPage;
