import React from 'react';
import './css/RateCourseTag.css'
import rateCourseIcon from '../assets/rate-course-icon.png';

const RateCourseTag = (props) => {
    return (
        <div className='rate-course'>
            <div className='rate-course-icon'>
                <img src={rateCourseIcon} alt="rate-course-icon" />
            </div>
            <div className='rate-course-tag'>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default RateCourseTag;
