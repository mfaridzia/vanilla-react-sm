import React, {memo, useContext} from 'react';
import { GrudgeContext } from '../context/GrudgeContext';

const Grudge = ({ grudge }) => {
  const { toggleForgivness } = useContext(GrudgeContext);
  const forgive = () => toggleForgivness(grudge.id);
  console.log('Rendering grudge', grudge.id);
  return (
    <article className="grudge">
      <h3> {grudge.person} </h3>
      <p> {grudge.reason} </p>
      <div className="grudge-conrols"> 
        <label htmlFor="grudge-forgiven" className="grudge-forgiven">
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />
          Forgiven
        </label>
      </div>
    </article>
  );
};

export default memo(Grudge);