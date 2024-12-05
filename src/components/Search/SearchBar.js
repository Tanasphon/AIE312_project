import React, { useState } from 'react';
import API from '../../api';

const SearchBar = ({ onSearchResults }) => {
  const [query, setQuery] = useState('');

  const handleSearch = async () => {
    const response = await API.get(`/posts/search?q=${query}`);
    onSearchResults(response.data);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
