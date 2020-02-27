import React, { useRef } from 'react';
import useLocalStorage from './custom/useLocalStorage';

/* 
  #If not using custom hooks
  const getFromLocalStorage = () => {
    const ls = localStorage.getItem('counter');
    console.log(ls)
    if(ls) return JSON.parse(ls).count;
    return 0;
  } 

  const saveToLocalStorage = (count) => {
    localStorage.setItem('counter', JSON.stringify({ count }))
    console.log(localStorage)
  }
*/

const Counter = ({max, step}) => {
  const [count, setCount] = useLocalStorage('counterValue', 0)
  const refCount = useRef();

  let message = "";
  if (refCount.current < count) message = "Higher";
  if (refCount.current > count) message = "Lower";

  refCount.current = count;

  const increment = () => {
    return setCount(c => {
      if(c >= max) return c;
      return c + step;
    })
  }

  const decrement = () => {
    return setCount(c => {
      if (c <= 0) return c;
      return c - step;
    })
  }

  const reset = () => setCount(0);
  
  React.useEffect(() => {
    document.title = `Count ${count}`;
  }, [count]);

  /*
   #if not using custom hooks
   React.useEffect(() => {
    saveToLocalStorage(count);
  }, [count]);
  */

  return (
    <div>
      <h1> {count} </h1>
      <p> {message} </p>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default Counter;