import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HWProblem from "./pages/HWProblem";
import DHProblem from "./pages/DHProblem";
import ESProblem from "./pages/ESProblem";
import GAProblem from "./pages/GAProblem";
import "./cssFile/App.css";

const App = () => {
  return (
    <div className="MainContainer">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/hwproblem" element={<HWProblem />} />
          <Route path="/dhproblem" element={<DHProblem />} />
          <Route path="/esproblem" element={<ESProblem />} />
          <Route path="/gaproblem" element={<GAProblem />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
