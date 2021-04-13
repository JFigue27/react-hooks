import React from "react";

const Search = ({ search, searchInput, handleSearch }) => {
  return (
    <>
      <input
        type="text"
        value={search}
        ref={searchInput}
        onChange={handleSearch}
      />
    </>
  );
};

export default Search;
