import React from 'react';
import { Link } from 'react-router-dom';
import MainPageSearch from '../components/MainPageSearch';
import MainPageRate from '../components/MainPageRate';
import './css/MainPage.css';
import readReview from '../assets/Read-Review-Img.svg';

const MainPage = () => {
  return (
    <div>
      {/* Main Page Part 1 - Search Section */}
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
      {/* Main Page Part 2 - Search and Read Review */}
      <div className='mainpage-head'>
        <img className='read-review-img' src={readReview} alt="Read-Review-Img" />
        <div className='mainpage-head1'>
          <h1>READ STUDENTS' REVIEWS</h1>
          <h6>("THERE'S MORE... RATINGS, TIPS/SUGGESTIONS, AND COURSE SYLLABI!")</h6>
        </div>
        <Link to="/course-display">View</Link>
      </div>
      {/* Main Page Part 3 - Write Review */}
      <div className='mainpage-rate'>
        <h1>You can also...</h1>
        <MainPageRate />
      </div>
      
      
    </div>
  );
};

export default MainPage;
