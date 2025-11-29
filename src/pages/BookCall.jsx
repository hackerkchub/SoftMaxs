import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// SoftMaxs Blue Theme
const blue = "#1e40af";

/* -----------------------------
   ANIMATIONS
----------------------------- */
const glowMove = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.9; }
  50% { transform: translate(-40px, 20px) scale(1.05); opacity: 1; }
  100% { transform: translate(-80px, -10px) scale(1.02); opacity: 0.9; }
`;

/* -----------------------------
   LAYOUT
----------------------------- */
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  background: radial-gradient(circle at top left, #dbeafe 0, #eff6ff 40%, #f9fafb 100%);
  padding: 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-family: "Inter", sans-serif;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const Glow = styled.div`
  position: absolute;
  width: 520px;
  height: 520px;
  background: radial-gradient(circle at center, rgba(59, 130, 246, 0.45), transparent 70%);
  filter: blur(8px);
  top: -140px;
  right: -80px;
  animation: ${glowMove} 12s ease-in-out infinite alternate;
  pointer-events: none;
  z-index: 0;
`;

const Container = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1120px;
  width: 100%;
  display: flex;
  gap: 40px;
  align-items: stretch;
  justify-content: center;
  flex-wrap: wrap;
`;

/* -----------------------------
   LEFT INFO PANEL
----------------------------- */
const Info = styled.div`
  flex: 1 1 360px;
  padding: 24px 10px 24px 0;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  color: ${blue};
  background: rgba(37, 99, 235, 0.08);
  border: 1px solid rgba(37, 99, 235, 0.18);
  margin-bottom: 14px;
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 0 6px rgba(34, 197, 94, 0.32);
`;

const HeroTitle = styled.h1`
  font-size: clamp(28px, 3.2vw, 34px);
  line-height: 1.15;
  color: #0f172a;
  margin-bottom: 10px;
  font-weight: 800;
`;

const HeroSub = styled.p`
  max-width: 420px;
  color: #4b5563;
  font-size: 14px;
  margin-bottom: 20px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  margin-bottom: 20px;
`;

const StatCard = styled.div`
  padding: 10px 12px;
  border-radius: 14px;
  background: white;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.06);
  border: 1px solid rgba(148, 163, 184, 0.3);
`;

const StatValue = styled.div`
  font-size: 18px;
  font-weight: 700;
  color: ${blue};
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const ImageRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 12px;
`;

const AvatarStack = styled.div`
  display: flex;
`;

const AvatarImg = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 999px;
  border: 2px solid #e5edff;
  object-fit: cover;
  box-shadow: 0 6px 16px rgba(15, 23, 42, 0.15);
  transform: translateX(${(p) => p.$offset || 0}px);
`;

const LabelSmall = styled.div`
  font-size: 12px;
  color: #4b5563;
`;

/* -----------------------------
   FORM CARD
----------------------------- */
const Card = styled.div`
  flex: 0 1 420px;
  background: white;
  padding: 26px 26px 28px;
  border-radius: 22px;
  box-shadow: 0px 16px 40px rgba(15, 23, 42, 0.15);
  border: 1px solid rgba(191, 219, 254, 0.9);
  transition: 0.25s ease;
`;

const Title = styled.h2`
  color: ${blue};
  margin-bottom: 4px;
  font-size: 20px;
`;

const StepText = styled.p`
  margin-bottom: 18px;
  color: #4a4a4a;
  font-size: 13px;
`;

const StepIndicator = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: #6b7280;
  margin-bottom: 10px;
`;

