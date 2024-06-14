import React,{useState } from "react";
import { useCookies } from "react-cookie";

const Login: React.FC = () => {

    const [emailInput, setemailInput] = useState("");
    const [passwordInput, setpasswordInput] = useState("");
    const [cookies, setCookie, removeCookie] = useCookies(null);

    const handleChange = (event, setStateFunction) => {
        setStateFunction(event.target.value);
      };
    
      const AttemptLogIn = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/users/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                email: emailInput,
                password: passwordInput,
              }),
            }
          );
      
          if (!response.ok) {
            // If the response status is not OK (not in the range 200-299), handle it as an error
            const errorData = await response.json();
            console.error(`Login failed: ${errorData.detail || response.statusText}`);
            alert(`Login failed: ${errorData.detail || response.statusText}`);
            return;
          }
      
          const data = await response.json();
      
          if (data.detail) {
            // Handle specific error details returned by the server
            console.log(data.detail);
            alert(data.detail);
          } else {
            // On successful login, set cookies and reload the page
            setCookie("Email", data.email, { path: '/' }); // Add options as needed
            setCookie("AuthToken", data.token, { path: '/' }); // Add options as needed
      
            // Redirect to a different page or reload the current page
            window.location.reload(); // Consider redirecting to a specific page instead
          }
        } catch (err) {
          console.error('Fetch error:', err);
          alert('An unexpected error occurred. Please try again later.');
        }
      };


  return (
    <div>
        Okay, can We Log in
        <form onSubmit={AttemptLogIn}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={emailInput}
            onChange={(e) => handleChange(e, setemailInput)}
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={passwordInput}
            onChange={(e) => handleChange(e, setpasswordInput)}
            required
          />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
