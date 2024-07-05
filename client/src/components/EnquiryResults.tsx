import React from "react";
const EnquiryResults: React.FC = ({CurrentEnquiry}) => {
  return (
    <div style={{marginTop:'50px'}}>
        Here are the results for your enquiry:
        {CurrentEnquiry? CurrentEnquiry.eventName : 'No Answer'}


    </div>
  );
};

export default EnquiryResults;
