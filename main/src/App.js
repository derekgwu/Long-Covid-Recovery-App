// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import logo from './pages/images/neural.png';
import Login from './pages/LoginPage'
import './App.css';
import Typewriter from './objects/typewriter';
import LoginButton from './objects/LoginButton';
import UserProfile from './pages/MainPage';
import Day1 from './pages/Day1';
import Quiz1 from './pages/components/Quiz'



// Define the Home component
function Home() {
  return (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className="title">
            <Typewriter word="longevity" />
          </div>
          <p>
            a memory-based website to help patients recover from the effects of long-covid
          </p>
          {/* Routes for different pages */}
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            
          </Routes>
          <LoginButton as={Link} to="/login">Login</LoginButton>
        </header>
      </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Routes for different pages */}
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/:username" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/day1" element={<Day1 />} />
          <Route path="/quiz1" element={<Quiz1 />} />
        </Routes>
        {/* Move the Link outside of the header */}
      </header>
    </div>
  
  );
}

export default App;