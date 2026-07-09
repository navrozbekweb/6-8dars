import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProdDetail from "./pages/ProdDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/product/:id" element={<ProdDetail />} />
    </Routes>
  );
}

export default App;
