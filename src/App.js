import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/home";

import "./App.css";


function App() {
  return (
    <Router>
      <div className="App">
   {/* <Header/> */}
        <Routes>
          <Route path="/" element={<Home />} />
    
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
