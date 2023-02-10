
import React from 'react';
import './Mainpage.css';
import Navigationbar from '../components/Navbar';
import Searchbar from '../components/Searchbar';

const Mainpage = () => {

    return (
      <div className='main-page'>
        <p className='main-page-text'>Discover the right classes for you</p>
        <br></br>
        <p className='main-page-small-text'>View student reviews, ratings, and class syllabus</p>
        <Searchbar />
      </div>
    );
  };

export default Mainpage;