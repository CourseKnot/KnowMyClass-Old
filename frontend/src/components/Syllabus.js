import React from 'react';
import './css/Syllabus.css'
import { Icon } from '@iconify/react';
import Card from 'react-bootstrap/Card';

// const Syllabus = (props) => {
//     return (
//         <div className='syllabus'>
//             <div className='syllabus-text'>
//                 <p>{props.text}</p>
//             </div>
            // <div className='syllabus-icon'>
            //     <Icon icon="mdi:file-document-outline" color="#1b1c1e" width="69" height="69" />
            // </div>
            // <div className='syllabus-date'>
            //     <p>{props.date}</p>
            // </div>
//         </div>
//     );
// };

// export default Syllabus;


const cardStyle = {
    width: '210px', /* Set the width of the card */
    height: '210px', /* Set the height of the card */
    background: "#FFFFFF",
    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
    padding: "1rem",
  };

function Syllabus(props) {
    return (
      <div className='syllabus-wrapper'>
        <Card className='border-0' style={cardStyle}>
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
      </div>
    );
  }

export default Syllabus;