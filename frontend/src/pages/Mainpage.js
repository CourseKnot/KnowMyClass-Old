import React from 'react';
import { Link } from 'react-router-dom';
import MainPageSearch from '../components/MainPageSearch';
import './css/MainPage.css';
import readReview from '../assets/Read-Review-Img.svg';

const MainPage = () => {
  return (
    <div>
      <div className='mainpage-search'>
        <div className='mainpage-search1'>
          <h1>“Have you taken</h1>
          <MainPageSearch label="What Course?" placeholder="Search for a course" />
          <h1>with</h1>
          <MainPageSearch label="Which Professor?" placeholder="Search for a professor" />
          <h1>?</h1>
        </div>
        <h1>...how was it?"</h1>
      </div>
      <div className='mainpage-head'>
        <img className='read-review-img' src={readReview} alt="Read-Review-Img" />
        <div className='mainpage-head1'>
          <h1>READ STUDENTS' REVIEWS</h1>
          <h6>("THERE'S MORE... RATINGS, TIPS/SUGGESTIONS, AND COURSE SYLLABI!")</h6>
        </div>
      </div>
      
      
      <Link to="/course-display">Go to Course Display</Link>
    </div>
  );
};

export default MainPage;
