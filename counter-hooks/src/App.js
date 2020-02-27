import React from 'react';
import Counter from "./Counter";

const App = () => {
  return (
    <div className="App">
      <Counter max={15} step={5} />
    </div>
  );
}

export default App;
