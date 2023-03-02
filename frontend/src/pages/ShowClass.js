import React, { useState } from 'react';
import OverallDiagram from "../components/OverallDiagram";
import AddCommentForm from "../components/AddCommentForm";
import { Icon } from '@iconify/react';
import './css/ShowClass.css'
import { Button } from 'react-bootstrap';
import SummaryCard from "../components/SummaryCard";
import SlidingPanel from 'react-sliding-side-panel';
import Tag from '../components/Tag';
import ReviewCard from '../components/ReviewCard';



const ShowClass = () => {
    const [openPanel, setOpenPanel] = useState(false);
    return (
        <div className="show-class">
            <div className="course-instructor">
                <ul className='course-name' >
                    <li><Icon icon="mingcute:book-4-line" color="#181818" /></li>
                    <li>Course Name</li>
                </ul>
                <ul className='instructor-name'>
                    <li><Icon icon="pepicons-pop:person-filled" color="#181818" /></li>
                    <li>Instructor</li>
                </ul>
            </div>

            <div className='tag-div'>
                <Tag text="exam-based"/>
                <Tag text="extra credit"/>
                <Tag text="mandatory attendance"/>
            </div>
            <div>
                <OverallDiagram />
            </div>
            <div>
                <SummaryCard />
                <ReviewCard />
            </div>
            <div>
            </div>
            <div>
                <AddCommentForm />
            </div>


        </div>
    );
};

export default ShowClass