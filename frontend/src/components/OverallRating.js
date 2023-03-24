import React from 'react';
import './css/OverallRating.css'
import overallRatingIcon from '../assets/overall-rating-icon.png';

const OverallRating = (props) => {
    return (
        <div className='overall-rating'>
            <div className='overall-rating-text'>
                <p>{props.text}</p>
            </div>
            <div className='overall-rating-rate'>
                <p>{props.rate}</p>
            </div>
            <div className='overall-rating-icon'>
                <img src={overall-ratingIcon} alt="overall-rating-icon" />
            </div>
        </div>
    );
};

export default OverallRating;
