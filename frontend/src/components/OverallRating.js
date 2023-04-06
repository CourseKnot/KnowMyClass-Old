import React from 'react';
import './css/OverallRating.css'
import overallRatingIcon from '../assets/overall-rating-icon.png';

const OverallRating = (props) => {
    return (
        <div className='overall-rating'>
            <div className='overall-rating-rate'>
                <div className='overall-rating-actual-rate'>
                    <p>{props.rate}</p>
                </div>
                <div className='overall-rating-full-rate'>
                    <p>/5</p>
                </div>
            </div>
            <div className='overall-rating-text'>
                <p>Overall Rating</p>
            </div>
            <div className='overall-rating-icon'>
                <img src={overallRatingIcon} alt="overall-rating-icon" />
            </div>
        </div>
    );
};

export default OverallRating;
