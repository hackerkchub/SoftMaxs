// src/pages/Contact.jsx
import React from "react";

// ---- Import Navbar ----
import Navbar from "../components/Navbar";

// ---- Import All Components ----
import ContactForm from "../components/ContactForm";
import ImpactSection from "../components/ImpactSection";
import Testimonials from "../components/Testimonials";
import ConsultationForm from "../components/CounsulationForm";
import OfficeLocations from "../components/OfficeLocations";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      {/* 🔵 TOP NAVBAR */}
      <Navbar />

      {/* 1️⃣ Contact Form Section */}
      <ContactForm />

      {/* 2️⃣ Impact / Stats Section */}
      <ImpactSection />

      {/* 3️⃣ Testimonials Slider */}
      <Testimonials />

      {/* 4️⃣ Consultation CTA Section */}
      <ConsultationForm />

      {/* 5️⃣ Office Locations */}
      <OfficeLocations />

      {/* 6️⃣ Footer */}
      <Footer />
    </>
  );
}
