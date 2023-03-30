import Dropdown from 'react-bootstrap/Dropdown';
import './css/DropDown.css';
import React from 'react';

function DropDown() {
  return (
    <Dropdown className='custom-dropdown'>
      <Dropdown.Toggle variant="warning" id="dropdown-basic">
        Newest
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Hottest</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Higest Rating</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Lowest Rating</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default DropDown;