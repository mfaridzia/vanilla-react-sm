import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { DATA_LOADED, ERROR, CHANGE_STATUS_LOADING_TO_FALSE, LOADING } from './action-types';
import CharacterList from './components/character/CharacterList';
import CharacterView from './components/character/CharacterView';
import { StarwarsReducer, initialState } from './reducers/starwars';
import { useThunkReducer } from './hooks/useThunk';
import './App.css';

const URL_ENDPOINT = process.env.REACT_APP_URL_ENDPOINT;

const App = () => {
  const [state, dispatch] = useThunkReducer(StarwarsReducer, initialState);

  useEffect(() => {
    dispatch(() => {})
  }, [dispatch])

  const fetchCharacters = (dispatch) => {
    dispatch({ type: LOADING });
    fetch(`${URL_ENDPOINT}/characters`)
      .then(response => response.json())
      .then(characters => {
        dispatch({ 
          type: DATA_LOADED, 
          payload: characters
        })
        dispatch({ type: CHANGE_STATUS_LOADING_TO_FALSE });
      })
      .catch(error => {
        dispatch({ 
          type: ERROR,
          payload: { error } 
        })
        dispatch({ type: CHANGE_STATUS_LOADING_TO_FALSE });
      })
  }

  return (
    <div className="App">
      <header>
         <h1> Starwars Characters </h1>
      </header>
      <main>
        <section className="sidebar">
          <button onClick={() => dispatch(fetchCharacters)}> Fetch Characters </button>
          <CharacterList characters={state.characters.results} />
        </section>
        <section className="character-view">
          <Route path="/characters/:id" component={CharacterView} />
        </section>
      </main>
    </div>
  );
}

export default App;