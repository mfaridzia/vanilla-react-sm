import React, {memo} from 'react';

const Grudge = ({ grudge, onForgive }) => {
  const forgive = () => onForgive(grudge.id);
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