import React from "react";

const SearchBox = ({ searcField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br4 "
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
      <hr className="style-four" />
    </div>
  );
};

export default SearchBox;
