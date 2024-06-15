import React from "react";
import { useCookies } from "react-cookie";
const LogOut: React.FC = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null);
    
    const signOut = () => {
      console.log("sign out");
      removeCookie("Email");
      removeCookie("AuthToken");
      window.location.reload();
    };
  
  return (
    <div>
        <span>LogOut</span>
        <button onClick={signOut}>Log Out</button>

    </div>
  );
};

export default LogOut;
