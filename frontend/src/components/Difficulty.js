import React from 'react';
import './css/Difficulty.css'
import difficultyIcon from '../assets/Difficulty-icon.png';

const Difficulty = (props) => {
    return (
        <div className='difficulty'>
            <div className='difficulty-text'>
                <p>{props.text}</p>
            </div>
            <div className='difficulty-rate'>
                <p>{props.rate}</p>
            </div>
            <div className='difficulty-icon'>
                <img src={difficultyIcon} alt="difficulty-icon" />
            </div>
        </div>
    );
};

export default Difficulty;
