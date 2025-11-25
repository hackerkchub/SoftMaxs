import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HelpOperator from "../components/HelpOperator";
import Swal from "sweetalert2";

/* NOTE: OfficeLocation removed as requested */

const Wrapper = styled.div`
  background: #050816;
  color: #ffffff;
  min-height: 100vh;
`;

/* ========== SECTION 1 – BANNER ========== */

const Banner = styled.section`
  position: relative;
  width: 100%;
  height: 380px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 40px 60px;
  background: url("/banner-bg.jpg") center/cover no-repeat;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(10, 15, 35, 0.82);
    backdrop-filter: blur(10px);
  }

  > * {
    position: relative;
    z-index: 2;
  }

  @media (max-width: 768px) {
    height: auto;
    padding: 28px 20px;
    align-items: flex-start;
  }
`;

const BannerText = styled.div`
  max-width: 640px;

  span.logo {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 16px;
    margin-bottom: 10px;
    opacity: 0.9;
  }

  h1 {
    font-size: 42px;
    font-weight: 700;
    line-height: 1.3;
  }

  p {
    margin-top: 15px;
    font-size: 19px;
    font-weight: 600;
    color: #ffc107;
  }

  small {
    margin-top: 10px;
    display: block;
    font-size: 11px;
    opacity: 0.75;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 26px;
    }

    p {
      font-size: 15px;
    }
  }
`;

/* ========== SECTION 2 – SERVICES MENU + PLANS ========== */

const ServicesSection = styled.section`
  display: flex;
  gap: 40px;
  padding: 60px 60px 40px;

  @media (max-width: 992px) {
    padding: 28px 20px 18px;
  }

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    gap: 18px;
  }
`;

const PlansArea = styled.div`
  flex: 1;
`;

const PlansHeading = styled.h2`
  font-size: 30px;
  margin-bottom: 10px;
`;

const PlansSubText = styled.p`
  font-size: 14px;
  color: #c2c8ff;
  margin-bottom: 25px;
`;

const HighlightTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  font-size: 12px;
  border-radius: 999px;
  background: rgba(0, 194, 255, 0.12);
  color: #00c2ff;
  margin-bottom: 10px;
`;

const BillingSwitch = styled.div`
  display: flex;
  gap: 8px;
  margin: 12px 0 18px;
  flex-wrap: wrap;
`;

const BillingButton = styled.button`
  background: ${({ active }) => (active ? "#22d3ee" : "transparent")};
  color: ${({ active }) => (active ? "#020617" : "#e5e7ff")};
  border: 1px solid rgba(148, 163, 253, 0.35);
  padding: 8px 12px;
  border-radius: 999px;
  cursor: pointer;
  font-size: 13px;
`;

const PlanCard = styled.div`
  background: radial-gradient(circle at top left, #1f2a68, #0b1023);
  border-radius: 16px;
  padding: 24px 22px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
  max-width: 520px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 18px;
  }
`;

const PlanName = styled.h3`
  font-size: 22px;
  margin-bottom: 4px;
`;

const PlanPrice = styled.div`
  font-size: 26px;
  font-weight: 700;
  color: #00e0ff;
  margin-bottom: 6px;
`;

const PlanIdeal = styled.p`
  font-size: 13px;
  color: #c6d1ff;
  margin-bottom: 12px;
