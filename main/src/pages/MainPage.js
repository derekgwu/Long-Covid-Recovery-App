import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import logo from './images/neural.png';
import './MainPage.css';
import ProgressBar from './components/ProgressBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Parent = () => {
    const { username } = useParams();
  
    return (
      <div>
        <UserProfile />
        <ProgressBar username={username} />
        <ProgressButtons username={username} />
      </div>
    );
  };
const UserProfile = () => {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${username}`);
        setUserData(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div class="welcome_back">
      {userData ? (
        <div>
          <p>Welcome Back {userData.username}!</p>
          {/* Add additional profile information here */}
        </div>
      ) 
      
      : (
        <img src={logo} className="App-logo" alt="logo" />
      )}
    </div>
  );
};

const ProgressButtons = ({ username }) => {
    const [progressData, setProgressData] = useState(null);
  
    useEffect(() => {
      const fetchProgressData = async () => {
        try {
          const response = await axios.get(`http://localhost:3000/${username}`);
          setProgressData(response.data.progress);
        } catch (error) {
          console.error('Error fetching progress data:', error);
        }
      };
  
      fetchProgressData();
    }, [username]);
  
    const renderButtons = () => {
      if (!progressData) {
        return null;
      }
  
      // Assuming progressData is an object with boolean values for each day
      const days = Array.from({ length: 14 }, (_, index) => index + 1);
  
      return days.map((day) => (
        <Link to="/Day1">
        <button
            class="progress_btn"
          key={day}
          style={{ backgroundColor: progressData[`day${day}`] ? 'green' : 'red' }
        }
        >
          {`Day ${day}`}
        </button>
        </Link>
        

      ));
    };
  
    return (
      <div>
        <h2>Get Started With Another Training</h2>
        {renderButtons()}
      </div>
    );
  };

 


export default Parent;