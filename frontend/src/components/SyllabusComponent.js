import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Icon } from '@iconify/react';
import "./css/SyllabusComponent.css";

const SyllabusComponent = ({ pdfLink, lastUpdate, course_name }) => {
  const [showModal, setShowModal] = useState(false);

  const handlePdfClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="syllabus">
      <div className="syllabus-container">
        <div className="syllabus-text">Syllabus</div>
        <div>
          <div className="pdf-container" onClick={handlePdfClick}>
          <Icon icon="ph:file-pdf" color="#c0b7b1" width="60px" height="60px" />
          </div>
        </div>
        <div className="update-text">Last update: </div>
        <div className="update-text">{lastUpdate}</div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} size='xl'>
        <Modal.Header>
          <Modal.Title>{course_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <iframe
            src={pdfLink}
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

export default SyllabusComponent;
