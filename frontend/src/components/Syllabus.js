import React from 'react';
import './css/Syllabus.css'
import { Icon } from '@iconify/react';

const Syllabus = (props) => {
    return (
        <div className='syllabus'>
            <div className='syllabus-text'>
                <p>{props.text}</p>
            </div>
            <div className='syllabus-icon'>
                <Icon icon="mdi:file-document-outline" color="#1b1c1e" width="69" height="69" />
            </div>
            <div className='syllabus-date'>
                <p>{props.date}</p>
            </div>
        </div>
    );
};

export default Syllabus;
