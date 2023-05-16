"use client"

import React from 'react';
import axios from 'axios';

function SearchPanel({ onSearch, searchTerm, setSearchTerm }) {
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSearch = async () => {
    try {
      const response = await axios.post('/api/search', { query: searchTerm });
      onSearch(response.data.balance);
    } catch (error) {
      console.error(error);
      onSearch(null);
    }
  }

  return (
    <div className='bg-white px-5 rounded'>
      <input type="text" onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchPanel;


