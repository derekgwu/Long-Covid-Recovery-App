// GameBoard.js

import './Gameboard.css'
import React from "react";
import Data from "./Data";
import Card from "./Card";
import ContinueButton from "./ContinueButton"
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';

function GameBoard() {
  const [cardsArray, setCardsArray] = React.useState([]);
  const [moves, setMoves] = React.useState(0);
  const [firstCard, setFirstCard] = React.useState(null);
  const [secondCard, setSecondCard] = React.useState(null);
  const [stopFlip, setStopFlip] = React.useState(false);
  const [won, setWon] = React.useState(0);
  const [finishedGame, setFinishedGame] = React.useState(false);

  // Function to start a new game
  const newGame = () => {
    const randomOrderArray = Data.sort(() => 0.5 - Math.random());
    setCardsArray(randomOrderArray);
    setMoves(0);
    setFirstCard(null);
    setSecondCard(null);
    setWon(0);
    setFinishedGame(false);
  };

  // Function to handle the selection of cards
  const handleSelectedCards = (item) => {
    if (firstCard !== null && firstCard.id !== item.id) {
      setSecondCard(item);
    } else {
      setFirstCard(item);
    }
  };

  // Function to check if the selected cards match
  const checkMatch = () => {
    setStopFlip(true);

    if (firstCard.name === secondCard.name) {
      setCardsArray((prevArray) => {
        return prevArray.map((unit) => {
          if (unit.name === firstCard.name) {
            return { ...unit, matched: true };
          } else {
            return unit;
          }
        });
      });
      setWon((prevVal) => prevVal + 1);
      removeSelection();
    } else {
      setTimeout(() => {
        removeSelection();
      }, 1000);
    }
  };

  // Function to remove the selection after checking
  const removeSelection = () => {
    setFirstCard(null);
    setSecondCard(null);
    setStopFlip(false);
    setMoves((prevValue) => prevValue + 1);
  };

  // Effect to start a new game on mount
  React.useEffect(() => {
    newGame();
  }, []);

  // Effect to check for card match when firstCard and secondCard change
  React.useEffect(() => {
    if (firstCard && secondCard) {
      checkMatch();
    }
  }, [firstCard, secondCard]);

  // Function to handle sorting of words
  const handleSortWords = () => {
    // Display the list of words and allow the user to sort them
    console.log("List of words:", cardsArray.map((card) => card.name));
    // You can implement a UI for sorting the words here
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Memory Game</h1>
      </div>
      <div className="board">
        {cardsArray.map((item) => (
          <Card
            key={item.id}
            item={item}
            handleSelectedCards={handleSelectedCards}
            toggled={item === firstCard || item === secondCard || item.matched === true}
            stopflip={stopFlip}
          />
        ))}
      </div>
      {won !== 6 ? (
        <div className="comments">Moves : {moves}</div>
      ) : (
        <div className="comments">
          {moves} moves
          <ContinueButton as={Link} to="/quiz1">Continue</ContinueButton>
        </div>
      )}
      {finishedGame && (
        <div className="sort-words-section">
          
        </div>
      )}
    </div>
  );
}

export default GameBoard;
