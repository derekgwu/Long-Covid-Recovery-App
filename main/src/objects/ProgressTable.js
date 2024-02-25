import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProgressTable = ({ username }) => {
  const [progressData, setProgressData] = useState(null);

  useEffect(() => {
    const fetchProgressData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/${username}`);
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
    const days = Object.keys(progressData);

    return days.map((day, index) => (
      <button
        key={index}
        style={{ backgroundColor: progressData[day] ? 'green' : 'red' }}
      >
        {day}
      </button>
    ));
  };

  return (
    <div>
      <h2>Progress Table</h2>
      {renderButtons()}
    </div>
  );
};

export default ProgressTable;