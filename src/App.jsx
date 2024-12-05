


import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Registration from "./components/Registration";


const App = () => {
  return (
    <div className="text-white font-poppins overflow-x-hidden">
      

      <Router>
        <Routes>
        <Route path="/" element={<Registration />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;