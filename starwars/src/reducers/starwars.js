import { DATA_LOADED, ERROR, CHANGE_STATUS_LOADING_TO_FALSE, LOADING } from '../action-types';

export const initialState = {
  characters: [],
  loading: true,
  error: null
}

export const StarwarsReducer = (state, action) => {
  if (action.type === DATA_LOADED) {
    return {
      characters: action.payload,
      loading: false,
      error: null
    }
  }

  if (action.type === CHANGE_STATUS_LOADING_TO_FALSE) {
    return {
      ...state,
      loading: false
    }
  }

  if (action.type === LOADING) {
    return {
      characters: [],
      loading: true,
      error: null
    }
  }

   if (action.type === ERROR) {
    return {
      characters: null,
      loading: false,
      error: action.payload.error
    }
  }
  return state;
}