// FancyButton.js
import styled from 'styled-components';

const ContinueButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 10px;
  border: none;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white; /* Change the background color on hover */
    color: black;
    
  }
`;

export default ContinueButton;