const InputRow = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
`;

const Input = styled.input`
  width: 100%;
  padding: 11px 13px;
  border-radius: 10px;
  border: 1.5px solid #d6dbff;
  font-size: 14px;

  &:focus {
    border-color: ${blue};
    outline: none;
    box-shadow: 0 0 0 1px rgba(37, 99, 235, 0.15);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 13px;
  margin-top: 10px;
  background: ${blue};
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.18s;

  &:hover {
    opacity: 0.94;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.65;
    cursor: not-allowed;
  }
`;

const BackBtn = styled.div`
  text-align: center;
  margin-top: 10px;
  color: ${blue};
  cursor: pointer;
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const Slots = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Slot = styled.div`
  padding: 9px 13px;
  border-radius: 9px;
  background: ${(p) => (p.$active ? blue : "white")};
  border: 1px solid ${blue};
  color: ${(p) => (p.$active ? "white" : blue)};
  cursor: pointer;
  font-size: 13px;
`;

const Select = styled.select`
  width: 100%;
  padding: 11px 13px;
  border-radius: 10px;
  border: 1.5px solid #d6dbff;
  font-size: 14px;

  &:focus {
    border-color: ${blue};
    outline: none;
  }
`;

const ConfirmBox = styled.div`
  padding: 14px;
  margin-top: 14px;
  background: #e8ecff;
  border-radius: 12px;
  color: ${blue};
  font-size: 13px;
  line-height: 1.4;
`;

const StatusText = styled.div`
  margin-top: 10px;
  font-size: 13px;
  color: ${(p) => (p.error ? "#b91c1c" : "#047857")};
`;

/* -----------------------------
   MAIN COMPONENT
----------------------------- */
export default function BookCall() {
  // steps: 1=contact, 2=date, 3=time, 4=expert, 5=review, 6=done
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [expert, setExpert] = useState("");

  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [statusError, setStatusError] = useState(false);

  const bodyRef = useRef(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("softmaxsBooking"));
    if (saved) {
      setStep(6);
      setName(saved.name || "");
      setEmail(saved.email || "");
      setDate(saved.date);
      setSlot(saved.slot);
      setExpert(saved.expert);
    }
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [step]);

  const timeSlots = [
    "10:00 AM", "11:00 AM", "12:00 PM",
    "2:00 PM", "3:00 PM", "4:00 PM"
  ];

  const experts = [
    "Rahul • Project Manager",
    "Neha • UI/UX Specialist",
    "Karan • Web Developer",
    "Priya • Branding Expert"
  ];

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  /* -----------------------------
     WEB3FORMS SUBMIT
  ----------------------------- */
  const confirmBooking = async () => {
    const booking = { name, email, date, slot, expert };
    localStorage.setItem("softmaxsBooking", JSON.stringify(booking));

    setSending(true);
    setStatus("");
    setStatusError(false);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "9adfabce-a75b-4ab8-aea1-b79edaeeb7e0",
          subject: "New SoftMaxs Call Booking",
          from_name: "SoftMaxs Website",
          name,
          email,
          date,
          time_slot: slot,
          expert,
          message: `New booking from ${name} on ${date} at ${slot} with ${expert}.`
        })
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Your booking has been forwarded to the assigned expert. You'll receive a confirmation email shortly.");
        setStatusError(false);
      } else {
        setStatus("Booking saved locally but email sending failed.");
        setStatusError(true);
      }
    } catch (err) {
      setStatus("Booking saved locally but email sending failed.");
      setStatusError(true);
    } finally {
      setSending(false);
      setStep(6);
    }
  };

  return (
    <Wrapper>
      <Glow />
      <Container>
        
        {/* LEFT INFO */}
        <Info>
          <Badge>
            <Dot />
            Live strategy call • 30 min
          </Badge>

          <HeroTitle>
            Book a call with the SoftMaxs digital team.
          </HeroTitle>

          <HeroSub>
            Get a quick strategy session on websites, performance marketing, or brand design.
          </HeroSub>

          <InfoGrid>
            <StatCard>
              <StatValue>200+</StatValue>
              <StatLabel>Projects shipped</StatLabel>
            </StatCard>
            <StatCard>
              <StatValue>4.9★</StatValue>
              <StatLabel>Client rating</StatLabel>
            </StatCard>
          </InfoGrid>

          <ImageRow>
            <AvatarStack>
  <AvatarImg src="https://i.pravatar.cc/150?img=68" $offset={0} />
  <AvatarImg src="https://i.pravatar.cc/150?img=12" $offset={-10} />
  <AvatarImg src="https://i.pravatar.cc/150?img=33" $offset={-20} />
</AvatarStack>


            <LabelSmall>
              Actual SoftMaxs experts will join your call.
            </LabelSmall>
          </ImageRow>
        </Info>

        {/* RIGHT FORM */}
        <Card ref={bodyRef}>
          
          <Title>📞 Book a Call</Title>
          <StepIndicator>Step {step} of 6</StepIndicator>

          {/* Step 1 – Contact */}
          {step === 1 && (
            <>
              <StepText>Start with your contact details.</StepText>

              <InputRow>
                <Input
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </InputRow>

              <InputRow>
                <Input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </InputRow>

              <Button onClick={() => name && email && next()} disabled={!name || !email}>
                Continue
              </Button>
            </>
          )}

          {/* Step 2 – Date */}
          {step === 2 && (
            <>
              <StepText>Select a meeting date.</StepText>

              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />

              <Button onClick={() => date && next()} disabled={!date}>
                Continue
              </Button>

              <BackBtn onClick={back}>← Back</BackBtn>
            </>
          )}

          {/* Step 3 – Time */}
          {step === 3 && (
            <>
              <StepText>Select a time slot.</StepText>

              <Slots>
                {timeSlots.map((t) => (
                  <Slot
                    key={t}
                    $active={slot === t}
                    onClick={() => setSlot(t)}
                  >
                    {t}
                  </Slot>
                ))}
              </Slots>

              <Button onClick={() => slot && next()} disabled={!slot}>
                Continue
              </Button>

              <BackBtn onClick={back}>← Back</BackBtn>
            </>
          )}

          {/* Step 4 – Expert */}
          {step === 4 && (
            <>
              <StepText>Select your SoftMaxs expert.</StepText>

              <Select value={expert} onChange={(e) => setExpert(e.target.value)}>
                <option value="">Select expert</option>
                {experts.map((ex, i) => (
                  <option key={i}>{ex}</option>
                ))}
              </Select>

              <Button onClick={() => expert && next()} disabled={!expert}>
                Continue
              </Button>

              <BackBtn onClick={back}>← Back</BackBtn>
            </>
          )}

          {/* Step 5 – Review */}
          {step === 5 && (
            <>
              <StepText>Review your booking.</StepText>

              <ConfirmBox>
                👤 <b>{name}</b> <br />
                📧 {email} <br />
                📅 {date} <br />
                ⏰ {slot} <br />
                🧑‍💻 {expert}
              </ConfirmBox>

              <Button onClick={confirmBooking} disabled={sending}>
                {sending ? "Sending..." : "Confirm & Send Booking"}
              </Button>

              <BackBtn onClick={back}>← Back</BackBtn>
            </>
          )}

          {/* Step 6 – Done */}
          {step === 6 && (
            <>
              <StepText>Your meeting is scheduled 🎉</StepText>

              <ConfirmBox>
                👤 <b>{name}</b> <br />
                📧 {email} <br />
                📅 <b>{date}</b> at <b>{slot}</b> <br />
                With <b>{expert}</b>
              </ConfirmBox>

              {status && (
                <StatusText error={statusError}>{status}</StatusText>
              )}

              {/* Book Another */}
              <Button
                onClick={() => {
                  localStorage.removeItem("softmaxsBooking");
                  setStep(1);
                  setName("");
                  setEmail("");
                  setDate("");
                  setSlot("");
                  setExpert("");
                  setStatus("");
                  setStatusError(false);
                }}
              >
                Book Another Call
              </Button>

              {/* Return Home */}
              <Button
                style={{ background: "#6b7280", marginTop: "10px" }}
                onClick={() => (window.location.href = "/")}
              >
                Return Home
              </Button>
            </>
          )}

        </Card>
      </Container>
    </Wrapper>
  );
}
