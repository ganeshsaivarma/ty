import React, { useState } from "react";
import './SymptomChecker.css';  // Ensure this file is imported for the styles

const SymptomChecker = () => {
  const questions = [
    {
      question: "How's your energy level lately?",
      options: [
        "I feel energetic and active!",
        "Some days I feel a little sluggish.",
        "I often feel low and tired."
      ]
    },
    {
      question: "How’s your mood these days?",
      options: [
        "Generally positive and happy!",
        "A bit moody, depends on the day.",
        "Feeling unusually down lately."
      ]
    },
    {
      question: "Are you experiencing weight changes?",
      options: [
        "My weight is steady.",
        "Small changes here and there.",
        "Noticeable gain or loss without trying."
      ]
    },
    {
      question: "How's your sleep quality?",
      options: [
        "I sleep well every night.",
        "Some nights I have trouble sleeping.",
        "I often struggle to get good sleep."
      ]
    },
    {
      question: "Do you feel stressed often?",
      options: [
        "I feel calm and balanced most days.",
        "Sometimes I feel stressed, but I manage.",
        "I feel stressed or anxious regularly."
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const handleAnswer = (answer) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsQuizComplete(true);
    }
  };

  const getResultMessage = () => {
    // Example logic based on answers
    const positiveAnswers = answers.filter((answer) =>
      answer.includes("I feel energetic") ||
      answer.includes("Generally positive") ||
      answer.includes("My weight is steady") ||
      answer.includes("I sleep well")
    ).length;

    if (positiveAnswers === answers.length) {
      return "You seem to be in great health! Keep up the good work.";
    } else if (positiveAnswers > answers.length / 2) {
      return "You're doing well, but it could be helpful to monitor your health a bit more.";
    } else {
      return "It might be a good idea to check in with a doctor for a thyroid checkup — just to be safe!";
    }
  };

  return (
    <div className="quiz-container">
      {!isQuizComplete ? (
        <>
          <div className="question-container">
            <h2>{questions[currentQuestionIndex].question}</h2>
          </div>

          <div className="options">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                className="option-btn"
                onClick={() => handleAnswer(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </>
      ) : (
        <div className="results-container">
          <h2>Thank you for sharing!</h2>
          <p>{getResultMessage()}</p>
        </div>
      )}
    </div>
  );
};

export default SymptomChecker;
