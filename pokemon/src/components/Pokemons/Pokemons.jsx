import React, { useState } from "react";
import Pokemon from "../Pokemon/Pokemon";
import Search from "../Search/Search";
import "./pokemons.css";

const Pokemons = () => {
  const [search, setSearch] = useState("");
  const pokemonList = [
    { name: "Jose", lastName: "Figueroa" },
    { name: "Maria", lastName: "Barrios" },
    { name: "Elizabeth", lastName: "Gonzalez" },
    { name: "Abraham", lastName: "Ortiz" },
    { name: "Sara", lastName: "Figueroa" },
    { name: "Jose", lastName: "Figueroa" },
    { name: "Maria", lastName: "Barrios" },
    { name: "Elizabeth", lastName: "Gonzalez" },
    { name: "Abraham", lastName: "Ortiz" },
    { name: "Sara", lastName: "Figueroa" },
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
      <div className="flex-container">
        {filterPokemon.map((item) => (
          <div>
            <Pokemon name={item.name} lastName={item.lastName} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
