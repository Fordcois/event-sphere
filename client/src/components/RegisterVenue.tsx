import React from "react";
import { useState } from "react";
const VenueRegister: React.FC = () => {

    const [venueName, setVenueName] = useState<string>("");
    const [location, setlocation] = useState<string>("");
    const [contactEmail, setcontactEmail] = useState<string>("");
    const [contactName, setcontactName] = useState<string>("");
    const [acceptsMeeting, setacceptsMeeting] = useState<boolean>(false);
    const [acceptsParty, setacceptsParty] = useState<boolean>(false);
    const [acceptsDining, setacceptsDining] = useState<boolean>(false);
    const [acceptsWedding, setacceptsWedding] = useState<boolean>(false);
    const [acceptsNetworking, setacceptsNetworking] = useState<boolean>(false);
    const [acceptsConference, setacceptsConference] = useState<boolean>(false);
    const [maxCapacity, setmaxCapacity] = useState<number>(1);
    const [styleFormal, setStyleFormal] = useState(false);
    const [styleCasual, setStyleCasual] = useState(false);
    const [styleLuxury, setStyleLuxury] = useState(false);
    const [styleTraditional, setStyleTraditional] = useState(false);
    const [styleIndustrial, setStyleIndustrial] = useState(false);
    const [styleSocial, setStyleSocial] = useState(false);
    const [styleLively, setStyleLively] = useState(false);
    const [styleQuiet, setStyleQuiet] = useState(false);
    const [styleProfessional, setStyleProfessional] = useState(false);
    const [styleModern, setStyleModern] = useState(false);



    
    const RegisterVenue = async (event) => {
        event.preventDefault();
        try {
        const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/venue/register`,
            {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                venueName: venueName,
                location: location,
                contactName: contactName,
                contactEmail: contactEmail,
                acceptsMeeting: acceptsMeeting,
                acceptsParty: acceptsParty,
                acceptsDining: acceptsDining,
                acceptsWedding: acceptsWedding,
                acceptsNetworking: acceptsNetworking,
                acceptsConference: acceptsConference,
                maxCapacity: maxCapacity,
                styleFormal: styleFormal,
                styleCasual: styleCasual,
                styleLuxury: styleLuxury,
                styleTraditional: setStyleTraditional,
                styleIndustrial: styleIndustrial,
                styleSocial: styleSocial,
                styleLively: styleLively,
                styleQuiet: styleQuiet,
                styleProfessional: styleProfessional,
                styleModern: styleModern})
            }
        );
        if (response.status === 200) {
            console.log("User Registered");
        }
        } catch (err) {console.error(err);}
      };

  return (
    <div>
        <h1>Register a new Venue</h1>
        <form onSubmit={RegisterVenue}>
        venue Name
        <input type='text' placeholder="Venue Name" name="Venue Name" id="Venue Name" value={venueName} onChange={(event) => setVenueName(event.target.value)} />
        <br/>
        Location
        <input type='text' placeholder="Location" name="Location" id="Location" value={location} onChange={(event) => setlocation(event.target.value)} />
        <br/>
        Contact Email
        <input type='text' placeholder="Contact Email" name="Contact Email" id="Contact Email" value={contactEmail} onChange={(event) => setcontactEmail(event.target.value)} />
        <br/>
        Contact Name
        <input type='text' placeholder="Contact Name" name="Contact Name" id="Contact Name" value={contactName} onChange={(event) => setcontactName(event.target.value)} />
        <br/>
        Accepts Meeting?
        <label htmlFor="Accepts Meeting">Meeting  </label>
        <input type="checkbox" id="acceptsMeet"  onChange={() => setacceptsMeeting(!acceptsMeeting)}/>
        <br/>
        Accepts Party?
        <label htmlFor="Accepts Meeting">Party</label>
        <input type="checkbox" id="acceptsFormal"  onChange={() => setacceptsParty(!acceptsParty)}/>
        <br/>
        Accepts Dining?
        <label htmlFor="Accepts Meeting">Dining  </label>
        <input type="checkbox" id="acceptsDining"  onChange={() => setacceptsDining(!acceptsDining)}/>
        <br/>
        Accepts Wedding?
        <label htmlFor="Accepts Meeting">Wedding </label>
        <input type="checkbox" id="acceptsWedding"  onChange={() => setacceptsWedding(!acceptsWedding)}/>
        <br/>
        Accepts Networking?
        <label htmlFor="Accepts Meeting">Networking</label>
        <input type="checkbox" id="acceptsMeet"  onChange={() => setacceptsNetworking(!acceptsNetworking)}/>
        <br/>
        Accepts Wedding?
        <label htmlFor="Accepts Meeting">Conference </label>
        <input type="checkbox" id="acceptsConference"  onChange={() => setacceptsConference(!acceptsConference)}/>
        <br/>
        <label htmlFor="quantity">Max Capacity</label>
        <input type="number" id="GuestsExpected" name="GuestsExpected" min="1" value={maxCapacity} onChange={(event) => setmaxCapacity(parseInt(event.target.value))}/>

        <br/>
        <b>What style venue are you?</b>
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

        <input type='submit' />

        </form>

    </div>
  );
};

export default VenueRegister;