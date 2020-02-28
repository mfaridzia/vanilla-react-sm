import React, {useCallback, useReducer ,createContext} from 'react';
import { v4 as ID } from 'uuid';
import IS from '../data/initialState';
import { GRUDGE_ADD, GRUDGE_FORGIVE } from './actions-types';

export const GrudgeContext = createContext();

const grudgesReducer = (state, action) => {
  if (action.type === GRUDGE_ADD) {
    return [action.payload, ...state];
  }
  if (action.type === GRUDGE_FORGIVE) {
    return state.map(grudge => {
      if(grudge.id !== action.payload.id) return grudge;
      return {
        ...grudge,
        forgiven: !grudge.forgiven
      };
    });
  }
}

export const GrudgeProvider = ({ children }) => {
  const [grudges, dispatch] = useReducer(grudgesReducer, IS);
  /*
    using useCallback here to check referential equality for methods,
    if addGrudge changed, others method should not re-rendering, because 
    it's still same method, but if using context api, we loss performance optimization
  */
  const addGrudge = useCallback(({ person, reason }) => {
    dispatch({
      type: GRUDGE_ADD,
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
      type: GRUDGE_FORGIVE,
      payload: { id }
    })
  }, [dispatch])

  const contextValue = { grudges, addGrudge, toggleForgivness };

  return (
    <GrudgeContext.Provider value={contextValue}>
      { children }
    </GrudgeContext.Provider>
  )
}