import React, { useState, useEffect } from "react";
import "./home.css";

import Header from "../components/header"; // Import the Header component
function TypingText({ text, speed, onComplete, boldText }) {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    // Step 1: Blink cursor 3 times (1.5 seconds) before typing starts
    const blinkInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 300);

    const startTypingTimeout = setTimeout(() => {
      clearInterval(blinkInterval); // Stop blinking
      setShowCursor(true);
      setIsTyping(true); // Start typing
    }, 1500);

    return () => {
      clearTimeout(startTypingTimeout);
      clearInterval(blinkInterval);
    };
  }, []);

  useEffect(() => {
    // Step 2: Start typing effect after blinking
    if (isTyping && index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (index === text.length) {
      setTimeout(() => setShowCursor(false), 500); // Hide cursor after typing is done
      if (onComplete) onComplete();
    }
  }, [index, text, speed, isTyping, onComplete]);

  return (
    <span className="typing-text">
      <span className="bold-text">{displayedText.substring(0, boldText.length)}</span>
      <span className="normal-text">{displayedText.substring(boldText.length)}</span>
      {showCursor && <span className="cursor">|</span>}
    </span>
  );
}

function Home() {
  return (
    <div className="home-container">
      <div className="inner-container">

        {/* Correctly Render Header Component */}
        <Header />
        <div className="hero">
      <div className="text-section">
        <TypingText
          text={`Hi, my \nname is Robb.\n\nI'm an independent creative developer from \nAbergavenny, South Wales.`}
          speed={50}
          boldText="Hi, my \nname is Robb."
        />
      </div>

      <div className="image-section">
        {/* Background SVG */}
        <svg className="bg-pattern" width="800" height="200" viewBox="0 0 800 200">
  <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="15" height="15">
    <line x1="0" y1="0" x2="20" y2="20" stroke="purple" strokeWidth="2" />
  </pattern>
  <rect width="100%" height="100%" fill="url(#diagonalLines)" />
</svg>


        {/* SVG Avatar */}
        {/* <svg className="avatar" width="200" height="200" viewBox="0 0 100 100">
          <path d="M20 60 Q50 90 80 60" stroke="blue" strokeWidth="3" fill="none" />
          <circle cx="50" cy="40" r="20" stroke="blue" strokeWidth="3" fill="none" />
          <circle cx="42" cy="35" r="3" fill="blue" />
          <circle cx="58" cy="35" r="3" fill="blue" />
          <path d="M45 50 Q50 55 55 50" stroke="blue" strokeWidth="3" fill="none" />
          <rect x="35" y="20" width="30" height="20" stroke="blue" strokeWidth="3" fill="none" />
        </svg> */}
      </div>
    </div>
     

        {/* Content goes here */}
      </div>
    </div>
  );
}

export default Home;
