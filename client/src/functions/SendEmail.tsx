import React from 'react';
import emailjs from 'emailjs-com';

const SendEnquiryEmail = () => {

    const ServiceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const TemplateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const UserID = process.env.REACT_APP_EMAILJS_USER_ID;


const templateParams = {
    name: 'James',
    to_email: 'samueljamesford@googlemail.com',
    email_subject: 'Working from Params - trial 3',
    message: 'This is a test message from templateParams. - Now stuff is in env'
  };

  const sendEmail = () => { 
    emailjs.send(ServiceID, TemplateID,templateParams,UserID)
      .then((result) => {
          console.log('Email successfully sent:', result.text);
          window.location.reload();
      }, (error) => {
          console.error('Error sending email:', error.text);
      });
  };

  return (
    <div>
      <button onClick={sendEmail}>Send Email</button>
    </div>
  );
};

export default SendEnquiryEmail;
