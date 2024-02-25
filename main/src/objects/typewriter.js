import React, { useState, useEffect } from 'react';
const Typewriter = () => {
  const [text, setText] = useState('');
  const words = ['long-term'];

  useEffect(() => {
    let index = 0;
    let timer;

    const typeNextWord = () => {
      if (index < words.length) {
        const word = words[index];
        setText(word);
        index++;
        timer = setTimeout(typeNextWord, 200); // Adjust the delay as needed
      }
    };

    typeNextWord();

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [text]);

  return (
    <div>
      <h1 className="typewriter">{text}</h1>
    </div>
  );
};

export default Typewriter;