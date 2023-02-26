import React from 'react';
import { useState } from 'react';
import './css/Searchbar.css';
import { useNavigate } from "react-router-dom"
import searchbuttonsmall from "../assets/search-button-small.png"
import searchbuttonlarge from "../assets/search-button-large.png"


const Searchbar = ({isSmall}) => {

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
    <div className={isSmall ? 'searchbar-small' : 'searchbar'}>
      <input
        type="text"
        placeholder="Search for a class or a professor"
        className={isSmall ? 'search-input-small' : 'search-input'}
      />
      <div className={isSmall ? 'search-button-div-small': 'search-button-div'}>
        <img
              src={hovered ? searchbuttonlarge : searchbuttonsmall}
              className={isSmall ? 'search-button-small' : 'search-button'}
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
