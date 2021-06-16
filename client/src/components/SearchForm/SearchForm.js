import React from "react";

import "./SearchForm.scss";

const Search = ({ handleSearch, searchVal }) => {
  return (
    <form onSubmit={handleSearch} id="searchForm">
      <input className="form__input" placeholder="Search" value={searchVal} />
    </form>
  );
};

export default Search;
