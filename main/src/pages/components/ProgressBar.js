// ProgressBar.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProgressBar = ({ username }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${username}`);
        const progressData = response.data;
  
        // Check if progressData exists and has the pct property
        if (progressData && progressData.pct !== undefined) {
          const calculatedProgress = progressData.pct;
          setProgress(calculatedProgress);
        } else {
          console.error('Invalid progress data format:', progressData);
        }
      } catch (error) {
        console.error('Error fetching progress data:', error);
      }
    };
  
    fetchProgress();
  }, [username]);

  return (
    <div className="progress-bar-container">
      <progress value={progress} max="100"></progress>
      <p>{`${progress}% Completed`}</p>
    </div>
  );
};

export default ProgressBar;