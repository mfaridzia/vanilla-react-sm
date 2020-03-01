import { useReducer, useCallback } from 'react';

export const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const thunkDispatch = useCallback(action => {
    if(typeof action === "function") {
      action(dispatch); // this is thunk
    } else {
      dispatch(action);
    }
  }, [dispatch]) 

  return [state, thunkDispatch];
}
