import React from 'react';
import './css/ReviewCard.css'
import { Icon } from '@iconify/react';
import difficultyIcon from '../assets/Difficulty-icon.svg';

const ReviewCard = (props) => {
    return (
        <div className='review-card'>
            <div className='review-card-head'>
                <p className='review-card-head-semester'>Spring 2023</p>
                <div className='review-card-head-icon'>
                    <Icon icon="mingcute:book-4-line" />
                    <p>5</p>
                    <Icon icon="mdi:face-man" />
                    <p>5</p>
                    <Icon icon="ic:round-access-time-filled" />
                    <p>5</p>
                    <img src={difficultyIcon} alt="difficulty-icon" />
                    <p>5</p>
                </div>
            </div>
            <div className='review-card-course'>
                <div className='review-card-title'>
                    <p>Course Review</p>
                </div>
                <div className='review-card-paragraph'>
                    <p>This course was an eye-opener for me! I never realized how vast the field of computer science is until I took this course. The lectures were very informative, and the assignments were challenging, but rewarding. I learned so much about programming languages, algorithms, and data structures. I feel like I have a solid foundation now to pursue further studies in computer science.</p>
                </div>
            </div>
            <div className='review-card-professor'>
                <div className='review-card-title'>
                    <p>Professor Review</p>
                </div>
                <div className='review-card-paragraph'>
                    <p>I really enjoyed this professor's teaching style - they were engaging and interactive, and always made time for questions and discussion. However, I do think that some of the explanations could have been a bit clearer at times. There were a few moments where I wasn't quite sure what was expected of me in an assignment, for example. Overall, though, I would still highly recommend this professor.</p>
                </div>
            </div>
            <div className='review-card-tip'>
                <div className='review-card-title'>
                    <p>Tips/Suggestions</p>
                </div>
                <div className='review-card-paragraph'>
                    <p>If you're struggling, don't hesitate to reach out to the professor or your classmates for help. There are also lots of great online resources (like Codecademy or Khan Academy) that can help you brush up on concepts.</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
