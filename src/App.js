import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contrato from "./Components/Contrato";
import License from "./Components/License";
import Controle from "./Components/Controle";
import LayoutHome from "./Components/LayoutHome";


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<LayoutHome />} />
        <Route path="/formulario" element={<Contrato />} />
        <Route path="/licença" element={<License />} />
        <Route path="/license-table" element={<Controle />} />
      </Routes>
    </Router>
  )
};

export default App;
