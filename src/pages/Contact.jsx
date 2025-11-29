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

// ⭐ Full-Section Background with Frosted Blur
const blurredSection = {
  width: "100%",
  padding: "80px 0",

  // Background image behind entire section
  backgroundImage:
    "url('https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=60&fm=webp')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  position: "relative",
};

// ⭐ Blur layer (covers full section behind content)
const blurOverlay = {
  position: "absolute",
  inset: 0,
  background: "rgba(0,0,0,0.40)",
  backdropFilter: "blur(18px)",
  WebkitBackdropFilter: "blur(18px)",
};

// ⭐ Content wrapper (no blur, no border, normal UI)
const sectionContent = {
  position: "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "0 20px",
};

export default function Contact() {
  return (
    <>
      <Navbar />

      {/* ⭐ TOP SECTION: FULL BLURRED AREA BEHIND CONTENT */}
      <section style={blurredSection}>
        <div style={blurOverlay}></div>

        <div style={sectionContent}>
          <ContactForm />
         
        </div>
      </section>

      {/* ⭐ NEXT SECTIONS - NORMAL */}
       <ImpactSection />
       <Testimonials />
      <ConsultationForm />
      <OfficeLocations />
      <Footer />
    </>
  );
}
