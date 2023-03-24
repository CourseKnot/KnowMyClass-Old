import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import MainPage from './pages/MainPage';
import CourseDisplay from './pages/CourseDisplay';
import NavbarComponent from './components/NavbarComponent';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <div className='app'>
        <div className='pages'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/course-display' element={<CourseDisplay />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
