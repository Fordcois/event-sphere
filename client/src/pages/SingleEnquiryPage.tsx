import React from "react";
import { useParams } from 'react-router';
import { useEffect,useState } from "react";
import TopNavBar from "../components/TopNavBar";
import LowerNavBar from "../components/LowerNavBar";
import EnquiryResults from "../components/EnquiryResults";


const SingleEnquiryPage: React.FC = () => {

  interface Enquiry {
    id: string;
    first_name:string;
    last_name:string;
    email:string;
    event_name: string;
    event_type: string;
    corporate_event:boolean;
    event_date:Date;
    start_time:string;
    end_time:string;
    flexible:boolean;
    seating_arrangement:string;
    expected_guests:number;
    style_casual:boolean;
    style_formal:boolean;
    style_industrial:boolean; 
    style_lively:boolean;
    style_luxury:boolean;
    style_modern:boolean; 
    style_professional:boolean; 
    style_quiet:boolean; 
    style_social:boolean; 
    style_traditional:boolean; 
    notes:string
  }

  const params= useParams<{ enquiry_id: string }>()
  const [enquiry, setEnquiry] = useState<Enquiry | null>(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/enquiry/findbyid/${params.enquiry_id}`,
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

        <b>Event Name: </b>{enquiry.event_name && enquiry.event_name} 
        <br/>
        <b>Event Type: </b>{enquiry.event_type && enquiry.event_type} 
        <br/>
        <b>Corporate Event:</b>{enquiry.corporate_event.toString()} 
        <br/>
        <b>Date:</b>{enquiry.event_date && enquiry.event_date.toString()} 
        <br/>
        <b>Start Time:</b>{enquiry.start_time && enquiry.start_time} 
        <br/>
        <b>End Time:</b>{enquiry.end_time && enquiry.end_time}
        <br/>
        <b>Flexible on Date?:</b>{enquiry.flexible.toString()} 
        <br/>
        <b>Seating:</b>{enquiry.seating_arrangement && enquiry.seating_arrangement}
        <br/>
        <b>Expected Guests:</b>{enquiry.expected_guests && enquiry.expected_guests}
        <br/>
        <b>Styles:</b><br/>
        {enquiry.style_casual && 'Causal '}
        {enquiry.style_formal && 'Formal '}
        {enquiry.style_industrial && 'Industrial '}
        {enquiry.style_lively && 'Lively '}
        {enquiry.style_luxury && 'Luxury '}
        {enquiry.style_modern && 'Modern '}
        {enquiry.style_professional && 'Professional '}
        {enquiry.style_quiet && 'Quiet '}
        {enquiry.style_social && 'Social '}
        {enquiry.style_traditional && 'Traditional '}

        <br/>
        <b>Additional Note:</b><br/>{enquiry.notes && enquiry.notes}
        
        
      
      </div>}
      {/* Add more content, components, or UI elements as needed */}
      <EnquiryResults CurrentEnquiry={enquiry} />
    </div>
  );
};

export default SingleEnquiryPage;
