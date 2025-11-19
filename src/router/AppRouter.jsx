import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact"; 
import OfferingPage from "../pages/OfferingPage";
import IndustriesPage from "../pages/IndustriesPage";
// future pages
// import About from "../pages/About";
// import Services from "../pages/Services";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/offerings" element={<OfferingPage />} />
      <Route path="/industries" element={<IndustriesPage />} />
    </Routes>
  );
}
