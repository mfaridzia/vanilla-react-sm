import React from 'react';
import Grudge from './Grudge';

const Grudges = ({ grudges = [], onForgive }) => {
  return (
    <div className="grudges">
      <h2> Grudges ({ grudges.length }) </h2>
      { grudges.map(grudge => {
          return <Grudge key={grudge.id} grudge={grudge} onForgive={onForgive} />
      })}
    </div>
  );
};

export default Grudges;