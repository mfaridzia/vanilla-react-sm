import React, {useState, memo} from 'react';

const NewGrudge = ({ onSubmit }) => {
  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');

  const handleChange = (e) => {
    e.preventDefault();
    onSubmit({ person, reason });
  };

  console.log('Rendering new grudge!');
  
  return (
    <form onSubmit={handleChange}>
      <input 
        type="text" 
        name="person" 
        value={person} 
        onChange={e => setPerson(e.target.value)} 
      />
       <input 
        type="text" 
        name="reason" 
        value={reason} 
        onChange={e => setReason(e.target.value)} 
      />
      <button type="submit"> Submit </button>
    </form>
  );
};

export default memo(NewGrudge);