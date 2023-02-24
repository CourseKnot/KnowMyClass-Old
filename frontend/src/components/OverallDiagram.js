import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import './css/OverallDiagram.css';

const OverallDiagram = () => {
  const [showModal, setShowModal] = useState(false);

  const handlePdfClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="diagram-container">
      <ul className="syllabus-container">
        <li className="syllabus-text">Syllabus</li>
        <li>
          <div className="pdf-container" onClick={handlePdfClick}>
            <Icon icon="ph:file-pdf" color="#c0b7b1" width="60px" height="60px" />
          </div>
        </li>
        <li className="update-text">Last update: </li>
        <li className="update-text">2/22/2023</li>
      </ul>
      <Modal show={showModal} onHide={handleCloseModal} size='xl'>
        <Modal.Header>
          <Modal.Title>CMPSC 465</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <iframe
            src="https://www.cse.psu.edu/~kxm85/teaching/CMPSC465/syllabus.pdf"
            title="PDF Viewer"
            width="100%"
            height="550px"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OverallDiagram;
