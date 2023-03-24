import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from './pages/MainPage';
import CourseDisplay from './pages/CourseDisplay';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/course-display' element={<CourseDisplay />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

