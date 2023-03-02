import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './css/SummaryCard.css';


const SummaryCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/professor_courses/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className="course-summary">
        {/* Display course summary data */}
        <div className='course-summary-head'>
          <ul>
              <li><Icon icon="mingcute:book-4-line" color="#181818" /></li>
              <li>Course Summary</li>
          </ul>
          <br></br>
        </div>
        {data.map(item => (
          <div key={item.professor_course_id}>
            <p>{item.course_summary}</p>
          </div>
        ))}
      </div>
      <div className="professor-summary">
        {/* Display professor summary data */}
        <div className='professor-summary-head'>
          <ul>
              <li><Icon icon="pepicons-pop:person-filled" color="#181818" /></li>
              <li>Professor Review</li>
          </ul>
          <br></br>
        </div>
        {data.map(item => (
          <div key={item.professor_course_id}>
            <p>{item.professor_summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SummaryCard;
