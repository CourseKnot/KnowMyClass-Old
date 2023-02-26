import React from 'react';
import { useState } from 'react';
import './css/Searchbar.css';
import { useNavigate } from "react-router-dom"
import searchbuttonsmall from "../assets/search-button-small.png"
import searchbuttonlarge from "../assets/search-button-large.png"


const Searchbar = () => {

  const navigate = useNavigate();
  const handleSearchClick = () => {
    navigate('/show-class');
  };
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };


  return (
    <div className='searchbar'>
      <input
        type="text"
        placeholder="Search for a class or a professor"
        className='search-input'
      />
      <div className='search-button-div'>
        <img
              src={hovered ? searchbuttonlarge : searchbuttonsmall}
              className='search-button'
              alt="Search"
              onClick={handleSearchClick}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
          />
      </div>
    </div>
  );
};

export default Searchbar;
