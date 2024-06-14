import React, { useState } from "react";

const SignUp: React.FC = () => {

    const [newUserData, setnewUserData] = useState({
        email: "",
        firstName: "",
        lastName: "",
        password: ""
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setnewUserData((data) => ({ ...data, [name]: value }));
      };
    
    const RegisterUser = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/users/register`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(newUserData),
            }
          );
          if (response.status === 200) {
            console.log("User Registered");
          }
        } catch (err) {
          console.error(err);
        }
      };

    return (

    <div>
    <form onSubmit={RegisterUser}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" value={newUserData.email} onChange={handleChange}/>
      
      <br/>
      
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" name="firstName" value={newUserData.firstName} onChange={handleChange}/>
      
      <br/>

      <label htmlFor="lastName">Last Name</label>
      <input type="text" id="lastName" name="lastName" value={newUserData.lastName} onChange={handleChange}/>
      
      <br/>

      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" value={newUserData.password} onChange={handleChange}/>
      
      <br/>

      <input type="submit" value="Register" />
    </form>
      </div>
    );
  };
  
  export default SignUp;
