// src/components/PageLoader.jsx
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { useRouteLoader } from "../context/RouteLoaderContext";

/* ========================================================================
   ANIMATIONS — optimized for GPU performance
======================================================================== */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(0.90); }
`;

const floatDepth = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-4px); }
  100% { transform: translateY(0); }
`;

const rotateCW = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const rotateCCW = keyframes`
  from { transform: rotate(360deg); }
  to   { transform: rotate(0deg); }
`;

const pulse = keyframes`
  0%   { transform: scale(0.8); opacity: 0.5; }
  50%  { transform: scale(1); opacity: 1; }
  100% { transform: scale(0.8); opacity: 0.5; }
`;

/* ========================================================================
   OVERLAY — now optimized
======================================================================== */

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 999999;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(5, 5, 10, 0.85);

  animation: ${(p) => (p.closing ? fadeOut : fadeIn)} 0.35s ease forwards;

  /* performance: avoid blocking UI when closing */
  pointer-events: ${(p) => (p.closing ? "none" : "auto")};

  backdrop-filter: ${(p) => (p.closing ? "none" : "blur(8px)")};
`;

/* WRAPPER */
const Wrap = styled.div`
  width: 140px;
  height: 140px;
  position: relative;
  animation: ${floatDepth} 3s ease-in-out infinite;
`;

/* HEX SHAPE */
const Hex = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;

  clip-path: polygon(
    50% 0%, 
    90% 25%, 
    90% 75%, 
    50% 100%, 
    10% 75%, 
    10% 25%
  );

  border: 2px solid rgba(250,204,21,0.55);
  animation: ${(p) => (p.reverse ? rotateCCW : rotateCW)} ${(p) => p.time}s linear infinite;
  transform: scale(${(p) => p.scale});
  will-change: transform;
`;

/* CORE */
const Core = styled.div`
  position: absolute;
  inset: 40%;
  border-radius: 50%;
  background: radial-gradient(
    circle,
    rgba(250,204,21,0.9),
    rgba(250,204,21,0.15)
  );
  animation: ${pulse} 1.4s ease-in-out infinite;
`;

/* ========================================================================
   MAIN COMPONENT
======================================================================== */

export default function PageLoader() {
  const { loading } = useRouteLoader();
  const [visible, setVisible] = useState(true);

  const closing = !loading;

  // Unmount loader after fade-out finishes
  useEffect(() => {
    if (closing) {
      const t = setTimeout(() => setVisible(false), 350);
      return () => clearTimeout(t);
    }
  }, [closing]);

  if (!visible) return null;

  return (
    <Overlay closing={closing}>
      <Wrap>
        <Hex scale={1.15} time={6} />
        <Hex scale={0.88} time={3.5} reverse />
        <Hex scale={0.65} time={2.8} />

        <Core />
      </Wrap>
    </Overlay>
  );
}
