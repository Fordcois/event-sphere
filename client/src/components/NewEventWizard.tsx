import React, { useState } from "react";

// Define the Enquiry interface at the top
interface Enquiry {
  eventName: string;
  firstName: string;
  lastName: string;
  contactNumber: string | number;
  email: string;
  Function: Array<string>;
  corporate:string;
  StandingArrang:string;
  GuestsExpected:number;
  Date:Date ;
  startTime: string;
  endTime: string;
  Flexible: string;
  venueStyle: Array<string>;
  AdditionalNotes: string;
}

const NewEventWizard: React.FC = () => {
  // Define enquiry state variable with initial state using a function
  const [enquiry, setEnquiry] = useState<Enquiry>(() => ({
    eventName:"",
    firstName: "",
    lastName: "",
    contactNumber: "",
    email: "",
    Function:[],
    corporate:'false',
    StandingArrang:"",
    GuestsExpected:0,
    Date: new Date('1991-03-19'),
    startTime: "NoTime",
    endTime: "NoTime",
    Flexible: "false",
    venueStyle:[],
    AdditionalNotes: ""
  }));

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = event.target; 
    const updatedEnquiry = { ...enquiry };
    const updateArray = (array: string[], item: string) => {
      if (array.includes(item)) {
        return array.filter(nameInList => nameInList !== item);
      } else {
        return [...array, item];
      }
    };
  
    if (type === 'checkbox') {
      updatedEnquiry[name] = updateArray(updatedEnquiry[name], value);
    } else {
      updatedEnquiry[name] = value;
    }
  
    setEnquiry(updatedEnquiry);
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      <br />
      
      <form style={{ display: "flex", flexDirection: "column" }}>

        <label htmlFor="eventName">Event Name</label>
        <input placeholder="Event Name" name="eventName" id="eventName" value={enquiry.eventName} onChange={handleInputChange} />

        <label htmlFor="firstName">First Name</label>
        <input placeholder="First Name" name="firstName" id="firstName" value={enquiry.firstName} onChange={handleInputChange} />

        <label htmlFor="firstName">Last Name</label>
        <input placeholder="Last Name" name="lastName" id="lastName" value={enquiry.lastName} onChange={handleInputChange}/>

        <label htmlFor="contactNumber">Contact Number</label>
        <input placeholder="Contact Number" name="contactNumber" id="contactNumber" value={enquiry.contactNumber} onChange={handleInputChange} />
        
        <label htmlFor="Email">Email</label>
        <input placeholder="Email" name="email" id="Email" value={enquiry.email} onChange={handleInputChange} />

        <b>What type of event are you planning?</b>
        <input type="checkbox" id="Meeting" name="Function" value="Meeting" onChange={handleInputChange}/>
        <label htmlFor="Meeting">Meeting💡</label>

        <input type="checkbox" id="Party" name="Function" value="Party" onChange={handleInputChange}/>
        <label htmlFor="Party">Party 🎉</label>

        <input type="checkbox" id="Dining" name="Function" value="Dining" onChange={handleInputChange}/>
        <label htmlFor="Dining">Private Dining 🍽</label>

        <input type="checkbox" id="Wedding" name="Function" value="Wedding" onChange={handleInputChange}/>
        <label htmlFor="Wedding">Wedding 💖</label>

        <input type="checkbox" id="Networking" name="Function" value="Networking" onChange={handleInputChange}/>
        <label htmlFor="Networking">Networking 🤝</label>

        <input type="checkbox" id="Conference" name="Function" value="Conference" onChange={handleInputChange} />
        <label htmlFor="Conference">Conference 🎤</label>

        <input type="checkbox" id="Else" name="Function" value="Else" onChange={handleInputChange}/>
        <label htmlFor="Else">Something else</label>

  
        <b>Business or pleasure?</b>
        <input type="radio" id="Personal" name="corporate" value={'false'} onChange={handleInputChange}/>
        <label htmlFor="Personal">Personal</label>
        <input type="radio" id="Business" name="corporate" value={'true'} onChange={handleInputChange}/>
        <label htmlFor="Business">Corporate</label>

        <b>How would you like the space set up?</b>
        <input type="radio" id="Standing" name="StandingArrang" value='Standing' onChange={handleInputChange}/>
        <label htmlFor="Personal">Standing</label>
        <input type="radio" id="Standing" name="StandingArrang" value='Seated' onChange={handleInputChange}/>
        <label htmlFor="Business">Seated</label>
        <input type="radio" id="Standing" name="StandingArrang" value='NoPref' onChange={handleInputChange}/>
        <label htmlFor="Business">Unsure</label>

        
        <label htmlFor="quantity">How Many Guests are you Expecting?</label>
        <input type="number" id="GuestsExpected" name="GuestsExpected" min="1" onChange={handleInputChange}/>
        
        <b>Date of the Event</b>
        <input type="date" id='Date' name='Date' onChange={handleInputChange}/>

        <b>Start Time</b>
        <input type="time" id="startTime" name="startTime" onChange={handleInputChange} />

        <b>End Time</b>
        <input type="time" id="endTime" name="endTime" onChange={handleInputChange} />

        <b>Are you flexible on these dates?</b>
        <input type="radio" id="NotFlexi" name="flexible" value={'false'} onChange={handleInputChange}/>
        <label htmlFor="NotFlexi">Flexible</label>
        <input type="radio" id="Flexi" name="flexible" value={'true'} onChange={handleInputChange}/>
        <label htmlFor="Flexi">Not Flexible</label>

        <b>What style venue are you looking for?</b>
        <input type="checkbox" id="Formal" name="venueStyle" value="Formal" onChange={handleInputChange}/>
        <label htmlFor="Formal">Formal 👔 </label>

        <input type="checkbox" id="Casual" name="venueStyle" value="Casual" onChange={handleInputChange}/>
        <label htmlFor="Casual">Casual 🧢</label>

        <input type="checkbox" id="Modern" name="venueStyle" value="Modern" onChange={handleInputChange}/>
        <label htmlFor="Modern">Modern 🛋  </label>

        <input type="checkbox" id="Luxury" name="venueStyle" value="Luxury" onChange={handleInputChange}/>
        <label htmlFor="Luxury">Luxury ⚜️ </label>

        <input type="checkbox" id="Traditional" name="venueStyle" value="Traditional" onChange={handleInputChange}/>
        <label htmlFor="Traditional">Traditional 🏛 </label>

        <input type="checkbox" id="Industrial" name="venueStyle" value="Industrial" onChange={handleInputChange}/>
        <label htmlFor="Industrial">Industrial 🧱 </label>

        <input type="checkbox" id="Social" name="venueStyle" value="Social" onChange={handleInputChange}/>
        <label htmlFor="Social"> Social 🗣 </label>

        <input type="checkbox" id="Lively" name="venueStyle" value="Lively" onChange={handleInputChange}/>
        <label htmlFor="Lively"> Lively 🕺 </label>

        <input type="checkbox" id="Quiet" name="venueStyle" value="Quiet" onChange={handleInputChange}/>
        <label htmlFor="Quiet"> Quiet 👂 </label>

        <input type="checkbox" id="Professional" name="venueStyle" value="Professional" onChange={handleInputChange}/>
        <label htmlFor="Professional"> Professional 💼 </label>

        <b>Any special requests?</b>
        <input type='textarea' id='OtherInfo' name='AdditionalNotes' value={enquiry.AdditionalNotes} onChange={handleInputChange}/>


        <input
          type="button"
          value="Submit"
          onClick={() =>
            console.log(
              enquiry.firstName,
              enquiry.lastName,
              enquiry.email,
              enquiry.contactNumber,
              enquiry.Function,
              enquiry.corporate,
              enquiry.StandingArrang,
              enquiry.GuestsExpected,
              enquiry.Date,
              enquiry.startTime,
              enquiry.endTime,
              enquiry.Flexible,
              enquiry.venueStyle,
              enquiry.AdditionalNotes,
            )
          }
        />
      </form>
    </div>
  );
};

export default NewEventWizard;
