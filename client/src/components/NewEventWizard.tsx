import React, { useState } from "react";
import { useCookies } from "react-cookie";

// Define the Enquiry interface at the top
interface Enquiry {
  eventName: string;
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

  const [cookies] = useCookies(['user_id']);
 
  // Fields
  const [eventName, setEventName] = useState<string>("");
  const [eventType, setEventType] = useState<string>("");
  const [corporateEvent, setCorporateEvent] = useState<boolean>(false);
  const [seatingArrang,setSeatingArrang]= useState<string>("")
  const [expectedGuests, setExpectedGuests] = useState<number>(1);
  const [date, setDate] = useState<Date | null>(null);
  const [startTime,setStartTime] = useState<string | null>(null);
  const [endTime,setEndTime] = useState<string | null>(null);
  const [flexible,setFlexible] = useState<boolean>(false);
  const [styleFormal, setStyleFormal] = useState(false);
  const [styleCasual, setStyleCasual] = useState(false);
  const [styleModern, setStyleModern] = useState(false);
  const [styleLuxury, setStyleLuxury] = useState(false);
  const [styleTraditional, setStyleTraditional] = useState(false);
  const [styleIndustrial, setStyleIndustrial] = useState(false);
  const [styleSocial, setStyleSocial] = useState(false);
  const [styleLively, setStyleLively] = useState(false);
  const [styleQuiet, setStyleQuiet] = useState(false);
  const [styleProfessional, setStyleProfessional] = useState(false);
  const [additionalNotes,setAdditionalNotes] = useState<string>("")

  const LoggedinUserId = cookies.userId














