import React from 'react';
import './css/Searchbar.css';
import { useNavigate } from "react-router-dom"
const Searchbar = () => {

  const navigate = useNavigate();

  const handleSearchClick = () => {
    // Add your code to execute when the search button is clicked
    navigate('/show-class');
  };

  return (
    <div className='search-bar-container'>
      <input
        type="text"
        placeholder="Search for a class or a professor"
        className='search-input'
      />
      <button className='search-button' onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Searchbar;
