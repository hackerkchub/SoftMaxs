// src/pages/Contact.jsx
import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

/* ------------------------------------------------
   PAGE WRAPPER 
------------------------------------------------ */
const Page = styled.section`
  width: 100%;
  padding: 60px 0;
  background: #fff;
  font-family: "Inter", sans-serif;
`;

/* ------------------------------------------------
   FIXED RESPONSIVE CONTAINER
------------------------------------------------ */
const Container = styled.div`
  width: min(1150px, 92%);
  margin: auto;

  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 50px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
`;

/* ------------------------------------------------
   LEFT FORM
------------------------------------------------ */
const FormBox = styled.div``;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 800;
  margin-bottom: 25px;

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

const Label = styled.label`
  font-size: 15px;
  font-weight: 600;
  display: block;
  margin-bottom: 6px;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 18px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #d6dbe3;
  background: #f5f9ff;
  font-size: 15px;

  &:focus {
    border-color: #7cb3ff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 130px;
  padding: 14px;
  border-radius: 8px;
  border: 1px solid #d6dbe3;
  background: #f5f9ff;
  font-size: 15px;
  resize: none;

  &:focus {
    border-color: #7cb3ff;
    outline: none;
  }
`;

const SubmitBtn = styled.button`
  margin-top: 22px;
  padding: 12px 32px;
  border: none;
  border-radius: 30px;
  background: #facc15;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background: #ffdb3b;
  }
`;

/* ------------------------------------------------
   RIGHT ADDRESS COLUMN
------------------------------------------------ */
const AddressBox = styled.div`
  width: 100%;
`;

const AddrTitle = styled.h4`
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 6px;
`;

const AddrText = styled.p`
  font-size: 15px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 22px;
`;

/* ------------------------------------------------
   COMPONENT START
------------------------------------------------ */
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      return Swal.fire("Missing Info", "Please fill required fields", "warning");
    }

    if (!isValidEmail(form.email)) {
      return Swal.fire("Invalid Email", "Enter a correct email", "error");
    }

    setLoading(true);

    const payload = {
      access_key: "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0",
      subject: "New Contact Form - SoftMaxs",
      email_message: `
New Contact:

Name: ${form.name}
Email: ${form.email}
Company: ${form.company || "N/A"}
Phone: ${form.phone || "N/A"}

Message:
${form.message}
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
        await Swal.fire({
          icon: "success",
          title: "Message Sent!",
          text: "We will contact you shortly.",
          confirmButtonColor: "#facc15",
        });

        window.location.href = "/";
      } else {
        Swal.fire("Error", "Unable to send message.", "error");
      }
    } catch (e) {
      Swal.fire("Network Error", "Something went wrong.", "error");
    }

    setLoading(false);
  };

  return (
    <Page>
      <Container>

        {/* LEFT FORM AREA */}
        <FormBox>
          <Title>Contact Us</Title>

          <form onSubmit={handleSubmit}>

            <Row>
              <div style={{ flex: 1 }}>
                <Label>Full Name *</Label>
                <Input name="name" value={form.name} onChange={handleChange} />
              </div>

              <div style={{ flex: 1 }}>
                <Label>Your Email *</Label>
                <Input name="email" value={form.email} onChange={handleChange} />
              </div>
            </Row>

            <div style={{ marginBottom: 18 }}>
              <Label>Company</Label>
              <Input name="company" value={form.company} onChange={handleChange} />
            </div>

            <div style={{ marginBottom: 18 }}>
              <Label>Phone</Label>
              <Input name="phone" value={form.phone} onChange={handleChange} />
            </div>

            <div>
              <Label>Message *</Label>
              <Textarea
                name="message"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <SubmitBtn type="submit">
              {loading ? "Sending..." : "Submit"}
            </SubmitBtn>
          </form>
        </FormBox>

        {/* RIGHT ADDRESS SECTION */}
        <AddressBox>
          <AddrTitle>USA Center</AddrTitle>
          <AddrText>
            3524 Silverside Road Suite 35B<br />
            Wilmington, DE 19810<br />
            +1 209 318 4812
          </AddrText>

          <AddrTitle>Headquarters</AddrTitle>
          <AddrText>
            Logix Cyber Park, Tower B, 9th Floor<br />
            Sector 62, Noida 201301<br />
            +91-120-4518893
          </AddrText>

          <AddrTitle>Dehradun Office</AddrTitle>
          <AddrText>
            IT Park, Sahastradhara Road<br />
            Dehradun 248001, Uttarakhand
          </AddrText>
        </AddressBox>

      </Container>
    </Page>
  );
}
