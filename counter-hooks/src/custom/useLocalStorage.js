import React from 'react';

const useLocalStorage = (key, initialState) => {
  const getFromLocalStorage = () => {
    const ls = localStorage.getItem(key);
    console.log(ls);
    if (ls) return JSON.parse(ls).state;
    return initialState;
  }

  const [state, setState] = React.useState(getFromLocalStorage());

  React.useEffect(() => {
    localStorage.setItem(key, JSON.stringify({ state }))
    console.log(localStorage);
  }, [state, key]);

  return [state, setState];
}

export default useLocalStorage;