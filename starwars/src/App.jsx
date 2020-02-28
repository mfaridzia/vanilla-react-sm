import React from 'react';
import useFetch from './hooks/useFetch';
import './App.css';

const URL_ENDPOINT = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [data, loading, error, reload] = useFetch(`${URL_ENDPOINT}/characters`);

  if(loading) return <p> Loading... </p>;
  if(error) return <p>Error..</p>;

  return (
    <div className="App">
      <button onClick={reload}> Reload  </button>
      <ul>
      { data.results.map(c => {
          return <li key={c.id}> {c.name} </li>
      })}
      </ul>
    </div>
  );
}

export default App;