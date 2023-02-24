
import React from 'react';
import './css/Mainpage.css';
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