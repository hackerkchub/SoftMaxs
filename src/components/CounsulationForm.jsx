import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

/* ------------------------------------
   MAIN WRAPPER
------------------------------------ */
const Wrap = styled.section`
  width: 100%;
  padding: 80px 0;
  background: #fff;
  font-family: "Inter", sans-serif;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

/* ------------------------------------
   INNER CONTAINER
------------------------------------ */
const Container = styled.div`
  width: 88%;
  margin: 0 auto;
  display: flex;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 950px) {
    flex-direction: column;
  }
`;

/* ------------------------------------
   LEFT BOX
------------------------------------ */
const LeftBox = styled.div`
  background: #facc15;
  padding: 60px 50px;
  width: 380px;
  border-radius: 14px;
  color: #000;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  svg {
    width: 80px;
    height: 80px;
    stroke: #000;
    stroke-width: 2.4;
    fill: none;
  }
`;

const Heading = styled.h2`
  margin-top: 20px;
  font-size: 42px;
  line-height: 1.15;
  font-weight: 800;
`;

/* ------------------------------------
   RIGHT FORM
------------------------------------ */
const RightBox = styled.div`
  flex: 1;
`;

const Title = styled.h3`
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 35px;
`;

const Row2 = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 22px;

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 6px;
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 18px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f5f9ff;
  font-size: 15px;
  outline: none;

  &:focus {
    border-color: #8ab4f8;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 15px 18px;
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f5f9ff;
  font-size: 15px;
  outline: none;
  resize: none;

  &:focus {
    border-color: #8ab4f8;
  }
`;

const Button = styled.button`
  margin-top: 18px;
  padding: 15px 28px;
  background: #facc15;
  border-radius: 50px;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: 16px;
  transition: 0.25s;

  &:hover {
    background: #ffdd2d;
    transform: translateY(-3px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  svg {
    width: 22px;
    stroke: #000;
    stroke-width: 2.3;
    fill: none;
  }
`;

/* ------------------------------------
   MAIN COMPONENT
------------------------------------ */
export default function ConsultationForm() {
  const [form, setForm] = useState({
    from_name: "",
    reply_to: "",
    company_name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // Validate Email
  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Update Fields
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Send Email Function
  const sendEmail = async () => {
    if (!form.from_name || !form.reply_to || !form.message) {
      return Swal.fire({
        icon: "warning",
        title: "Missing Details",
        text: "Please fill all required fields!",
      });
    }

    if (!validateEmail(form.reply_to)) {
      return Swal.fire({
        icon: "error",
        title: "Invalid Email",
        text: "Please enter a valid email address.",
      });
    }

    setLoading(true);

    try {
      // 1️⃣ Send Email To Admin
      await emailjs.send(
        "service_raophkf",
        "template_admin_notify",
        form,
        "SgaZSFGHhlk4R6j2W"
      );

      // 2️⃣ Send Auto Reply to User
      await emailjs.send(
        "service_raophkf",
        "template_user_reply",
        form,
        "SgaZSFGHhlk4R6j2W"
      );

      Swal.fire({
        icon: "success",
        title: "Message Sent!",
        text: "We will contact you shortly.",
        confirmButtonColor: "#facc15",
      });

      setForm({
        from_name: "",
        reply_to: "",
        company_name: "",
        message: "",
      });

    } catch (err) {
      console.log("EmailJS Error → ", err);

      Swal.fire({
        icon: "error",
        title: "Error Sending Message",
        text: "Please try again later.",
      });
    }

    setLoading(false);
  };

  return (
    <Wrap>
      <Container>

        <LeftBox>
          <Icon>
            <svg viewBox="0 0 24 24">
              <path d="M4 4l16 6-16 6 6-6-6-6z" />
            </svg>
          </Icon>

          <Heading>
            Our<br />Technology<br />Experts Are<br />Ready to boost<br />your idea
          </Heading>
        </LeftBox>

        {/* RIGHT FORM */}
        <RightBox>
          <Title>Book a free consultation call with us today!</Title>

          <Row2>
            <div style={{ flex: 1 }}>
              <Label>Full Name</Label>
              <Input
                name="from_name"
                value={form.from_name}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>

            <div style={{ flex: 1 }}>
              <Label>Your Email</Label>
              <Input
                name="reply_to"
                value={form.reply_to}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          </Row2>

          <div style={{ marginBottom: "22px" }}>
            <Label>Company Name</Label>
            <Input
              name="company_name"
              value={form.company_name}
              onChange={handleChange}
              placeholder="Enter company name"
            />
          </div>

          <div>
            <Label>Message</Label>
            <TextArea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
            />
          </div>

          <Button onClick={sendEmail} disabled={loading}>
            {loading ? (
              <>
                <svg
                  viewBox="0 0 50 50"
                  style={{ animation: "spin 1s linear infinite" }}
                >
                  <circle
                    cx="25"
                    cy="25"
                    r="20"
                    stroke="#000"
                    strokeWidth="5"
                    fill="none"
                    strokeDasharray="90"
                    strokeDashoffset="50"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Request Free Quote
                <svg viewBox="0 0 24 24">
                  <path d="M5 12h14M13 18l6-6-6-6" />
                </svg>
              </>
            )}
          </Button>

        </RightBox>

      </Container>
    </Wrap>
  );
}
