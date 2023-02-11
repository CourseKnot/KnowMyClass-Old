import React from 'react';
import './Searchbar.css';

const Searchbar = () => {
  return (
    <div className='search-bar-container'>
      <input
        type="text"
        placeholder="Search for a class or a professor"
        className='search-input'
      />
      <button className='search-button'>Search</button>
    </div>
  );
};

export default Searchbar;
