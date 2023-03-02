import React from 'react';
import './css/Tag.css'

const Tag = (props) => {
    return (
        <div className='tag'>
            <p>{props.text}</p>
        </div>
    );
};

export default Tag;
