import React, { useState } from 'react';
import './css/Syllabus.css';
import { Icon } from '@iconify/react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const cardStyle = {
    width: '210px',
    height: '210px',
    background: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    padding: "1rem",
};

function Syllabus(props) {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div className='syllabus-wrapper'>
            <Card className='border-0 card-clickable' style={cardStyle} onClick={handleClick}>
                <Card.Body>
                    <Card.Text>
                        <div className='syllabus'>
                            <div className='syllabus-text'>
                                <p>{props.text}</p>
                            </div>
                            <div className='syllabus-icon'>
                                <Icon icon="mdi:file-document-outline" color="#1b1c1e" width="69" height="69" />
                            </div>
                            <div className='syllabus-date'>
                                <p>{props.date}</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleClose}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered>
                <Modal.Header closeButton>
                    <Modal.Title>CMPSC 465 Data Structures and Algorithms Syllabus</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Syllabus;
