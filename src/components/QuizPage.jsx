import { useState } from "react";
import questions from "../data/questions";
import "../styles/QuizPage.css";

export default function QuizPage({ userName, onFinish }) {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswer = (answer) => {
    const question = questions[current];
    const isCorrect = answer === question.correct;

    if (isCorrect) setScore(score + 1);

    setUserAnswers([
      ...userAnswers,
      { question: question.text, selected: answer, correct: question.correct },
    ]);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      onFinish(score + (isCorrect ? 1 : 0), [
        ...userAnswers,
        { question: question.text, selected: answer, correct: question.correct },
      ]);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h2>
          Question {current + 1} of {questions.length}
        </h2>
        <p className="quiz-question">{questions[current].text}</p>
        <div className="quiz-options">
          {questions[current].options.map((option, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(option)}
              className="quiz-btn"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


