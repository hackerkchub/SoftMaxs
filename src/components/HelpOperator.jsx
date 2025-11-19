import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import Logo from "../assets/Logo.png";

/* ---------------------------------------
   ANIMATIONS
---------------------------------------- */
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.08); }
  100% { transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

const typingDots = keyframes`
  0% { opacity: .2; }
  20% { opacity: 1; }
  100% { opacity: .2; }
`;

/* ---------------------------------------
   WRAPPER
---------------------------------------- */
const Wrapper = styled.div`
  position: fixed;
  bottom: clamp(16px, 4vw, 26px);
  right: clamp(16px, 4vw, 26px);
  z-index: 2000;
  font-family: "Inter", sans-serif;
`;

/* ---------------------------------------
   Floating Button
---------------------------------------- */
const FloatBtn = styled.button`
  width: clamp(52px, 12vw, 62px);
  height: clamp(52px, 12vw, 62px);
  border-radius: 50%;
  background: #1e40af;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulse} 2s infinite;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  img {
    width: clamp(26px, 7vw, 34px);
    height: clamp(26px, 7vw, 34px);
  }
`;

/* ---------------------------------------
   CHAT BOX (FULLY RESPONSIVE)
---------------------------------------- */
const ChatBox = styled.div`
  position: absolute;
  bottom: calc(clamp(52px, 12vw, 62px) + 20px);
  right: 0;
  width: clamp(270px, 70vw, 350px);
  height: clamp(340px, 80vh, 470px);
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.25s ease;

  @media (max-width: 400px) {
    right: -10px;
  }
`;

/* ---------------------------------------
   HEADER
---------------------------------------- */
const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid #eee;
  background: #eef2ff;
`;

const LogoWrap = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  border: 2px solid #facc15;
  object-fit: cover;
`;

const HeaderText = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #1e40af;
`;

const CloseBtn = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 22px;
  cursor: pointer;
`;

/* ---------------------------------------
   CHAT BODY
---------------------------------------- */
const ChatBody = styled.div`
  flex: 1;
  padding: clamp(8px, 2vw, 12px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

/* Bot message container with avatar */
const BotLine = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
`;

const BotAvatar = styled.img`
  width: clamp(26px, 7vw, 32px);
  height: clamp(26px, 7vw, 32px);
  border-radius: 10px;
  border: 2px solid #1e40af;
`;

const BotMsg = styled.div`
  background: #eef2ff;
  padding: 10px 14px;
  border-radius: 10px 10px 10px 4px;
  font-size: 14px;
  color: #1e40af;
  max-width: 80%;
  font-weight: 600;
`;

const UserMsg = styled.div`
  background: #facc15;
  padding: 10px 14px;
  border-radius: 10px 10px 4px 10px;
  font-weight: 700;
  max-width: 80%;
  align-self: flex-end;
  color: #111;
`;

const Typing = styled.div`
  display: flex;
  gap: 4px;
  margin-left: 38px;
  span {
    width: 8px;
    height: 8px;
    background: #1e40af;
    border-radius: 50%;
    animation: ${typingDots} 1s infinite;
  }
  span:nth-child(2) { animation-delay: .2s; }
  span:nth-child(3) { animation-delay: .4s; }
`;

/* ---------------------------------------
   INPUT AREA
---------------------------------------- */
const ChatInputWrap = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
  gap: 10px;
  background: #fafafa;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  font-size: 14px;

  &:focus {
    border-color: #1e40af;
  }
`;

const SendBtn = styled.button`
  width: 44px;
  background: #1e40af;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  svg {
    width: 20px;
    height: 20px;
    fill: white;
  }
`;

/* ---------------------------------------
   WHATSAPP & CALL BUTTONS
---------------------------------------- */
const QuickBtns = styled.div`
  display: flex;
  gap: 10px;
  margin: 8px 0;
  padding: 0 10px;

  button {
    flex: 1;
    padding: clamp(6px, 1.5vw, 8px) 10px;
    font-size: clamp(12px, 2.7vw, 13px);
    border-radius: 8px;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
  }
`;

const WhatsBtn = styled.button`
  background: #25d366;
`;

const CallBtn = styled.button`
  background: #1e40af;
`;

/* ---------------------------------------
   MAIN COMPONENT
---------------------------------------- */
export default function HelpOperator() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { from: "bot", text: "👋 Welcome to SoftMaxs! How can we help you today?" }
  ]);

  const bodyRef = useRef(null);

  /* SCROLL DOWN */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [chat, typing]);

  /* Sounds */
  const playSendSound = () => {
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-message-pop-alert-2354.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  const playOpenSound = () => {
    const audio = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-soft-pop-2852.mp3");
    audio.volume = 0.4;
    audio.play();
  };

  /* Bot reply */
  const botReply = () => {
    setTyping(true);

    setTimeout(() => {
      setChat((prev) => [
        ...prev,
        {
          from: "bot",
          text: "Thanks! A SoftMaxs expert will reach out shortly 😊"
        }
      ]);
      setTyping(false);
    }, 1100);
  };

  /* Send message */
  const sendMessage = () => {
    if (!msg.trim()) return;

    playSendSound();
    setChat((prev) => [...prev, { from: "user", text: msg }]);
    botReply();
    setMsg("");
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <Wrapper>

      {!open && (
        <FloatBtn
          onClick={() => {
            setOpen(true);
            playOpenSound();
          }}
        >
          <img src={Logo} alt="SoftMaxs" />
        </FloatBtn>
      )}

      {open && (
        <ChatBox>

          <ChatHeader>
            <LogoWrap src={Logo} />
            <HeaderText>SoftMaxs Support</HeaderText>
            <CloseBtn onClick={() => setOpen(false)}>×</CloseBtn>
          </ChatHeader>

          {/* Quick Buttons */}
          <QuickBtns>
            <WhatsBtn onClick={() => window.open("https://wa.me/918888888888", "_blank")}>
              WhatsApp
            </WhatsBtn>
            <CallBtn onClick={() => window.open("tel:+918888888888")}>
              Call Us
            </CallBtn>
          </QuickBtns>

          <ChatBody ref={bodyRef}>
            {chat.map((c, i) =>
              c.from === "bot" ? (
                <BotLine key={i}>
                  <BotAvatar src={Logo} />
                  <BotMsg>{c.text}</BotMsg>
                </BotLine>
              ) : (
                <UserMsg key={i}>{c.text}</UserMsg>
              )
            )}

            {typing && (
              <Typing>
                <span></span>
                <span></span>
                <span></span>
              </Typing>
            )}
          </ChatBody>

          <ChatInputWrap>
            <ChatInput
              placeholder="Write your message..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={handleEnter}
            />
            <SendBtn onClick={sendMessage}>
              <svg viewBox="0 0 24 24">
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </SendBtn>
          </ChatInputWrap>

        </ChatBox>
      )}

    </Wrapper>
  );
}
