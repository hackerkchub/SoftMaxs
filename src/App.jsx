import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import HeroSlider from "./components/HeroSlider";
import Footer from "./components/Footer";
import PartnerStrip from "./components/PartnerStrip";
import TechnologyStats from "./components/TechnologyStats";
import OurServices from "./components/OurServices";
import ImpactSection from "./components/ImpactSection";
import SuccessStories from "./components/SuccessStories";
import DeliveringProducts from "./components/DeliveringProducts";
import HappyCustomers from "./components/HappyCustomers";
import ConsultationForm from "./components/CounsulationForm";
import FAQSection from "./components/FAQSection";
import OfficeLocations from "./components/OfficeLocations";

// 🔥 NEW — Help Operator Component
import HelpOperator from "./components/HelpOperator";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />

      <HeroSlider />
      <PartnerStrip />
      <TechnologyStats />
      <OurServices />
      <ImpactSection />
      <SuccessStories />
      <DeliveringProducts />
      <HappyCustomers />
      <ConsultationForm />
      <FAQSection />
      <OfficeLocations />

      <Footer />

      {/* 🔥 Fixed bottom-right permanent help operator */}
      <HelpOperator />
    </>
  );
}
