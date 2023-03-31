import React from 'react';
import './css/Difficulty.css'
import { Icon } from '@iconify/react';
import difficultyIcon from '../assets/Difficulty-icon.svg';

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
                <Icon className='icon' icon="iconoir:gym" />
            </div>
        </div>
    );
};

export default Difficulty;
