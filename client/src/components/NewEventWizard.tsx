import React, { useState } from "react";

// Define the Enquiry interface at the top
interface Enquiry {
  firstName: string;
  lastName: string;
  contactNumber: string | number;
  email: string;
}

const NewEventWizard: React.FC = () => {
  // Define enquiry state variable with initial state using a function
  const [enquiry, setEnquiry] = useState<Enquiry>(() => ({
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
  }));

  const handleEnquiryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedEnquiry = { ...enquiry };
    updatedEnquiry[name] = value;
    setEnquiry(updatedEnquiry);
  };

  return (
    <div>
      <br />
      Event Name
      <form style={{ display: "flex", flexDirection: "column" }}>
        First Of all some Information About you <br />
        <label htmlFor="firstName">First Name</label>
        <input
          placeholder="First Name"
          name="firstName"
          id="firstName"
          value={enquiry.firstName}
          onChange={handleEnquiryChange}
        />
        <label htmlFor="firstName">Last Name</label>
        <input
          placeholder="Last Name"
          name="lastName"
          id="lastName"
          value={enquiry.lastName}
          onChange={handleEnquiryChange}
        />
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          placeholder="Contact Number"
          name="contactNumber"
          id="contactNumber"
          value={enquiry.contactNumber}
          onChange={handleEnquiryChange}
        />
        <label htmlFor="Email">Email</label>
        <input
          placeholder="Email"
          name="email"
          id="Email"
          value={enquiry.email}
          onChange={handleEnquiryChange}
        />
        <input
          type="button"
          onClick={() =>
            console.log(
              enquiry.firstName,
              enquiry.lastName,
              enquiry.email,
              enquiry.contactNumber
            )
          }
        />
      </form>
    </div>
  );
};

export default NewEventWizard;
