// composant Searchbar
import React, { useState } from 'react';
import '../styles/components/SearchBar.scss';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  console.log(searchQuery);
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Research..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default SearchBar;
