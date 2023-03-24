import React from 'react';
import './css/RateCourseTag.css'

const RateCourseTag = (props) => {
    return (
        <div className='rate-course-tag'>
            <p>{props.text}</p>
        </div>
    );
};

export default RateCourseTag;
