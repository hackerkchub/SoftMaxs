import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

/* ------------------------------------
   MAIN WRAPPER
------------------------------------ */
const Wrap = styled.section`
  width: 100%;
  padding: clamp(50px, 7vw, 80px) 0;
  background: #fff;
  font-family: "Inter", sans-serif;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Container = styled.div`
  width: 88%;
  margin: 0 auto;
  display: flex;
  gap: clamp(30px, 6vw, 60px);
  align-items: flex-start;

  @media (max-width: 950px) {
    flex-direction: column;
    width: 92%;
  }
`;

/* ------------------------------------
   LEFT BOX
------------------------------------ */
const LeftBox = styled.div`
  background: #facc15;
  padding: clamp(35px, 6vw, 60px) clamp(30px, 4vw, 50px);
  width: clamp(280px, 28vw, 380px);
  border-radius: 14px;
  color: #000;

  @media (max-width: 950px) {
    width: 100%;
  }
`;

const Icon = styled.div`
  svg {
    width: clamp(55px, 7vw, 80px);
    height: clamp(55px, 7vw, 80px);
    stroke: #000;
    stroke-width: 2.4;
    fill: none;
  }
`;

const Heading = styled.h2`
  margin-top: 20px;
  font-size: clamp(26px, 4vw, 42px);
  line-height: 1.15;
  font-weight: 800;
`;

/* ------------------------------------
   RIGHT BOX
------------------------------------ */
const RightBox = styled.div`
  flex: 1;
  width: 100%;
`;

const Title = styled.h3`
  font-size: clamp(20px, 3vw, 26px);
  font-weight: 700;
  margin-bottom: clamp(22px, 4vw, 35px);
`;

/* ------------------------------------
   FORM FIELDS
------------------------------------ */
const Row2 = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 22px;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const Label = styled.label`
  font-size: clamp(14px, 1.8vw, 15px);
  font-weight: 600;
  margin-bottom: 6px;
  display: inline-block;
`;

const Input = styled.input`
  width: 100%;
  padding: clamp(12px, 2vw, 15px) clamp(14px, 2vw, 18px);
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f5f9ff;
  font-size: clamp(14px, 2vw, 15px);
  outline: none;

  &:focus {
    border-color: #8ab4f8;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  height: clamp(110px, 15vw, 130px);
  padding: clamp(12px, 2vw, 15px) clamp(14px, 2vw, 18px);
  border-radius: 10px;
  border: 1px solid #e5e7eb;
  background: #f5f9ff;
  font-size: clamp(14px, 2vw, 15px);
  outline: none;
  resize: none;

  &:focus {
    border-color: #8ab4f8;
  }
`;

/* ------------------------------------
   BUTTON
------------------------------------ */
const Button = styled.button`
  margin-top: 18px;
  padding: clamp(12px, 2vw, 15px) clamp(20px, 3vw, 28px);
  background: #facc15;
  border-radius: 50px;
  border: none;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  font-weight: 700;
  font-size: clamp(14px, 2.2vw, 16px);
  transition: 0.25s;

  &:hover {
    background: #ffdd2d;
    transform: translateY(-3px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  svg {
    width: clamp(18px, 2.8vw, 22px);
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

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

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

    const payload = {
      access_key: "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0",
      subject: "New Consultation Request - SoftMaxs",
      email_message: `
New Inquiry Received

Name: ${form.from_name}
Email: ${form.reply_to}
Company: ${form.company_name || "N/A"}
Message: ${form.message}

-- Email received via SoftMaxs Website Form
      `,
      ...form,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
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
      } else {
        Swal.fire({
          icon: "error",
          title: "Error Sending Message",
          text: "Please try again later.",
        });
      }
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Server Error",
        text: "Unable to send message.",
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
                <svg viewBox="0 0 50 50" style={{ animation: "spin 1s linear infinite" }}>
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
