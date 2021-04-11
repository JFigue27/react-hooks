import React, { useState } from "react";
import Search from "../Search/Search";

const Pokemons = () => {
  const [search, setSearch] = useState("");
  const pokemonList = [
    { name: "Jose", lastName: "Figueroa" },
    { name: "Maria", lastName: "Barrios" },
    { name: "Elizabeth", lastName: "Gonzalez" },
    { name: "Abraham", lastName: "Ortiz" },
    { name: "Sara", lastName: "Figueroa" },
  ];

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filterPokemon = pokemonList.filter((item) => {
    return (
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.lastName.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div>
      <h1>List of Pokemones</h1>
      <Search value={search} onChange={handleSearch} />
      {/* <input type="text" value={search} onChange={handleSearch} /> */}
      {filterPokemon.map((item) => (
        <h1>
          {item.name} - {item.lastName}
        </h1>
      ))}
    </div>
  );
};

export default Pokemons;
