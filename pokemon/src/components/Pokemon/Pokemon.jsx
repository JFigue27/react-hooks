import React from "react";
import "./pokemon.css";

const Pokemon = ({ name, lastName }) => {
  return (
    <div className="card">
      <h1>Pokemon</h1>
      <div className="container">
        <h3>{name}</h3>
        <h3>{lastName}</h3>
      </div>
    </div>
  );
};

export default Pokemon;
