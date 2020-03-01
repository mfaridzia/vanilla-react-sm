import React from 'react';
import { NavLink } from 'react-router-dom';

const CharacterListItem = ({ character }) => {
  const { id, name } = character
  return (
    <div className="CharacterListItem">
      <NavLink className="CharacterListItemLink" to={`/characters/${id}`}> {name} </NavLink>
    </div>
  )
}

export default CharacterListItem;