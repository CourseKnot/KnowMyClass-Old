import React from 'react';
import './css/AISummary.css'

const AISummary = (props) => {
    return (
        <div className='ai-summary'>
            <div className='ai-summary-text1'>
                <p>Ai generated summary -</p>
            </div>
            <div className='ai-summary-text2'>
                <p>Students say the course...</p>
            </div>
            <div className='ai-summary-text3'>
                <p>{props.text}</p>
            </div>
        </div>
    );
};

export default AISummary;
