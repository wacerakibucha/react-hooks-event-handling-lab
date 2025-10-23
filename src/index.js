import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './components/Keypad';
import EyesOnMe from './components/EyesOnMe';

// Render the app
ReactDOM.render(
  <div>
    <h1>React Event Handling Lab</h1>
    <Keypad />
    <EyesOnMe />
  </div>,
  document.getElementById('root') // Make sure your public/index.html has <div id="root"></div>
);
