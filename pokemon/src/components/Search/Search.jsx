import React from "react";

const Search = ({ value, onChange }) => {
  return (
    <div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  );
};

export default Search;
