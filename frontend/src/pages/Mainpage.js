import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <Link to="/course-display">Go to Course Display</Link>
    </div>
  );
};

export default MainPage;
