import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

/* ---------------------------------------
   ANIMATIONS
---------------------------------------- */
const pulse = keyframes`
  0% { transform: scale(1); opacity:.9; }
  50% { transform: scale(1.07); opacity:1; }
  100% { transform: scale(1); opacity:.9; }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(16px); }
  to { opacity: 1; transform: translateY(0); }
`;

const typingDots = keyframes`
  0% { opacity: 0.2; }
  50% { opacity: 1; }
  100% { opacity: 0.2; }
`;

/* ---------------------------------------
   THEMES
---------------------------------------- */
const themes = {
  glass: {
    bg: "#ffffffdd",
    accent: "#6366f1",
    botBubble: "#eef2ff",
    userBubble: "#6366f1",
  },
  dark: {
    bg: "#111827ee",
    accent: "#8b5cf6",
    botBubble: "#1f2937",
    userBubble: "#8b5cf6",
  },
  neon: {
    bg: "#0f0f0fcc",
    accent: "#00eaff",
    botBubble: "#111",
    userBubble: "#00eaff",
  },
};

/* ---------------------------------------
   WRAPPER
---------------------------------------- */
const Wrapper = styled.div`
  position: fixed;
  bottom: 22px;
  right: 24px;
  z-index: 9000;
  font-family: "Inter", sans-serif;
`;

/* Floating Button */
const FloatBtn = styled.button`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6366f1, #8b5cf6);
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulse} 2.3s infinite;
  box-shadow: 0 10px 28px rgba(0,0,0,0.28);

  svg {
    width: 32px;
    height: 32px;
    fill: #fff;
  }
`;

const ChatBox = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 350px;
  height: 500px;
  background: ${(p) => p.$theme.bg};
  backdrop-filter: blur(16px);
  border-radius: 20px;
  border: 1px solid rgba(255,255,255,0.18);
  box-shadow: 0 14px 40px rgba(0,0,0,0.22);
  animation: ${fadeIn} 0.3s ease forwards;
  display: flex;
  flex-direction: column;
