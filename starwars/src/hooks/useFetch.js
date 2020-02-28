import  { useEffect, useReducer } from 'react';
import { reducer, initialState } from '../reducers/starwars';
import { DATA_LOADED, ERROR, CHANGE_STATUS_LOADING_TO_FALSE, LOADING } from '../action-types';

const useFetch = (endpoint) => {
  const [state, dispatch ] = useReducer(reducer, initialState);

  useEffect(() => {
    const get = async () => {
      try {
        const response = await fetch(endpoint);
        const data = await response.json();
        dispatch({
          type: DATA_LOADED,
          payload: data
        })
      } catch (error) {
        dispatch({
          type: ERROR,
          payload: { error }
        })
      } finally {
        dispatch({
          type: CHANGE_STATUS_LOADING_TO_FALSE
        })
      }
    }
    get();
  }, [endpoint, state.loading])

  const reload = () =>  dispatch({type: LOADING})

  const { data, loading, error } = state;

  return [data, loading, error, reload];
}

export default useFetch;
