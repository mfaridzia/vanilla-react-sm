import React, {useReducer, useCallback} from 'react';
import { v4 as ID } from 'uuid';
import Grudges from './grudge/Grudges';
import NewGrudge from './grudge/NewGrudge';
import IS from './data/initialState';
import './App.css';

const grudgesReducer = (state, action) => {
  if (action.type === "GRUDGE_ADD") {
    return [action.payload, ...state];
  }
  if (action.type === "GRUDGE_FORGIVE") {
    return state.map(grudge => {
      if(grudge.id !== action.payload.id) return grudge;
      return {
        ...grudge,
        forgiven: !grudge.forgiven
      };
    });
  }
}

const App = () => {
  const [grudges, dispatch] = useReducer(grudgesReducer, IS);

  /*
    using useCallback here to check referential equality for methods,
    if addGrudge changed, others method should not re-rendering, because 
    it's still same method
  */
  const addGrudge = useCallback(({ person, reason }) => {
    dispatch({
      type: "GRUDGE_ADD",
      payload: {
        id: ID(),
        person,
        reason,
        forgiven: false
      }
    });
  }, [dispatch])

  const toggleForgivness = useCallback((id) => {
    dispatch({
      type: "GRUDGE_FORGIVE",
      payload: { id }
    })
    console.log('Changed!')
  }, [dispatch])

  return (
    <div className="App">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgivness} />
    </div>
  );
}

export default App;
