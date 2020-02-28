import { DATA_LOADED, ERROR, CHANGE_STATUS_LOADING_TO_FALSE, LOADING } from '../action-types';

export const initialState = {
  data: [],
  loading: true,
  error: null
}

export const reducer = (state, action) => {
  if (action.type === DATA_LOADED) {
    return {
      data: action.payload,
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
      data: [],
      loading: true,
      error: null
    }
  }

   if (action.type === ERROR) {
    return {
      data: null,
      loading: false,
      error: action.payload.error
    }
  }
  return state;
}