`;

const PlanFeatureList = styled.ul`
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 13px;

  li + li {
    margin-top: 4px;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const PrimaryButton = styled.button`
  background: #00c2ff;
  border-radius: 999px;
  border: none;
  padding: 9px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  color: #020617;
  transition: 0.25s;

  &:hover {
    background: #ffffff;
  }
`;

const GhostButton = styled.button`
  background: transparent;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 253, 0.8);
  padding: 8px 18px;
  font-size: 13px;
  cursor: pointer;
  color: #e5e7ff;
  transition: 0.25s;

  &:hover {
    background: rgba(148, 163, 253, 0.25);
  }
`;

/* Sticky sidebar with categories + dropdown items */

const SidebarWrapper = styled.aside`
  width: 280px;
  position: sticky;
  top: 110px;
  align-self: flex-start;

  @media (max-width: 992px) {
    position: relative;
    width: 100%;
    top: 0;
  }
`;

const CategoryBlock = styled.div`
  background: rgba(15, 23, 42, 0.9);
  border-radius: 14px;
  margin-bottom: 14px;
  border: 1px solid rgba(148, 163, 253, 0.4);
  overflow: hidden;
`;

const CategoryHeader = styled.button`
  width: 100%;
  text-align: left;
  background: rgba(15, 23, 42, 0.95);
  padding: 10px 14px;
  border: none;
  color: #e5e7ff;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const CategoryBody = styled.div`
  max-height: ${({ open }) => (open ? "600px" : "0px")};
  overflow: hidden;
  transition: max-height 0.25s ease;
`;

const ServiceItem = styled.button`
  width: 100%;
  padding: 8px 14px;
  padding-left: 20px;
  border: none;
  background: ${({ active }) =>
    active ? "rgba(37, 99, 235, 0.45)" : "transparent"};
  color: ${({ active }) => (active ? "#ffffff" : "#d1d5ff")};
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: 0.25s;

  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 999px;
    background: ${({ active }) => (active ? "#22d3ee" : "#60a5fa")};
    box-shadow: ${({ active }) =>
      active ? "0 0 10px #22d3ee" : "0 0 7px #1d4ed8"};
  }

  &:hover {
    background: rgba(55, 65, 194, 0.45);
  }
`;

/* ========== MODAL SLIDER FOR ALL PLANS ========== */

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 80;
`;

const ModalBox = styled.div`
  width: 90%;
  max-width: 720px;
  background: radial-gradient(circle at top left, #1e293b, #020617);
  border-radius: 18px;
  padding: 24px 22px 26px;
  border: 1px solid rgba(148, 163, 253, 0.6);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);

  @media (max-width: 480px) {
    padding: 16px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const ModalTitle = styled.h3`
  font-size: 20px;
`;

const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: #e5e7ff;
  font-size: 20px;
  cursor: pointer;
`;

const SliderWrapper = styled.div`
  margin-top: 10px;
`;

const Slide = styled.div`
  border-radius: 14px;
  padding: 18px 16px;
  border: 1px solid rgba(148, 163, 253, 0.5);
  background: rgba(15, 23, 42, 0.9);
`;

const SlideNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
  align-items: center;
`;

const Dots = styled.div`
  display: flex;
  gap: 6px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: ${({ active }) => (active ? "#22d3ee" : "#475569")};
`;

const NavButton = styled.button`
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 253, 0.7);
  background: transparent;
  color: #e5e7ff;
  padding: 5px 10px;
  font-size: 12px;
  cursor: pointer;
`;

/* ========== SECTION 3 – YEARLY / QUARTERLY / HALF-YEAR PROMO ========== */

const PromoSection = styled.section`
  padding: 28px 60px;
  background: linear-gradient(180deg, rgba(2,6,23,1) 0%, rgba(3,7,27,1) 100%);

  @media (max-width: 768px) {
    padding: 18px 20px;
  }
