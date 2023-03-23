import React, { useState } from 'react';
import './css/OverallDiagram.css';
import SyllabusComponent from './SyllabusComponent';
import ProgressBar from 'react-bootstrap/ProgressBar';


const OverallDiagram = () => {

  return (
    <div className="diagram-container">
      <SyllabusComponent
        course_name="CMPSC 465"
        pdfLink="https://www.cse.psu.edu/~kxm85/teaching/CMPSC465/syllabus.pdf"
        lastUpdate="2/22/2023"
      />
    </div>
  );
};

export default OverallDiagram;
