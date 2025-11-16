import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";

/* ---------------------------------------
   ANIMATIONS
---------------------------------------- */
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.07); }
  100% { transform: scale(1); }
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

/* ---------------------------------------
   WRAPPER
---------------------------------------- */
const Wrapper = styled.div`
  position: fixed;
  bottom: 26px;
  right: 26px;
  z-index: 2000;
  font-family: "Inter", sans-serif;
`;

/* ---------------------------------------
   Floating Button
---------------------------------------- */
const FloatBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #facc15;
  border: none;
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,0.20);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pulse} 2s infinite;
  transition: 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }

  svg {
    width: 32px;
    height: 32px;
    stroke: #000;
    stroke-width: 2;
    fill: none;
  }
`;

/* ---------------------------------------
   CHAT BOX
---------------------------------------- */
const ChatBox = styled.div`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 340px;
  height: 440px;
  background: #ffffff;
  border-radius: 14px;
  box-shadow: 0 12px 32px rgba(0,0,0,0.25);
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.25s ease;
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
`;

const LogoWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 14px;
  background: #facc15;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 22px;
  color: #000;
`;

const HeaderText = styled.div`
  font-weight: 700;
  font-size: 16px;
`;

const CloseBtn = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
`;

/* ---------------------------------------
   CHAT BODY
---------------------------------------- */
const ChatBody = styled.div`
  flex: 1;
  padding: 12px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const BotMsg = styled.div`
  background: #f3f4f6;
  padding: 10px 14px;
  border-radius: 10px 10px 10px 4px;
  max-width: 80%;
  font-size: 14px;
  color: #111;
  align-self: flex-start;
  line-height: 1.45;
`;

const UserMsg = styled.div`
  background: #facc15;
  padding: 10px 14px;
  border-radius: 10px 10px 4px 10px;
  max-width: 80%;
  font-size: 14px;
  color: #000;
  font-weight: 600;
  align-self: flex-end;
  line-height: 1.4;
`;

const TypingIndicator = styled.div`
  font-size: 12px;
  color: #666;
  padding-left: 4px;
`;

/* ---------------------------------------
   INPUT AREA
---------------------------------------- */
const ChatInputWrap = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #eee;
  gap: 10px;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border-radius: 8px;
  border: 1px solid #ddd;
  outline: none;
  font-size: 14px;

  &:focus {
    border-color: #facc15;
  }
`;

const SendBtn = styled.button`
  background: #facc15;
  border: none;
  width: 44px;
  border-radius: 10px;
  cursor: pointer;

  svg {
    width: 22px;
    height: 22px;
    fill: #000;
  }

  &:hover {
    background: #ffdb2e;
  }
`;

/* ---------------------------------------
   MAIN COMPONENT
---------------------------------------- */
export default function HelpOperator() {
  const [open, setOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([
    { from: "bot", text: "👋 Hi! I'm your virtual assistant. How can I help today?" }
  ]);

  const bodyRef = useRef(null);

  /* Auto scroll */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [chat, typing]);

  /* Bot Auto Reply (dummy AI) */
  const botReply = (userText) => {
    setTyping(true);

    setTimeout(() => {
      setChat(prev => [
        ...prev,
        { from: "bot", text: `You said: "${userText}".  
I’m a demo chatbot — connect backend to make me smart!` }
      ]);
      setTyping(false);
    }, 1200);
  };

  /* Handle Send */
  const sendMessage = () => {
    if (!msg.trim()) return;
    setChat(prev => [...prev, { from: "user", text: msg }]);
    botReply(msg);
    setMsg("");
  };

  /* Send on Enter */
  const handleKey = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <Wrapper>

      {/* Floating Button */}
      {!open && (
        <FloatBtn onClick={() => setOpen(true)}>
          <svg viewBox="0 0 24 24">
            <path d="M12 18h.01M9 6h6m-8 4h10m-8 4h6" />
          </svg>
        </FloatBtn>
      )}

      {/* Chat Window */}
      {open && (
        <ChatBox>

          {/* Header */}
          <ChatHeader>
            <LogoWrap>E</LogoWrap>
            <HeaderText>Chat Support</HeaderText>
            <CloseBtn onClick={() => setOpen(false)}>×</CloseBtn>
          </ChatHeader>

          {/* Body */}
          <ChatBody ref={bodyRef}>
            {chat.map((c, i) =>
              c.from === "bot" ? (
                <BotMsg key={i}>{c.text}</BotMsg>
              ) : (
                <UserMsg key={i}>{c.text}</UserMsg>
              )
            )}

            {typing && <TypingIndicator>Support is typing...</TypingIndicator>}
          </ChatBody>

          {/* Input */}
          <ChatInputWrap>
            <ChatInput
              placeholder="Type a message..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={handleKey}
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
