import React from 'react';
import './css/Difficulty.css'
import { Icon } from '@iconify/react';
import Card from 'react-bootstrap/Card';

const cardStyle = {
    width: '280px', /* Set the width of the card */
    height: '210px', /* Set the height of the card */
    background: '#1B1C1E', /* Set the background color of the card */
    padding: "1rem",
  };

function Difficulty(props) {
    return (
      <div className='difficulty-wrapper'>
        <Card className='border-0' style={cardStyle}>
          <Card.Body>
            <Card.Text>
                <div className='difficulty-icon'>
                    <Icon className='icon' icon="iconoir:gym" />
                </div>
                <div className='difficulty-flex'>
                    <div className='difficulty-text'>
                        <p>{props.text}</p>
                    </div>
                    <div className='difficulty-rate'>
                        <p>{props.rate}</p>
                    </div>
                </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }

export default Difficulty;