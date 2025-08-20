import { useState } from "react";
import "../styles/LandingPage.css";

export default function LandingPage({ onStart }) {
  const [name, setName] = useState("");

  const handleStart = () => {
    if (name.trim() !== "") {
      // ✅ This is what triggers QuizPage in App.jsx
      onStart(name);
    } else {
      alert("Please enter your name!");
    }
  };

  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">Welcome to the Quiz</h1>
        <p className="landing-subtitle">Enter your name to get started</p>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="landing-input"
        />
        {/* ✅ Button must have onClick={handleStart} */}
        <button type="button" onClick={handleStart} className="landing-btn">
          Start Quiz
        </button>
      </div>
    </div>
  );
}