`;

const ChatHeader = styled.div`
  padding: 16px 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* SoftMaxs Premium Blue Theme */
  background: linear-gradient(135deg, #1e40af, #3b5bdb);
  border-bottom: 1px solid rgba(255,255,255,0.15);

  h3 {
    font-size: 15px;
    color: #ffffff;
    font-weight: 700;
    margin: 0;
    letter-spacing: 0.3px;
  }
`;


const CloseBtn = styled.button`
  font-size: 22px;
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatBody = styled.div`
  flex: 1;
  padding: 14px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const BotBubble = styled.div`
  max-width: 78%;
  background: ${(p) => p.$theme.botBubble};
  padding: 12px 14px;
  border-radius: 14px 14px 14px 4px;
  color: ${(p) => p.$theme.accent};
`;

const UserBubble = styled.div`
  max-width: 78%;
  background: ${(p) => p.$theme.userBubble};
  color: white;
  padding: 12px 14px;
  border-radius: 14px 14px 4px 14px;
  align-self: flex-end;
`;

const Typing = styled.div`
  display: flex;
  gap: 6px;

  span {
    width: 8px;
    height: 8px;
    background: ${(p) => p.$theme.accent};
    border-radius: 50%;
    animation: ${typingDots} 1s infinite;
  }
`;

const ChatInputWrap = styled.div`
  padding: 10px;
  display: flex;
  gap: 10px;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px 12px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const SendBtn = styled.button`
  width: 46px;
  height: 46px;
  border: none;
  border-radius: 10px;
  background: ${(p) => p.$theme.accent};
  cursor: pointer;

  display: flex;            /* added */
  justify-content: center;  /* added */
  align-items: center;      /* added */

  svg {
    fill: white;
    width: 22px;
    height: 22px;
  }
`;


const ChipsWrap = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Chip = styled.div`
  background: ${(p) => p.$theme.accent}22;
  padding: 6px 10px;
  border-radius: 8px;
  font-size: 13px;
  cursor: pointer;
  color: ${(p) => p.$theme.accent};
  border: 1px solid ${(p) => p.$theme.accent}33;
`;

/* ---------------------------------------
   OFFLINE BOT RESPONSES  
---------------------------------------- */
const BOT_RESPONSES = {
  default: "Thanks! Our team will get back to you shortly 😊",
  services: "SoftMaxs provides Digital Marketing, Websites, Branding, UI/UX, and more.",
  build: "To build a website, we first understand your brand, then design & develop it.",
  pricing: "Our pricing depends on your project needs. We offer flexible packages.",
};

/* ---------------------------------------
   MAIN COMPONENT
---------------------------------------- */
export default function HelpOperator() {
  const [open, setOpen] = useState(false);
  const [themeType, setThemeType] = useState("glass");
  const theme = themes[themeType];

  const [typing, setTyping] = useState(false);
  const [msg, setMsg] = useState("");

  const [chat, setChat] = useState([
    { from: "bot", text: "Welcome! How can I help you?" }
  ]);

  const bodyRef = useRef(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [chat, typing]);

  /* ---------------------------------------
     OFFLINE BOT REPLY  
  ---------------------------------------- */
  const botReply = (text) => {
    setTyping(true);

    setTimeout(() => {
      let response = BOT_RESPONSES.default;

      if (text.toLowerCase().includes("service"))
        response = BOT_RESPONSES.services;

      if (text.toLowerCase().includes("build"))
        response = BOT_RESPONSES.build;

      if (text.toLowerCase().includes("price"))
        response = BOT_RESPONSES.pricing;

      setChat((prev) => [...prev, { from: "bot", text: response }]);
      setTyping(false);
    }, 700);
  };

  /* ---------------------------------------
     SEND USER MESSAGE
  ---------------------------------------- */
  const send = () => {
    if (!msg.trim()) return;

    setChat((prev) => [...prev, { from: "user", text: msg }]);
    botReply(msg);

    setMsg("");
  };

  const suggestions = [
    "Tell me about SoftMaxs services",
    "How to build a website?",
    "What are your prices?"
  ];

  return (
    <Wrapper>
      {!open && (
        <FloatBtn onClick={() => setOpen(true)}>
          <svg viewBox="0 0 24 24">
            <path d="M12 3C7 3 3 6.6 3 11c0 2.3 1 4.3 2.7 5.8L5 21l4.4-1.9c.8.2 1.7.3 2.6.3 5 0 9-3.6 9-8s-4-8-9-8z" />
          </svg>
        </FloatBtn>
      )}

      {open && (
        <ChatBox $theme={theme}>
          <ChatHeader>
            <h3>SoftMaxs Assistant</h3>
            <CloseBtn onClick={() => setOpen(false)}>×</CloseBtn>
          </ChatHeader>

          <ChipsWrap>
            {suggestions.map((s, i) => (
              <Chip key={i} $theme={theme} onClick={() => botReply(s)}>
                {s}
              </Chip>
            ))}

            {/* Theme Switch */}
            <Chip $theme={theme} onClick={() => setThemeType("glass")}>Glass</Chip>
            <Chip $theme={theme} onClick={() => setThemeType("dark")}>Dark</Chip>
            <Chip $theme={theme} onClick={() => setThemeType("neon")}>Neon</Chip>
          </ChipsWrap>

          <ChatBody ref={bodyRef}>
            {chat.map((m, i) =>
              m.from === "bot" ? (
                <BotBubble key={i} $theme={theme}>{m.text}</BotBubble>
              ) : (
                <UserBubble key={i} $theme={theme}>{m.text}</UserBubble>
              )
            )}

            {typing && (
              <Typing $theme={theme}>
                <span></span><span></span><span></span>
              </Typing>
            )}
          </ChatBody>

          <ChatInputWrap>
            <ChatInput
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type your message..."
            />

            <SendBtn $theme={theme} onClick={send}>
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