`;

const PromoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const PromoCard = styled.div`
  background: radial-gradient(circle at top left, #0b1023, #07132a);
  border-radius: 14px;
  padding: 18px;
  border: 1px solid rgba(148, 163, 253, 0.25);
  cursor: pointer;
`;

const PromoTag = styled.span`
  display: inline-block;
  padding: 6px 10px;
  border-radius: 999px;
  background: rgba(99,102,241,0.12);
  color: #6366f1;
  font-size: 12px;
  margin-bottom: 8px;
`;

const PromoTitle = styled.h4`
  font-size: 18px;
  margin: 6px 0 8px;
`;

const PromoText = styled.p`
  font-size: 13px;
  color: #cbd5f5;
  margin-bottom: 12px;
`;

const PromoList = styled.ul`
  font-size: 13px;
  margin-left: 16px;
`;

/* ========== SECTION 4 – FAQ ACCORDION ========== */

const FAQSection = styled.section`
  padding: 40px 60px 30px;
  background: #020617;

  @media (max-width: 768px) {
    padding: 28px 20px 18px;
  }
`;

const FAQHeader = styled.h2`
  font-size: 28px;
  margin-bottom: 18px;
`;

const FAQItem = styled.div`
  border-bottom: 1px solid rgba(30, 64, 175, 0.7);
  padding: 10px 0;
`;

const FAQQuestion = styled.button`
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: #e5e7ff;
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const FAQAnswer = styled.div`
  max-height: ${({ open }) => (open ? "260px" : "0px")};
  overflow: hidden;
  transition: max-height 0.25s ease;
  font-size: 14px;
  color: #cbd5f5;
  padding-top: ${({ open }) => (open ? "6px" : "0")};
`;

/* ========== SECTION 5 – FORM + DISCOUNT SLIDER (same as before) ========== */

const FormSection = styled.section`
  display: flex;
  gap: 40px;
  padding: 50px 60px;
  background: #020617;
  border-top: 1px solid rgba(30, 64, 175, 0.8);

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 28px 20px;
    gap: 20px;
  }
`;

const DiscountArea = styled.div`
  flex: 1;
`;

const DiscountCard = styled.div`
  background: radial-gradient(circle at top, #1d4ed8, #0b1023);
  border-radius: 18px;
  padding: 24px 22px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(191, 219, 254, 0.6);
`;

const DiscountTag = styled.span`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 999px;
  background: rgba(251, 191, 36, 0.2);
  color: #fbbf24;
  font-size: 12px;
  margin-bottom: 10px;
`;

const DiscountTitle = styled.h3`
  font-size: 22px;
  margin-bottom: 8px;
`;

const DiscountText = styled.p`
  font-size: 14px;
  color: #e0f2fe;
  margin-bottom: 14px;
`;

const SliderDots = styled.div`
  display: flex;
  gap: 5px;
  margin-top: 8px;
`;

const SliderDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background: ${({ active }) => (active ? "#fbbf24" : "#0f172a")};
`;

const FormArea = styled.div`
  flex: 1;
  background: #020617;
`;

const FormCard = styled.form`
  background: #020617;
  border-radius: 18px;
  border: 1px solid rgba(30, 64, 175, 0.7);
  padding: 24px 22px;
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.6);
`;

const FormTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 6px;
`;

const FormSub = styled.p`
  font-size: 13px;
  color: #9ca3ff;
  margin-bottom: 18px;
`;

const Field = styled.div`
  margin-bottom: 14px;
`;

const Label = styled.label`
  display: block;
  font-size: 13px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 9px 10px;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 253, 0.8);
  background: #020617;
  color: #e5e7ff;
  font-size: 13px;

  &:focus {
    outline: none;
    border-color: #22d3ee;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 9px 10px;
  border-radius: 10px;
  border: 1px solid rgba(148, 163, 253, 0.8);
  background: #020617;
  color: #e5e7ff;
  font-size: 13px;
  min-height: 90px;

  &:focus {
    outline: none;
    border-color: #22d3ee;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  margin-top: 6px;
  padding: 11px 0;
  border-radius: 999px;
  border: none;
  background: #fbbf24;
  color: #020617;
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: #fde047;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

/* HelpOperator wrapper */

const HelpWrapper = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
  z-index: 120;
`;

/* ========== DATA ========== */

const serviceMenu = [
  {
    category: "Software Development",
    key: "software",
    items: [
      "Mobile App Development",
      "Web Application Development",
      "E-commerce Development",
      "Database Solutions (MySQL, MongoDB)",
    ],
  },
  {
    category: "Emerging Technologies",
    key: "emerging",
    items: [
      "AI & Automation",
      "Cloud & DevOps",
      "IoT Engineering",
      "Blockchain Solutions",
    ],
  },
  {
    category: "Design & Strategy",
    key: "design",
    items: ["UI/UX Engineering", "CX Consulting"],
  },
  {
    category: "Platform Specialization",
    key: "platform",
    items: ["Shopify Development", "Magento Development", "WordPress Development"],
  },
  {
    category: "Digital Marketing",
    key: "marketing",
    items: ["Digital Marketing Development"],
  },
];

/* Plans now include a numeric monthlyAmount for discount calculations */
const defaultPlans = [
  {
    name: "Basic / Starter",
    monthlyAmount: 399,
    price: "$399 / month",
    idealFor: "Early-stage businesses validating their product or idea.",
    features: [
      "Requirement analysis & technical planning",
      "Sprint-based development & weekly updates",
      "Bug fixing & basic optimizations",
      "Email support during business hours",
    ],
  },
  {
    name: "Pro / Growth",
    monthlyAmount: 899,
    price: "$899 / month",
    idealFor: "Growing teams needing a predictable engineering partner.",
    features: [
      "Everything in Starter",
      "Performance, security & scalability improvements",
      "Dedicated project manager",
      "Priority support via email & chat",
    ],
  },
  {
    name: "UltraPro / Scale",
    monthlyAmount: 1299,
    price: "$1299 / month",
    idealFor: "Scale-ups & enterprises with complex requirements.",
    features: [
      "Everything in Growth",
      "Solution architect + senior engineering pod",
      "24/7 incident support & SLAs",
      "Custom reporting & governance",
    ],
  },
];

