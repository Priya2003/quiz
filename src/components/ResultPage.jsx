import "../styles/ResultPage.css";

export default function ResultPage({ userName, score, answers, onRestart }) {
  return (
    <div className="result-container">
      <div className="result-box">
        <h1>Quiz Finished 🎉</h1>
        <p>
          {userName}, your score is {score} / {answers.length}
        </p>

        {/* Conditional message */}
        <h2 className="result-message">
          {score >= 7 ? "You’re a gentleman 👑" : "Work on yourself 🙃"}
        </h2>

        <h3>Answers:</h3>
        <ul className="result-list">
          {answers.map((ans, idx) => (
            <li
              key={idx}
              className={ans.selected === ans.correct ? "correct" : "wrong"}
            >
              Q{idx + 1}. {ans.question} <br />
              <b>Your Answer:</b> {ans.selected} | <b>Correct:</b> {ans.correct}
            </li>
          ))}
        </ul>

        <button onClick={onRestart} className="restart-btn">
          Restart Quiz
        </button>
      </div>
    </div>
  );
}
