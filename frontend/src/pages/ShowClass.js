import React from "react";
import OverallDiagram from "../components/OverallDiagram";
import { Icon } from '@iconify/react';
import './css/ShowClass.css'
import SummaryCard from "../components/SummaryCard";

const ShowClass = () => {
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
        
        </div>
    );
};

export default ShowClass