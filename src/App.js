import React from 'react';
import './App.css';
import useStopwatch from './hooks/useStopwa';

function Stopwatch() {
  const {
    isRunning,
    time,
    startStopwatch,
    stopStopwatch,
    resetStopwatch,
    formattedTime,
  } = useStopwatch();

  return (
    <div>
      <h2>Stopwatch</h2>
      <p>{formattedTime()}</p>
      <button onClick={startStopwatch} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopStopwatch} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Stopwatch App</h1>
      <Stopwatch />
    </div>
  );
}

export default App;

