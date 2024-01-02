import React, { useState } from 'react';
import SearchBar from './Searchbar';
import ImageGallery from './ImageGallery';

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleFormSubmit = value => {
    setSearchTerm(value.searchBar);
  };

  return (
    <div>
      <SearchBar onSubmit={handleFormSubmit} />
      <ImageGallery searchTerm={searchTerm} />
    </div>
  );
};
