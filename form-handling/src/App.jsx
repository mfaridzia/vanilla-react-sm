import React from 'react';
import useForm from './hooks/useForm';
import './App.css';

const initialState = {
  name: '',
  email: '',
  password: '',
  passwordConfirmation: '',
  interest: false
}

const App = () => {
  const [state, setState] = useForm(initialState);

  const clear = () => {
    setState(initialState);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    clear();
  }

  const handleFormChange = (e) => {
    setState({ 
      [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value 
    })
  }

  return (
    <div className="App">
      <form onSubmit={handleFormSubmit} className="form-wrapper">
        <div className="form-control">
          <label htmlFor="name"> Name </label>
          <input 
            type="text"
            name="name"
            value={state.name}
            required
            onChange={handleFormChange}
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="email"> Email </label>
          <input 
            type="email"
            name="email"
            value={state.email}
            required
            onChange={handleFormChange}
          /> 
        </div>
        <div className="form-control">
          <label htmlFor="password"> Password </label>
          <input 
            type="password"
            name="password"
            value={state.password}
            required
            onChange={handleFormChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="confirmPassword"> Confirm Password </label>
          <input 
            type="password"
            name="passwordConfirmation"
            value={state.passwordConfirmation}
            required
            onChange={handleFormChange}
          /> 
        </div>
        <div className="form-control chekbox-control">
          <label className="checkbox-label" htmlFor="interest">  
            <input 
              className="checkbox-input"
              type="checkbox"
              name="interest"
              checked={state.interest}
              onChange={handleFormChange}
            />  
            <span> Do you interest about our product? </span>
          </label>
        </div>
        <div className="form-control"><input type="submit" value="Submit" /></div>
      </form>
    </div>
  );
}

export default App;