const marketingPlans = [
  {
    name: "Basic / Starter",
    monthlyAmount: 399,
    price: "$399 / month",
    idealFor: "Startups & small businesses beginning their digital marketing.",
    features: [
      "Initial website & funnel audit",
      "Keyword research (up to 20 keywords)",
      "On-page SEO for 5 pages",
      "1 blog post / month",
      "Social media for 1 platform (5 posts/week)",
    ],
  },
  {
    name: "Pro / Professional",
    monthlyAmount: 899,
    price: "$899 / month",
    idealFor: "Growing brands focused on lead generation & conversions.",
    features: [
      "Everything in Starter",
      "Advanced keyword research (up to 50 keywords)",
      "Google Ads management (up to $1,000 ad spend)",
      "2 blog posts + 1 premium article / month",
      "Social media on 2 platforms (10 posts/week)",
    ],
  },
  {
    name: "UltraPro / Enterprise",
    monthlyAmount: 1299,
    price: "$1299 / month",
    idealFor: "Enterprises seeking aggressive market leadership.",
    features: [
      "Everything in Professional",
      "Full market & brand audit",
      "Omni-channel social media & ads",
      "Advanced email & CRM integration",
      "Custom analytics / BI dashboards",
    ],
  },
];

const faqItems = [
  {
    q: "How soon can I expect to see results?",
    a: "Paid campaigns and landing pages can start generating traffic within days. Sustainable organic SEO and brand growth generally take 3–6 months depending on competition and your current baseline.",
  },
  {
    q: "Can I combine multiple services in one plan?",
    a: "Yes. Many clients combine development, design, and digital marketing into a single integrated engagement. Tell us your priorities in the form and we’ll propose a bundled plan.",
  },
  {
    q: "Do I need to provide content and creatives?",
    a: "You can, but it's not mandatory. Our Pro and UltraPro tiers include content strategy, copywriting and creative support so we can move fast without blocking on your internal team.",
  },
  {
    q: "What happens after I submit the form?",
    a: "You’ll receive a confirmation email, and one of our consultants will review your brief and reach out within 24 hours with next steps and available slots.",
  },
];

const discountSlides = [
  {
    tag: "Limited Time Offer",
    title: "20% OFF on Digital Marketing Retainers",
    text: "Lock in your monthly retainer now and secure discounted pricing for the first 3 months of engagement.",
  },
  {
    tag: "Bundle & Save",
    title: "10% OFF Dev + Marketing Combo",
    text: "Combine eCommerce development with performance marketing and save on your total monthly commitment.",
  },
  {
    tag: "Founders Special",
    title: "Startup Friendly Plans",
    text: "Bootstrapped or early-stage? Ask us about lean launch packages and flexible payment options.",
  },
];

/* helpful util to format currency */
const money = (num) => {
  if (num == null) return "Custom Quote";
  return `$${Number(Math.round(num)).toLocaleString()}`;
};

/* discount calculation: returns formatted string for given cycle */
const calcCyclePrice = (monthlyAmount, cycle) => {
  if (monthlyAmount == null) return "Custom Quote";

  const base = monthlyAmount;

  if (cycle === "monthly") {
    // 20% off on monthly as requested
    const discounted = base * (1 - 0.2);
    const saved = base - discounted;
    return `${money(discounted)} / month • Save ${money(saved)}`;
  }

  if (cycle === "quarterly") {
    // 25% off
    const discounted = base * (1 - 0.25);
    const total = discounted * 3;
    const saved = (base - discounted) * 3;
    return `${money(total)} billed quarterly • Save ${money(saved)}`;
  }

  if (cycle === "halfyear") {
    // 30% off
    const discounted = base * (1 - 0.3);
    const total = discounted * 6;
    const saved = (base - discounted) * 6;
    return `${money(total)} billed half-yearly • Save ${money(saved)}`;
  }

  if (cycle === "yearly") {
    // 40% off + 1 month free
    const discounted = base * (1 - 0.4);
    const total = discounted * 12;
    const saved = (base - discounted) * 12;
    return `${money(total)} billed yearly • Save ${money(saved)} + 1 month free`;
  }

  return money(base);
};

