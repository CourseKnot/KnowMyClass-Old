import React from 'react';
import './css/CourseNameTag.css'

const CourseNameTag = (props) => {
    return (
        <div className='course-name-tag'>
            <p>{props.text}</p>
        </div>
    );
};

export default CourseNameTag;
