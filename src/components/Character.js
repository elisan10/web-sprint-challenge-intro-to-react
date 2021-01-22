// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = ({ characters, open, close }) => {
  return (
    <Styling className="character-container">
      <div className="name">
        <h2>{characters.name}</h2>
      </div>

      <div className="bio">
        <p>Birth Year: {characters.birth_year}</p>
        <p>Gender: {characters.gender}</p>
        <p>Height: {characters.height}</p>
        <p>Mass: {characters.mass}</p>
      </div>
    </Styling>
  );
};

const Styling = styled.div`
  background-color: white;

  &:hover {
    opacity: 75%;
    background-color: #afc9e2;
    transition: all 0.5s ease-in-out;
  }
  h2 {
    color: ${(pr) => pr.theme.nameColor};
  }
`;

export default Character;
