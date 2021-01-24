import React from "react";

const Search = (props) => {
  return (
    <div className="text-center">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={searchEmployees}
      />
    </div>
  );
};

export default Search;
