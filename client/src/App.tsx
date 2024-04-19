import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SecondPage from "./pages/SecondPage";
import NotFound from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
