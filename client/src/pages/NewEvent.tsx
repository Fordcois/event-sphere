import React from "react";
import TopNavBar from "../components/TopNavBar";
import NewEventWizard from "../components/NewEventWizard";

const NewEvent: React.FC = () => {
  return (
    <div style={{ color: "lightgray" }}>
      <TopNavBar />
      <NewEventWizard />
      <p>
        <strong>What are you planning? </strong>
        <br />
        Select an event type:
        <br /> Meeting/workshop💡 Party 🎉 Private Dining 🍽 Team Activity 🏅
        Presentation 📽 Wedding 💖 Networking 🤝 Studio 📷 Conference 🎤
        Something else <br />
        <br />
        <strong>What type of event is it?</strong> <br />
        <strong>What is the nature of the event? </strong>Personal /
        Professional
        <br />
        <strong>🕺💃 Who's invited? </strong>
        <br />
        I'm expecting Number of guests
        <br />
        <br />
        And how would you like the space set up? <br />
        Standing 🧍 Seated 🪑 Not sure
        <br />
        🤷‍♂️ When is your event? <br />
        flexible on date 🗓 Start time End time I’m flexible on time ⏱ Your event
        starts on Fri Apr 26th 2024 at 18:00 and ends on Sat Apr 27th 2024 at
        00:00 (6 hours).
        <br />- Budget Which venue styles are you looking for?
        <br />
        Venue styles (optional step): Formal 👔 Casual 🧢 Modern 🛋 Luxury ⚜️
        Traditional 🏛 Industrial 🧱 Social 🗣 Lively 🕺 Quiet 👂 Professional 💼
        <br />
        Give your event a name <br />
        Event Name How soon would you like to book a venue? <br />I need to book
        a venue urgently I’d like to book a venue soon I’m browsing and not
        ready to book yet Anything else? Add it here! A specific vibe, type of
        venue or <br />
        any special requests?
        <br />
        What's your email address? <br /> First name <br /> Last name <br />{" "}
        Contact number
      </p>
      <p>
        Launch PartyEdit event name One last check before we share your enquiry.
        Event type Work party 🎉Edit Event type Preferred location Shoreditch,
        London, UK + 2 kmEdit Preferred location Attendees 12 guestsEdit
        Attendees Date & time Fri Apr 26th 2024 at 18:00 - Sat Apr 27th 2024 at
        00:00Edit Date & time Flexibility Flexible on date & timeEdit
        Flexibility Budget £2500Edit Budget Venue styles Quirky, Traditional,
        Fun, Social, Quiet, Lively, Industrial, ModernEdit Venue styles
        Desirable facilities Close to Transport Links, Parking, Disabled Access,
        Natural Light, Whiteboards/Flipcharts, TV/Projector, Audio Equipment,
        Air Conditioning, Outdoor Space, Breakout SpacesEdit Desirable
        facilities Essential facilities NoneEdit Essential facilities Catering
        requests NoneEdit Catering requests Additional notes NoneEdit
      </p>
    </div>
  );
};

export default NewEvent;
