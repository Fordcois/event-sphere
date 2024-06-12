import React from "react";
import "../index.css";

const TrialComponent: React.FC = () => {


    const MakeNew = async () => {
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/enquiry/create`,
            {
              method: "post",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                message: 'Hello This is My Message'
            })
            }
            
          );
          if (response.status === 200) {
            console.log("It's in the DB");
          }
        } catch (err) {
          console.error(err);
        }
      };



  return (
    <div>
        Here is my test Component2
        <button onClick={()=>MakeNew()}>This should word and use the Database!</button>
    </div>
  );
};

export default TrialComponent;
