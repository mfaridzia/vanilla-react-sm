import React, {useContext} from 'react';
import {GrudgeContext} from '../context/GrudgeContext';
import Grudge from './Grudge';

const Grudges = () => {
  const { grudges } = useContext(GrudgeContext);

  return (
    <div className="grudges">
      <h2> Grudges ({ grudges.length }) </h2>
      { grudges.map(grudge => {
          return <Grudge key={grudge.id} grudge={grudge} />
      })}
    </div>
  );
};

export default Grudges;