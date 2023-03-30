import React from 'react';
import DropDown from '../components/DropDown';
import CheckBox from '../components/CheckBox';
import ReviewCard from './ReviewCard';
import './css/AllReview.css';

const AllReview = () => {
  return (
    <div className='all-review'>
        <div className='all-review-head'>
            <p className='all-review-text'>All Reviews (3):</p>
            <CheckBox />
            <DropDown />
        </div>
        <br></br>
        <br></br>
        <div className='all-review-body'>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
        </div>
        <br></br>
        <br></br>
    </div>
  );
};

export default AllReview;
