import React from 'react';
import './App.css';
import Countdown from "react-countdown-now";

function App() {
  const inputTime = TimeInput;

  const countDownTime = Date.now() + (60 * inputTime * 1000);
  return (
    <div className="App">
      <header className="App-header">
        <Countdown date={countDownTime} classname="timer" daysInHours />
        <h3>TIME TO LAUNCH</h3>
      </header>
      {TimeInput}
    </div>
  );
}

function TimeInput() {
  // timer input
  // set a 1 minutes wait
  // then rest timer
  <input />
}

export default App;
