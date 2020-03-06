import { useReducer } from 'react';

const formReducer = (previousState = {}, updatedState = {}) => {
  return {...previousState, ...updatedState};
} 

const useForm = (initialState = {}) => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const setState = updatedState => dispatch(updatedState);

  return [state, setState];
}

export default useForm;