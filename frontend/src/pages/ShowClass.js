import React, { useState } from 'react';
import OverallDiagram from "../components/OverallDiagram";
import AddCommentForm from "../components/AddCommentForm";
import { Icon } from '@iconify/react';
import './css/ShowClass.css'
import { Button } from 'react-bootstrap';
import SummaryCard from "../components/SummaryCard";
import SlidingPanel from 'react-sliding-side-panel';


const ShowClass = () => {
    const [openPanel, setOpenPanel] = useState(false);
    return (
        <div className="show-class">
            <div className="course-instructor">
                <ul>
                    <li><Icon icon="mingcute:book-4-line" color="#808080" /></li>
                    <li>Course Name</li>
                </ul>
                <ul>
                    <li><Icon icon="pepicons-pop:person-filled" color="#808080" /></li>
                    <li>Instructor</li>
                </ul>

            </div>
            <div>
                <OverallDiagram />
            </div>
            <div>
                <SummaryCard />
            </div>
            <div>
                <AddCommentForm />
            </div>


        </div>
    );
};

export default ShowClass