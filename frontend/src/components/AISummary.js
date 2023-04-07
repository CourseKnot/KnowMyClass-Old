// import React from 'react';
// import './css/AISummary.css'

// const AISummary = (props) => {
//     return (
//         <div className='ai-summary'>
            // <div className='ai-summary-text1'>
            //     <p>Ai generated summary -</p>
            // </div>
            // <div className='ai-summary-text2'>
            //     <p>{props.title}</p>
            // </div>
            // <div className='ai-summary-text3'>
            //     <p>{props.text}</p>
            // </div>
//         </div>
//     );
// };

// export default AISummary;


import React from 'react';
import { Card } from 'react-bootstrap';
import './css/AISummary.css';

const cardStyle = {
    width: '550px', /* Set the width of the card */
    maxWidth: '600px',
    height: '350px', /* Set the height of the card */
    background: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    padding: "1rem",
};

const AISummary = (props) => {
    return (
        <div className='ai-summary-wrapper'>
            <Card className="border-0" style={cardStyle}>
                <Card.Body>
                    <Card.Text>
                        <div className='ai-summary-text'>
                            <div className='ai-summary-text1'>
                                <p>Ai generated summary -</p>
                            </div>
                            <div className='ai-summary-text2'>
                                <p>{props.title}</p>
                            </div>
                            <div className='ai-summary-text3'>
                                <p>{props.text}</p>
                            </div>
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default AISummary;
