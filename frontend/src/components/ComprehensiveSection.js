import React from 'react';
import Tag from '../components/Tag';
import CourseNameTag from '../components/CourseNameTag';
import RateCourseTag from '../components/RateCourseTag';
import Difficulty from '../components/Difficulty';
import Syllabus from '../components/Syllabus';
import AISummary from '../components/AISummary';
import OverallRating from '../components/OverallRating';
import WorkloadChart from '../components/WorkloadChart';
import './css/ComprehensiveSection.css'


const ComprehensiveSection = () => {
  return (
    <div className='comprehensive-section'>

        <div className='comprehensive-section-head'>
            <div className='comprehensive-section-head-row'>
                <div className='comprehensive-section-tags'>
                    <Tag text="exam-based" />
                    <Tag text="extra credit" />
                    <Tag text="mandatory attendence" />
                </div>
                <div className='comprehensive-section-rate-tag'>
                    <RateCourseTag text="Rate This Course" />
                </div>
            </div>
            <div className='comprehensive-section-course-name'>
                <CourseNameTag text="CMPSC 465    Data Structures and Algorithms" />
                <CourseNameTag text="Paul D." />
            </div>
        </div>
        
        <div className='comprehensive-section-body'>
            <OverallRating rate="4.2"/>
            <Difficulty text="Difficulty" rate="3.5"/>
            <WorkloadChart />
            <Syllabus text="Syllabus" date="Last update: 2/22/2023"/>
        </div>

        <br></br>
        <br></br>
        <br></br>


        <div className='comprehensive-section-footer'>
            <AISummary title="Students say the course..." text="This computer science course provided students with a comprehensive understanding of programming languages, algorithms, and data structures. The lectures were highly informative and the assignments, although challenging, were rewarding. The course offers a solid foundation for further studies in the field."/>
            <AISummary title="Students say the professor..." text="The professor's teaching style was engaging, interactive, and highly recommended. However, some explanations could have been clearer, leading to moments of uncertainty in completing assignments. Nonetheless, the professor was always available for questions and discussions."/>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>

    </div>
  );
};

export default ComprehensiveSection;
