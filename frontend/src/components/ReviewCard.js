import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './css/ReviewCard.css';


const ReviewCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/reviews/')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <div className="course-review">
        {/* Display course summary data */}
        <div className='course-review-head'>
          <ul>
              <li><Icon icon="mingcute:book-4-line" color="#808080" /></li>
              <li>Review</li>
          </ul>
          <br></br>
        </div>
        {data.map(item => (
          <div key={item.review_id}>
            <p>{item.review_id}</p>
            <p>{item.course_review}</p>
            <p>{item.professor_review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewCard;