/* ========== COMPONENT ========== */

const Pricing = () => {
  const [openCategoryKey, setOpenCategoryKey] = useState(serviceMenu[0].key);
  const [selectedService, setSelectedService] = useState(serviceMenu[0].items[0]);

  const [showModal, setShowModal] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  const [discountIndex, setDiscountIndex] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    brief: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* billing cycle state: monthly / quarterly / halfyear / yearly */
  const [billingCycle, setBillingCycle] = useState("monthly");

  /* select plans set based on service */
  const plansForSelected = useMemo(() => {
    return selectedService === "Digital Marketing Development"
      ? marketingPlans
      : defaultPlans;
  }, [selectedService]);

  const mainPlan = plansForSelected[0];

  // auto slider for discount cards
  useEffect(() => {
    const id = setInterval(() => {
      setDiscountIndex((prev) => (prev + 1) % discountSlides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name.trim()) return "Please enter your full name.";
    if (!formData.email.trim()) return "Please enter your email address.";

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email.trim()))
      return "Please enter a valid email address.";

    if (!formData.brief.trim())
      return "Please share a short project brief so we can help you better.";

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();

    if (error) {
      Swal.fire({
        title: "Please check your input",
        text: error,
        icon: "warning",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0",
          subject: "New project enquiry from SoftMax Pricing Page",
          from_name: formData.name,
          email: formData.email,
          company_name: formData.company,
          monthly_budget: formData.budget,
          project_brief: formData.brief,
          selected_service: selectedService,
          billing_cycle: billingCycle,
        }),
      });

      const result = await response.json();

      if (result.success) {
        Swal.fire({
          title: "Thank you!",
          text: "Your details have been submitted. Our team will get back to you within 24 hours.",
          icon: "success",
          confirmButtonColor: "#22c55e",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          budget: "",
          brief: "",
        });
      } else {
        Swal.fire({
          title: "Something went wrong",
          text: result.message || "Please try again in a few minutes.",
          icon: "error",
        });
      }
    } catch (err) {
      Swal.fire({
        title: "Network error",
        text: "We were unable to submit your request. Please check your connection and try again.",
        icon: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* scroll helper to plans section */
  const scrollToPlans = () => {
    const el = document.getElementById("plans-area");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Wrapper>
      <Navbar />

      {/* SECTION 1: Banner */}
      <Banner>
        <BannerText>
          <span className="logo">🚀 SoftMax · Unlimited Growth</span>
          <h1>Limited Time Offer! Accelerate Your Growth with SoftMax!</h1>
          <p>Get 20% OFF all new projects & digital marketing plans this month!</p>
          <small>*Terms and conditions apply. Offer valid for new customers only.</small>
        </BannerText>
      </Banner>

      {/* SECTION 2: Services Menu + Plans */}
      <ServicesSection id="plans-area">
        <PlansArea>
          <HighlightTag>{selectedService}</HighlightTag>
          <PlansHeading>Plans for {selectedService}</PlansHeading>
          <PlansSubText>
            Select a service from the menu to explore curated plans. Choose billing
            frequency to see discounted ranges for quarterly, half-yearly and yearly billing.
          </PlansSubText>

          <BillingSwitch>
            <BillingButton
              type="button"
              active={billingCycle === "monthly"}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly (20% off)
            </BillingButton>

            <BillingButton
              type="button"
              active={billingCycle === "quarterly"}
              onClick={() => setBillingCycle("quarterly")}
            >
              Quarterly (25% off)
            </BillingButton>

            <BillingButton
              type="button"
              active={billingCycle === "halfyear"}
              onClick={() => setBillingCycle("halfyear")}
            >
              Half-year (30% off)
            </BillingButton>

            <BillingButton
              type="button"
              active={billingCycle === "yearly"}
              onClick={() => setBillingCycle("yearly")}
            >
              Yearly (40% off + 1 month free)
            </BillingButton>
          </BillingSwitch>

          <PlanCard>
            <PlanName>{mainPlan.name}</PlanName>
            <PlanPrice>{calcCyclePrice(mainPlan.monthlyAmount, billingCycle)}</PlanPrice>
            <PlanIdeal>{mainPlan.idealFor}</PlanIdeal>
            <PlanFeatureList>
              {mainPlan.features.slice(0, 4).map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </PlanFeatureList>
            <ButtonsRow>
              <PrimaryButton>Purchase Plan</PrimaryButton>
              <GhostButton onClick={() => { setShowModal(true); setActiveSlide(0); }}>
                View all plans & details
              </GhostButton>
            </ButtonsRow>
          </PlanCard>

          {/* small list for other tiers kept as-is (no new boxes) */}
          {/* <div style={{ marginTop: 16 }}>
            {plansForSelected.slice(1).map((p, i) => (
              <div key={i} style={{ marginTop: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontWeight: 700 }}>{p.name}</div>
                    <div style={{ fontSize: 13, color: '#c6d1ff' }}>{p.idealFor}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>{calcCyclePrice(p.monthlyAmount, billingCycle)}</div>
                </div>
              </div>
            ))}
          </div> */}
        </PlansArea>

        <SidebarWrapper>
          {serviceMenu.map((cat) => (
            <CategoryBlock key={cat.key}>
              <CategoryHeader
                type="button"
                onClick={() =>
                  setOpenCategoryKey((prev) => (prev === cat.key ? "" : cat.key))
                }
              >
                <span>{cat.category}</span>
                <span>{openCategoryKey === cat.key ? "−" : "+"}</span>
              </CategoryHeader>
              <CategoryBody open={openCategoryKey === cat.key}>
                {cat.items.map((item) => (
                  <ServiceItem
                    key={item}
                    type="button"
                    active={selectedService === item}
                    onClick={() => {
                      setSelectedService(item);
                      setBillingCycle('monthly');
                    }}
                  >
                    {item}
                  </ServiceItem>
                ))}
              </CategoryBody>
            </CategoryBlock>
          ))}
        </SidebarWrapper>
      </ServicesSection>

      {/* MODAL WITH SLIDER – ALL PLANS */}
      {showModal && (
        <ModalOverlay>
          <ModalBox>
            <ModalHeader>
              <ModalTitle>Plans for {selectedService}</ModalTitle>
              <CloseButton onClick={() => setShowModal(false)}>×</CloseButton>
            </ModalHeader>

            <SliderWrapper>
              <Slide>
                <PlanName>{plansForSelected[activeSlide].name}</PlanName>
                <PlanPrice>{calcCyclePrice(plansForSelected[activeSlide].monthlyAmount, billingCycle)}</PlanPrice>
                <PlanIdeal>{plansForSelected[activeSlide].idealFor}</PlanIdeal>
                <PlanFeatureList>
                  {plansForSelected[activeSlide].features.map((f, idx) => (
                    <li key={idx}>{f}</li>
                  ))}
                </PlanFeatureList>
                <PrimaryButton>Purchase this plan</PrimaryButton>
              </Slide>

              <SlideNav>
                <NavButton
                  type="button"
                  onClick={() =>
                    setActiveSlide((s) => (s === 0 ? plansForSelected.length - 1 : s - 1))
                  }
                >
                  ⟵ Previous
                </NavButton>
                <Dots>
                  {plansForSelected.map((_, idx) => (
                    <Dot key={idx} active={idx === activeSlide} />
                  ))}
                </Dots>
                <NavButton
                  type="button"
                  onClick={() =>
                    setActiveSlide((s) => (s === plansForSelected.length - 1 ? 0 : s + 1))
                  }
                >
                  Next ⟶
                </NavButton>
              </SlideNav>
            </SliderWrapper>
          </ModalBox>
        </ModalOverlay>
      )}

      {/* NEW: Promo Section (Yearly / Quarterly / Half-year cards) */}
     <PromoSection>
  <PlansHeading>Save More with Longer Billing Cycles</PlansHeading>
  <PlansSubText>
    Unlock smarter pricing with long-term billing cycles. Commit more, save more —
    and get predictable growth support throughout the year.
  </PlansSubText>

  <PromoGrid>
    {/* YEARLY */}
    <PromoCard onClick={() => { setBillingCycle("yearly"); scrollToPlans(); }}>
      <PromoTag>Yearly</PromoTag>
      <PromoTitle>Save 40% • Best value + 1 month free</PromoTitle>
      <PromoText>
        Perfect for brands scaling steadily and needing consistent engineering & marketing support.
        Pay annually and unlock our biggest discount with complimentary extra validity.
      </PromoText>
      <PromoList>
        <li>Flat 40% savings compared to monthly billing</li>
        <li>12 months billed upfront with transparent cost clarity</li>
        <li>Extra 1 month service added at no additional cost</li>
      </PromoList>
    </PromoCard>

    {/* HALF YEAR */}
    <PromoCard onClick={() => { setBillingCycle("halfyear"); scrollToPlans(); }}>
      <PromoTag>Half-year</PromoTag>
      <PromoTitle>Save 30% • Most balanced choice</PromoTitle>
      <PromoText>
        A great mid-term option for growing businesses seeking strong savings without a long commitment.
        Ideal for evolving product cycles and seasonal brands.
      </PromoText>
      <PromoList>
        <li>Save 30% compared to monthly billing</li>
        <li>6-month predictable budgeting with reduced overhead</li>
        <li>Best for semi-annual campaigns or product growth phases</li>
      </PromoList>
    </PromoCard>

    {/* QUARTERLY */}
    <PromoCard onClick={() => { setBillingCycle("quarterly"); scrollToPlans(); }}>
      <PromoTag>Quarterly</PromoTag>
      <PromoTitle>Save 25% • Fast growth booster</PromoTitle>
      <PromoText>
        Tailored for startups, campaigns, and brands testing new initiatives.
        Quarterly billing gives flexibility while still offering sizable discounts.
      </PromoText>
      <PromoList>
        <li>25% savings vs monthly billing</li>
        <li>3-month commitment keeps cash flow agile</li>
        <li>Perfect for pilots, launches, and performance pushes</li>
      </PromoList>
    </PromoCard>
  </PromoGrid>
</PromoSection>

      {/* SECTION 3: FAQ */}
      <FAQSection>
        <FAQHeader>Common Questions About Our Plans</FAQHeader>
        {faqItems.map((item, idx) => {
          const open = activeFAQIndex === idx;
          return (
            <FAQItem key={idx}>
              <FAQQuestion type="button" onClick={() => setActiveFAQIndex(open ? null : idx)}>
                <span>{item.q}</span>
                <span>{open ? "−" : "+"}</span>
              </FAQQuestion>
              <FAQAnswer open={open}>
                <p>{item.a}</p>
              </FAQAnswer>
            </FAQItem>
          );
        })}
      </FAQSection>

      {/* SECTION 4: FORM + DISCOUNT SLIDER */}
      <FormSection>
        <DiscountArea>
          <DiscountCard>
            <DiscountTag>{discountSlides[discountIndex].tag}</DiscountTag>
            <DiscountTitle>{discountSlides[discountIndex].title}</DiscountTitle>
            <DiscountText>{discountSlides[discountIndex].text}</DiscountText>
            <SliderDots>
              {discountSlides.map((_, idx) => (
                <SliderDot key={idx} active={idx === discountIndex} />
              ))}
            </SliderDots>
          </DiscountCard>
        </DiscountArea>

        <FormArea>
          <FormCard onSubmit={handleSubmit}>
            <FormTitle>Please share details so we can discuss your project.</FormTitle>
            <FormSub>Fill the form and our consultant will get back within 24 hours.</FormSub>

            <Field>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Enter your full name"
              />
            </Field>

            <Field>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="you@company.com"
              />
            </Field>

            <Field>
              <Label htmlFor="company">Company Name</Label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleFormChange}
                placeholder="Brand / Store name"
              />
            </Field>

            <Field>
              <Label htmlFor="budget">Approx. Monthly Revenue / Budget</Label>
              <Input
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleFormChange}
                placeholder="₹5L–₹10L / Flexible / Not sure"
              />
            </Field>

            <Field>
              <Label htmlFor="brief">Project Brief *</Label>
              <Textarea
                id="brief"
                name="brief"
                value={formData.brief}
                onChange={handleFormChange}
                placeholder="Tell us about your store, platform, timelines and goals..."
              />
            </Field>

            <Field>
              <Label>Selected Service</Label>
              <div style={{ marginBottom: 8 }}>{selectedService} • Billing: {billingCycle}</div>
            </Field>

            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Request Free Quote →"}
            </SubmitButton>
          </FormCard>
        </FormArea>
      </FormSection>

      {/* Footer */}
      <Footer />

      {/* Help Operator – always bottom right */}
      <HelpWrapper>
        <HelpOperator />
      </HelpWrapper>
    </Wrapper>
  );
};

export default Pricing;
