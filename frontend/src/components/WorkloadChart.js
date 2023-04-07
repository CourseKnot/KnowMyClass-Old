import React, { Component } from 'react';
import { CanvasJSChart } from 'canvasjs-react-charts';
import "./css/WorkloadChart.css";

class WorkloadChart extends Component {
	render() {
		const options = {
      backgroundColor: 'transparent',
			animationEnabled: true,
			// title: {
			// 	text: "Customer Satisfaction"
			// },
			subtitles: [{
				text: "Workloads",
				verticalAlign: "center",
				fontSize: 24,
				dockInsidePlotArea: true
			}],
			data: [{
				type: "doughnut",
        startAngle: -90,
				// showInLegend: true,
				indexLabel: "{name}: {y}",
        indexLabelFontSize: 12, // Adjust the font size of the labels
        // indexLabelPlacement: "inside", 
				yValueFormatString: "#,###'%'",
				dataPoints: [
					{ name: "0-5 H", y: 20 },
					{ name: "6-10 H", y: 30 },
					{ name: "11-15 H", y: 40 },
					{ name: "16-20 H", y: 10 }
				]
			}]
		}
		return (
		<div className='workload-chart'>
			<CanvasJSChart options = {options}/>
		</div>
		);
	}
}

export default WorkloadChart;
