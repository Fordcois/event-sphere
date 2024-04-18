import React, { useState } from "react";
import { useCookies } from "react-cookie";

function Auth() {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isLogin, setisLogin] = useState(true);
  const [error, setError] = useState("");

  const [email, setEmail] = useState(null);
  const [password, setpassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const viewLogin = (status) => {
    setError("");
    setisLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    console.log(password);
    if (!isLogin && password !== confirmPassword) {
      setError("Make sure passwords match!");
      return;
    }

    const response = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/${endpoint}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

    const data = await response.json();

    if (data.detail) {
      setError(data.detail);
    } else {
      setCookie("Email", data.email);
      setCookie("AuthToken", data.token);

      window.location.reload();
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2> {isLogin ? "Please Log in" : "Please sign up"}</h2>
          <input
            type="email"
            placeholder="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(event) => setpassword(event.target.value)}
          />
          {!isLogin && (
            <input
              type="password"
              placeholder="confirm password"
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
          )}
          <input
            type="submit"
            className="edit"
            onClick={(event) =>
              handleSubmit(event, isLogin ? "login" : "signup")
            }
          />
          {error && <p>{error}</p>}
        </form>
        <div className="auth-options">
          <button
            onClick={() => viewLogin(false)}
            style={{
              backgroundColor: !isLogin
                ? "rgb(255,255,255)"
                : "rgb(188,188,188)",
            }}
          >
            Sign Up
          </button>
          <button
            onClick={() => viewLogin(true)}
            style={{
              backgroundColor: !isLogin
                ? "rgb(188,188,188)"
                : "rgb(255,255,255)",
            }}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Auth;
