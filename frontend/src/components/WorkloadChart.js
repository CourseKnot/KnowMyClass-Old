import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Icon } from '@iconify/react';
import './css/WorkloadChart.css'

ChartJS.register(ArcElement, Tooltip, Legend);

const WorkloadChart = ({ workloads }) => {
  const workloadRanges = [
    { label: '1-5 hours', min: 1, max: 5 },
    { label: '5-10 hours', min: 5, max: 10 },
    { label: '10-15 hours', min: 10, max: 15 },
    { label: '15-20 hours', min: 15, max: 20 },
  ];

  const countStudentsInRange = (min, max) =>
    workloads.filter(workload => workload >= min && workload <= max).length;

  const studentsCountByRange = workloadRanges.map(range =>
    countStudentsInRange(range.min, range.max)
  );

  const backgroundColors = [
    'rgba(176, 186, 248, 1)',
    'rgba(124, 143, 255, 1)',
    'rgba(115, 103, 255, 1)',
    'rgba(60, 25, 156, 1)',
  ];

  const borderColors = [
    'rgba(176, 186, 248, 1)',
    'rgba(124, 143, 255, 1)',
    'rgba(115, 103, 255, 1)',
    'rgba(60, 25, 156, 1)',
  ];
  const totalStudents = workloads.length;

  const percentageByRange = studentsCountByRange.map(
    (count) => (count / totalStudents) * 100
  );
  
  const data = {
    labels: workloadRanges.map(
      (range, index) => `${range.label} (${percentageByRange[index].toFixed(1)}%)`
    ),
    datasets: [
      {
        data: studentsCountByRange,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  const segmentTextPlugin = {
    id: 'segmentTextPlugin',
    afterDraw: function (chart) {
      const ctx = chart.ctx;
      ctx.save();
      ctx.font = 'bold 12px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = '#FFF';
  
      chart.data.labels.forEach((label, index) => {
        const metaData = chart.getDatasetMeta(0);
        const arc = metaData.data[index];
  
        const startAngle = arc.startAngle;
        const endAngle = arc.endAngle;
        const midAngle = (startAngle + endAngle) / 2;
        const radius = (arc.outerRadius + arc.innerRadius) / 2;
  
        const x = arc.x + Math.cos(midAngle) * radius;
        const y = arc.y + Math.sin(midAngle) * radius;
  
        const text = label.split(' ')[0] + ' hrs'; // Extracts the range and adds "hrs", e.g., "1-5 hrs"
  
        ctx.fillText(text, x, y);
      });
  
      ctx.restore();
    },
  };
  
  ChartJS.register(segmentTextPlugin);
  
  return (
    <div className="workload-chart">
      <div className="icon-wrapper">
        <Icon
          icon="ic:round-access-time-filled"
          color="#d9d9d9"
          className="middle-icon"
        />
        <Doughnut
          data={data}
          plugins={[segmentTextPlugin]}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );  
};

export default WorkloadChart;
