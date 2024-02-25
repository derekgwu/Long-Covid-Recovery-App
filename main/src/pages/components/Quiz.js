import React, { useState } from 'react';
import ContinueButton from "./ContinueButton"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './Quiz.css'; // Create a CSS file for styling

const questions = [
  {
    id: 1,
    question: 'Did you see the word steel?.',
    answer: false
  },
  {
    id: 2,
    question: 'Did you see the word metal?',
    answer: true
  },
  {
    id: 3,
    question: 'Did you see the word switch?',
    answer: true
  },
  {
    id: 4,
    question: 'Did you see the word wire?',
    answer: true
  },
  {
    id: 5,
    question: 'Did you see the word story?',
    answer: false
  }
];

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (userAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (userAnswer === currentQuestion.answer) {
      setUserScore(userScore + 1);
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setUserScore(0);
    setShowResult(false);
  };

  return (
    <div className="quiz-container">
      <h2>Module 1</h2>
      {!showResult && (
        <div>
          <p>{questions[currentQuestionIndex].question}</p>
          <div className="button-container">
            <button onClick={() => handleAnswer(true)}>True</button>
            <button onClick={() => handleAnswer(false)}>False</button>
          </div>
        </div>
      )}
      {showResult && (
        <div>
          <p>Your score: {userScore} out of {questions.length}</p>
          <p>Congratulation on Finishing Module 1!</p>
          <ContinueButton as={Link} to="/dchen4002">Return To Home</ContinueButton>
        </div>
      )}
    </div>
  );
};

export default Quiz;
