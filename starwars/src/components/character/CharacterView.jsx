import React, { useState, useEffect } from 'react';

const URL_ENDPOINT = process.env.REACT_APP_URL_ENDPOINT;

const CharacterView = ({ match }) => {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    const getCharacter = async () => {
      try {
        const response = await fetch(`${URL_ENDPOINT}/characters/${match.params.id}`);
        const data = await response.json();
        setCharacter(data.result[0]);
      } catch (error) {
        console.error(error);
      }
    }

    getCharacter();
  }, [match.params.id])

  return (
    <section className="CharacterView">
      <h2>{character.name}</h2>
      <ul className="CharacterDetails" style={{ listStyle: 'none' }}>
        <li>
          <strong>Birth Year</strong>: {character.birthYear}
        </li>
        <li>
          <strong>Eye Color</strong>: {character.eyeColor}
        </li>
        <li>
          <strong>Gender</strong>: {character.gender}
        </li>
        <li>
          <strong>Hair Color</strong>: {character.hairColor}
        </li>
        <li>
          <strong>Heigh</strong>: {character.height}
        </li>
        <li>
          <strong>Mass</strong>: {character.mass}
        </li>
        <li>
          <strong>Skin Color</strong>: {character.skinColor}
        </li>
      </ul>
    </section>
  );
}

export default CharacterView;