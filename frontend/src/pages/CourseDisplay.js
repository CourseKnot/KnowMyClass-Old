import React from 'react';
import Tag from '../components/Tag';
import CourseNameTag from '../components/CourseNameTag';
import RateCourseTag from '../components/RateCourseTag';
import Difficulty from '../components/Difficulty';
import Syllabus from '../components/Syllabus';
import AISummary from '../components/AISummary';

const CourseDisplay = () => {
  return (
    <div>
      <h1>Course Display Page</h1>
        <Tag text="exam-based" />
        <Tag text="extra credit" />
        <Tag text="mandatory attendence" />
        
        <br></br>
        <CourseNameTag text="CMPSC 465    Data Structures and Algorithms" />
        <CourseNameTag text="Paul D." />

        <br></br>
        <RateCourseTag text="Rate This Course" />
        
        <br></br>
        <Difficulty text="Difficulty" rate="3.5"/>

        <Syllabus text="Syllabus" date="Last update: 2/22/2023"/>
        <AISummary text="This computer science course provided students with a comprehensive understanding of programming languages, algorithms, and data structures. The lectures were highly informative and the assignments, although challenging, were rewarding. The course offers a solid foundation for further studies in the field."/>
    </div>
  );
};

export default CourseDisplay;
