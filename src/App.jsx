import { useState } from "react";
import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";
import ResultPage from "./components/ResultPage";

function App() {
  const [userName, setUserName] = useState("");
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  return (
    <>
      {!quizStarted && !quizFinished && (
        <LandingPage
          onStart={(name) => {
            setUserName(name);
            setQuizStarted(true); // ✅ switch to QuizPage
          }}
        />
      )}

      {quizStarted && !quizFinished && (
        <QuizPage
          userName={userName}
          onFinish={(finalScore, finalAnswers) => {
            setScore(finalScore);
            setAnswers(finalAnswers);
            setQuizStarted(false);
            setQuizFinished(true); // ✅ switch to ResultPage
          }}
        />
      )}

      {quizFinished && (
        <ResultPage
          userName={userName}
          score={score}
          answers={answers}
          onRestart={() => {
            setQuizFinished(false);
            setQuizStarted(false); // ✅ this fixes restart
            setScore(0);
            setAnswers([]);
          }}
        />
      )}
    </>
  );
}

export default App;
