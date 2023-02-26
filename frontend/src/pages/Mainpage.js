
import React from 'react';
import './css/Mainpage.css';
import Searchbar from '../components/Searchbar';

const Mainpage = () => {

    return (
      <div className='mainpage'>
        <p className='mainpage-bigtext'>Discover the right classes for you</p>
        <p className='mainpage-smalltext'>View student reviews, ratings, and class syllabus</p>
        <Searchbar />
      </div>
    );
  };

export default Mainpage;