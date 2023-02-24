import React from 'react';
import ReactDOM from 'react-dom/client';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import './index.css';
// import CourseList from './App';
import Mainpage from './pages/Mainpage';
import Navigationbar from './components/Navbar';
import Login from './pages/Login';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Signup from './pages/Signup';
import Browseclass from './components/Browseclass';
import ShowClass from './pages/ShowClass';


export default function App() {
  return (

    <BrowserRouter>
      <Navigationbar />
      <Routes>
  
        <Route path='/' element={<Mainpage />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="browse-classes" element={<Browseclass />} />
        <Route path="show-class" element={<ShowClass />} />
        


      </Routes>
    </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

