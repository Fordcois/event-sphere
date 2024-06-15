import React from "react";
import { useCookies } from "react-cookie";



const CookiesInfo: React.FC = () => {
    const [cookies, setCookie, removeCookie] = useCookies(null);
    const authToken = cookies.AuthToken;

  return (
    <div>
        Okay, let's take a look at our cookies!
    <br/>
  {authToken? authToken.toString():'No Token Found'}
    </div>
  );
};

export default CookiesInfo;
