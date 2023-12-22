import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/about.css'; // Update the path to your about.css file

function AboutPage() {
  // State to manage the value of the text box
  const [textBoxValue, setTextBoxValue] = useState('');

  // Event handler for text box changes
  const handleTextBoxChange = (event) => {
    setTextBoxValue(event.target.value);
  };

  return (
    <div>
      <h2>About Page</h2>
      <p>This is the about page.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Turpis massa sed elementum tempus egestas sed. 
        Nam libero justo laoreet sit. Enim nec dui nunc mattis enim. 
        Est placerat in egestas erat imperdiet sed euismod. 
        Erat imperdiet sed euismod nisi. 
        Facilisis gravida neque convallis a cras semper auctor neque. Massa tincidunt nunc pulvinar sapien et.</p>

      {/* Adding a text box */}
      <label>
        Enter Text:
        <input type="text" value={textBoxValue} onChange={handleTextBoxChange} />
      </label>

      {/* Displaying the text entered in the text box */}
      <p>Your entered text: {textBoxValue}</p>
    </div>
  );
}

export default AboutPage;