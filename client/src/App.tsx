import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./components/Auth";
import Homepage from "./pages/Homepage";
import SecondPage from "./pages/SecondPage";
import NotFound from "./pages/NotFoundPage";
import NewEvent from "./pages/NewEvent";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/NewEvent" element={<NewEvent />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/Signup" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
