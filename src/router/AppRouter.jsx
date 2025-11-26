import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Contact from "../pages/Contact"; 
import OfferingPage from "../pages/OfferingPage";
import IndustriesPage from "../pages/IndustriesPage";
import Ecommerce from "../pages/Ecommerce";
import Careers from "../pages/Careers";
import Pricing from "../pages/Pricing";
import WebDevelopmentPage from "../pages/WebDevelopmentPage";
import AIAutomationPage from "../pages/AIAutomationPage";
import DigitalMarketingPage from "../pages/DigitalMarketingPage";
import CloudDevOpsPage from "../pages/CloudDevOpsPage";
import BlockchainSolutionsPage from "../pages/BlockchainPage";
import DatabaseSolutionsPage from "../pages/DatabaseSolutionsPage";
import UiUxPage from "../pages/UiUxPage";
import IotPage from "../pages/IotPage";
import CxConsultingPage from "../pages/CxConsultingPage";
import FAQ from "../pages/FAQ";
import BookCall from "../pages/BookCall";
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
      <Route path="/ecommerce" element={<Ecommerce />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/web-development" element={<WebDevelopmentPage />} />
      <Route path="/ai-automation" element={<AIAutomationPage />} />
      <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/book-call" element={<BookCall />} />
      <Route path="/cloud-devops" element={<CloudDevOpsPage />} />
      <Route path="/ui-ux" element={<UiUxPage />} />
      <Route path="/blockchain-solutions" element={<BlockchainSolutionsPage />} />
      <Route path="/database-solutions" element={<DatabaseSolutionsPage />} />
      <Route path="/iot-solutions" element={<IotPage />} />
      <Route path="/cx-consulting" element={<CxConsultingPage />} />
    </Routes>
  );
}
