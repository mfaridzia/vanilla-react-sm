import React from 'react';
import Grudges from './grudge/Grudges';
import NewGrudge from './grudge/NewGrudge';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <NewGrudge />
      <Grudges />
    </div>
  );
}

export default App;