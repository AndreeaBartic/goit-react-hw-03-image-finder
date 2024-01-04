import React, { useState } from 'react';

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState({ searchBar: '' });

  const handleChange = e => {
    setInputValue(prevInputValue => {
      return {
        ...prevInputValue,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(inputValue);
  };
  return (
    <div>
      <header className="searchbar">
        <form onSubmit={handleSubmit} className="form">
          <button type="submit" className="search-button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={handleChange}
            className="input"
            type="text"
            name="searchBar"
            value={inputValue.searchBar}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </div>
  );
};
export default SearchBar;
