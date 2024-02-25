// WordGame.js

import React, { useState, useEffect } from 'react';
import './Day1.css';
import GameBoard from './components/Gameboard';

const WordGame = () => {
  const [words, setWords] = useState([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [userSelection, setUserSelection] = useState(Array(10).fill(null));

  const generateRandomWords = () => {
    const wordList = ['ash', 'metal', 'boat', 'wire', 'destroy', 'clock', 'trust', 'towel', 'switch', 'mower'];
    const shuffledWords = wordList.sort(() => Math.random() - 0.5);
    const selectedWords = shuffledWords.slice(0, 10);

    setWords(selectedWords);
  };

  const handleStartGame = () => {
    generateRandomWords();
    setGameStarted(true);
  };

  useEffect(() => {
    if (gameStarted) {
      const intervalId = setInterval(() => {
        setShowWord(true);

        setTimeout(() => {
          setShowWord(false);
          if (currentWordIndex < 9) {
            setCurrentWordIndex(currentWordIndex + 1);
          } else {
            setGameFinished(true);
          }
        }, 500);
      }, currentWordIndex * 500);

      return () => clearInterval(intervalId);
    }
  }, [currentWordIndex, gameStarted]);

  const handleWordSelection = (selectedWord) => {
    const newUserSelection = [...userSelection];
    newUserSelection[currentWordIndex] = selectedWord;
    setUserSelection(newUserSelection);

    if (currentWordIndex === 9) {
      // Check correctness after the last word is selected
      checkUserSelection();
    } else if (currentWordIndex < 9 && selectedWord === words[currentWordIndex]) {
      setCurrentWordIndex(currentWordIndex + 1);
    }
  };

  const checkUserSelection = () => {
    // Check correctness using the userSelection array
    const isCorrect = userSelection.join('') === words.join('');

    if (isCorrect) {
      // Handle correct selection
      console.log('Correct!');
    } else {
      // Handle incorrect selection
      console.log('Incorrect!');
    }
  };

  

  return (
    <div>
        <h2>Module 1</h2>
      {!gameStarted && !gameFinished && (
        <div>
          <p className="game-instruction">Remember the words that appear on the screen. You'll be asked to recall which words appeared through the exercise.</p>
          <button className="start-btn" onClick={handleStartGame}>Start Game</button>
        </div>
      )}
      {gameStarted && !gameFinished && (
        <div className="word-container">
          <p className="current-word"><strong>{words[currentWordIndex]}</strong></p>
        </div>
      )}
      {gameFinished && (
        <div class="App">
          <GameBoard />
        </div>
      )}
    </div>
  );
};

export default WordGame;
