// src/pages/FAQ.jsx
import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch, FiSun, FiMoon, FiChevronDown } from "react-icons/fi";

// Components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HelpOperator from "../components/HelpOperator";

// JSON Data
import faqData from "../data/faq.json";

// ---------------- THEMES ----------------
const darkTheme = {
  bg: "#0d0d15",
  card: "rgba(255,255,255,0.06)",
  text: "#ffffff",
  subtext: "#cfcfe1",
  border: "rgba(255,255,255,0.15)",
};

const lightTheme = {
  bg: "#ffffff",
  card: "rgba(10,10,20,0.06)",
  text: "#111119",
  subtext: "#444",
  border: "rgba(0,0,0,0.15)",
};

// ---------------- STYLED ----------------
const Page = styled.div`
  background: ${({ theme }) => theme.bg};
  min-height: 100vh;
  color: ${({ theme }) => theme.text};
  transition: 0.3s ease;
  font-family: "Inter", sans-serif;
`;

const Hero = styled.section`
  padding: 120px 10% 80px;
  text-align: center;
  background: linear-gradient(135deg, #7b2ff7, #f107a3);
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
  color: #fff;

  h1 {
    font-size: 56px;
    font-weight: 800;
  }
  p {
    margin-top: 16px;
    opacity: 0.92;
  }

  @media (max-width: 600px) {
    padding: 100px 6% 60px;
    h1 {
      font-size: 36px;
    }
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px auto 30px;
  width: 90%;
  max-width: 900px;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 18px;
  }
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.card};
  padding: 14px 20px;
  border-radius: 14px;
  width: 70%;
  border: 1px solid ${({ theme }) => theme.border};

  input {
    width: 100%;
    background: transparent;
    border: none;
    margin-left: 12px;
    font-size: 16px;
    color: ${({ theme }) => theme.text};
    outline: none;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const Mic = styled.div`
  cursor: pointer;
  margin-left: 12px;
  font-size: 18px;
  opacity: 0.85;
  transition: 0.2s;

  &:hover {
    opacity: 1;
  }
`;

const ThemeToggle = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 12px 16px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.border};
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 20px;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center;
  }
`;

const FAQWrap = styled(motion.div)`
  width: 90%;
  max-width: 900px;
  margin: 20px auto 100px;
`;

const Item = styled(motion.div)`
  backdrop-filter: blur(14px);
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  margin-bottom: 20px;
  padding: 25px 30px;
  border-radius: 18px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: rgba(255,255,255,0.12);
    transform: translateY(-3px);
  }
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 600;
  align-items: center;
`;

const Chevron = styled(FiChevronDown)`
  transition: 0.3s;
  ${({ open }) => open && "transform: rotate(180deg);"}

`;

const Answer = styled(motion.p)`
  margin-top: 12px;
  color: ${({ theme }) => theme.subtext};
  line-height: 26px;
  font-size: 16px;
`;


// ---------------- NEW VOTING UI ----------------
const FeedbackWrap = styled.div`
  margin-top: 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 14px;
  color: ${({ theme }) => theme.subtext};
`;

const VoteBtn = styled.button`
  background: ${({ theme }) => theme.card};
  border: 1px solid ${({ theme }) => theme.border};
  padding: 8px 16px;
  border-radius: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  transition: 0.25s;
  display: flex;
  align-items: center;
  gap: 6px;

  &:hover {
    background: rgba(255,255,255,0.15);
  }
`;

const ThankYou = styled(motion.div)`
  margin-top: 14px;
  font-size: 14px;
  font-weight: 500;
  opacity: 0.85;
`;


// ---------------- ANIMATIONS ----------------
const faqListVariant = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const faqItemVariant = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

// ---------------- PAGE ----------------
const FAQ = () => {
  const [theme, setTheme] = useState("dark");
  const [openIndex, setOpenIndex] = useState(null);
  const [query, setQuery] = useState("");
  const [voted, setVoted] = useState({});

  // Voice Search
  const startListening = () => {
    const speech = new window.webkitSpeechRecognition();
    speech.lang = "en-US";
    speech.continuous = false;
    speech.start();

    speech.onresult = (e) => {
      setQuery(e.results[0][0].transcript);
    };
  };

  const filtered = faqData.filter((f) =>
    f.q.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Page>
        <Navbar />

        <Hero>
          <h1>Frequently Asked Questions</h1>
          <p>Your questions. Our clarity — delivered simply.</p>
        </Hero>

        {/* Search + Theme */}
        <TopBar>
          <SearchBox>
            <FiSearch size={18} />
            <input
              type="text"
              placeholder="Search your question..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Mic onClick={startListening}>🎤</Mic>
          </SearchBox>

          <ThemeToggle onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </ThemeToggle>
        </TopBar>

        {/* FAQ LIST */}
        <FAQWrap variants={faqListVariant} initial="hidden" animate="show">
          {filtered.map((item, i) => {
            const open = openIndex === i;

            return (
              <Item
                key={i}
                variants={faqItemVariant}
                onClick={() => setOpenIndex(open ? null : i)}
              >
                <Question>
                  {item.q}
                  <Chevron open={open} />
                </Question>

                <AnimatePresence>
                  {open && (
                    <Answer
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      {item.a}

                      {/* Helpful or Not Voting */}
                      {!voted[i] && (
                        <FeedbackWrap>
                          <span>Was this helpful?</span>

                          <VoteBtn
                            onClick={(e) => {
                              e.stopPropagation();
                              setVoted({ ...voted, [i]: "yes" });
                            }}
                          >
                            👍 Yes
                          </VoteBtn>

                          <VoteBtn
                            onClick={(e) => {
                              e.stopPropagation();
                              setVoted({ ...voted, [i]: "no" });
                            }}
                          >
                            👎 No
                          </VoteBtn>
                        </FeedbackWrap>
                      )}

                      <AnimatePresence>
                        {voted[i] && (
                          <ThankYou
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                          >
                            {voted[i] === "yes"
                              ? "Thanks! Glad it helped 😊"
                              : "Thank you — your feedback helps us improve 💬"}
                          </ThankYou>
                        )}
                      </AnimatePresence>
                    </Answer>
                  )}
                </AnimatePresence>
              </Item>
            );
          })}
        </FAQWrap>

        <HelpOperator />
        <Footer />
      </Page>
    </ThemeProvider>
  );
};

export default FAQ;