  const submitEnquiry = async (event) => {
    event.preventDefault(); 
  
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/enquiry/create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Set the content type to JSON
        },
        body: JSON.stringify({
          userID: LoggedinUserId,
          eventName: eventName,            // Event name
          eventType: eventType,            // Type of the event
          corporateEvent: corporateEvent,  // Boolean flag for corporate event
          seatingArrang: seatingArrang,    // Seating arrangement
          expectedGuests: expectedGuests,  // Number of expected guests
          date: date,                      // Event date
          startTime: startTime,            // Start time of the event
          endTime: endTime,                // End time of the event
          flexible: flexible,              // Boolean flag for flexibility
          styleFormal: styleFormal,        // Boolean flag for formal style
          styleCasual: styleCasual,        // Boolean flag for casual style
          styleModern: styleModern,        // Boolean flag for modern style
          styleLuxury: styleLuxury,        // Boolean flag for luxury style
          styleTraditional: styleTraditional, // Boolean flag for traditional style
          styleIndustrial: styleIndustrial,   // Boolean flag for industrial style
          styleSocial: styleSocial,        // Boolean flag for social style
          styleLively: styleLively,        // Boolean flag for lively style
          styleQuiet: styleQuiet,          // Boolean flag for quiet style
          styleProfessional: styleProfessional, // Boolean flag for professional style
          additionalNotes: additionalNotes // Any additional notes
        }),
      });
  
      // Check if the response status is OK (200-299)
      if (response.ok) {
        console.log("New Enquiry Registered");
        // Optionally, handle further actions like clearing the form or redirecting the user
      } else {
        console.error("Failed to register enquiry. Status code:", response.status);
        // Optionally, parse the response body to get more details about the error
        const errorDetails = await response.json();
        console.error("Error details:", errorDetails);
      }
    } catch (error) {
      // Catch any network or other errors
      console.error("An error occurred while submitting the enquiry:", error);
    }
  };

  return (
    <div style={{ paddingLeft: "10px" }}>
      Logged in: <span>{JSON.stringify(LoggedinUserId)}</span>
      <br />
      
      <form style={{ display: "flex", flexDirection: "column" }} onSubmit={submitEnquiry}>

      <label htmlFor="eventName">Event Name</label>
        <input placeholder="Event Name" name="eventName" id="eventName" value={eventName} onChange={(event) => setEventName(event.target.value)} />

        <h2>What type of event are you planning?</h2>
        <input type="radio" id="Meeting" name="EventType" value="Meeting" onChange={()=>setEventType('Meeting')}/>
        <label htmlFor="Meeting">Meeting💡</label>

        <input type="radio" id="Party" name="EventType" value="Party" onChange={()=>setEventType('Party')}/>
        <label htmlFor="Party">Party 🎉</label>

        <input type="radio" id="Dining" name="EventType" value="Dining" onChange={()=>setEventType('Dining')}/>
        <label htmlFor="Dining">Private Dining 🍽</label>

        <input type="radio" id="Wedding" name="EventType" value="Wedding" onChange={()=>setEventType('Wedding')}/>
        <label htmlFor="Wedding">Wedding 💖</label>

        <input type="radio" id="Networking" name="EventType" value="Networking" onChange={()=>setEventType('Networking')}/>
        <label htmlFor="Networking">Networking 🤝</label>

        <input type="radio" id="Conference" name="EventType" value="Conference" onChange={()=>setEventType('Conference')} />
        <label htmlFor="Conference">Conference 🎤</label>

        <input type="radio" id="Else" name="EventType" value="Else" onChange={()=>setEventType('Other')}/>
        <label htmlFor="Else">Something else</label>

  
        <b>Business or pleasure?</b>
        <input type="radio" id="Personal" name="corporate" onChange={()=>setCorporateEvent(true)}/>
        <label htmlFor="Personal">Personal</label>
        <input type="radio" id="Business" name="corporate" onChange={()=>setCorporateEvent(false)}/>
        <label htmlFor="Business">Corporate</label>



         <b>How would you like the space set up?</b>
        <input type="radio" id="Standing" name="StandingArrang" value='Standing' onChange={()=>setSeatingArrang('Standing')}/>
        <label htmlFor="Personal">Standing</label>
        <input type="radio" id="Standing" name="StandingArrang" value='Seated' onChange={()=>setSeatingArrang('Seated')}/>
        <label htmlFor="Business">Seated</label>
        <input type="radio" id="Standing" name="StandingArrang" value='NoPref' onChange={()=>setSeatingArrang('unsure')}/>
        <label htmlFor="Business">Unsure</label>

        
        <label htmlFor="quantity">How Many Guests are you Expecting?</label>
        <input type="number" id="GuestsExpected" name="GuestsExpected" min="1" value={expectedGuests} onChange={(event) => setExpectedGuests(parseInt(event.target.value))}/>
        
        <b>Date of the Event</b>
        <input type="date" id='Date' name='Date' onChange={(event) => setDate(event.target.value)} />

        <b>Start Time</b>
        <input type="time" id="startTime" name="startTime" onChange={(event) => setStartTime(event.target.value)} />

        <b>End Time</b>
        <input type="time" id="endTime" name="endTime" onChange={(event) => setEndTime(event.target.value)} />

        <b>Are you flexible on these dates?</b>
        <input type="radio" id="NotFlexi" name="flexible" value={'false'} onChange={()=>setFlexible(true)}/>
        <label htmlFor="NotFlexi">Flexible</label>
        <input type="radio" id="Flexi" name="flexible" value={'true'} onChange={()=>setCorporateEvent(false)}/>
        <label htmlFor="Flexi">Not Flexible</label>

        <b>What style venue are you looking for?</b>
        <input type="checkbox" id="Formal" name="venueStyle" value="Formal" onChange={() => setStyleFormal(!styleFormal)}/>
        <label htmlFor="Formal">Formal 👔 </label>

        <input type="checkbox" id="Casual" name="venueStyle" value="Casual" onChange={() => setStyleCasual(!styleCasual)}/>
        <label htmlFor="Casual">Casual 🧢</label>

        <input type="checkbox" id="Modern" name="venueStyle" value="Modern" onChange={() => setStyleModern(!styleModern)}/>
        <label htmlFor="Modern">Modern 🛋  </label>

        <input type="checkbox" id="Luxury" name="venueStyle" value="Luxury" onChange={() => setStyleLuxury(!styleLuxury)}/>
        <label htmlFor="Luxury">Luxury ⚜️ </label>

        <input type="checkbox" id="Traditional" name="venueStyle" value="Traditional" onChange={() => setStyleTraditional(!styleTraditional)}/>
        <label htmlFor="Traditional">Traditional 🏛 </label>

        <input type="checkbox" id="Industrial" name="venueStyle" value="Industrial" onChange={() => setStyleIndustrial(!styleIndustrial)}/>
        <label htmlFor="Industrial">Industrial 🧱 </label>

        <input type="checkbox" id="Social" name="venueStyle" value="Social" onChange={() => setStyleSocial(!styleSocial)}/>
        <label htmlFor="Social"> Social 🗣 </label>

        <input type="checkbox" id="Lively" name="venueStyle" value="Lively" onChange={() => setStyleLively(!styleLively)}/>
        <label htmlFor="Lively"> Lively 🕺 </label>

        <input type="checkbox" id="Quiet" name="venueStyle" value="Quiet" onChange={() => setStyleQuiet(!styleQuiet)}/>
        <label htmlFor="Quiet"> Quiet 👂 </label>

        <input type="checkbox" id="Professional" name="venueStyle" value="Professional" onChange={() => setStyleProfessional(!styleProfessional)}/>
        <label htmlFor="Professional"> Professional 💼 </label>

        <b>Any special requests?</b>
        <input type='textarea' id='OtherInfo' name='AdditionalNotes' value={additionalNotes} onChange={(event) => setAdditionalNotes(event.target.value)}/> 

        <button type="submit">Submit</button>
      </form>
    </div>
  );}

export default NewEventWizard;
