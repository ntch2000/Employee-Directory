import React from "react";

const Search = (props) => {
  return (
    <input
      className="form-control me-2"
      type="search"
      placeholder="Search"
      aria-label="Search"
      onChange={props.searchEmployees}
    />
  );
};

export default Search;
