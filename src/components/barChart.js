import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from "chartjs-plugin-datalabels";
const BarChart = ({ bars }) => {
   const data = {
      labels: bars?.map((row) => row.labels),
      datasets: [
         {
            label: 'Corte 1',
            data: bars?.map((row) => row.level1),
            backgroundColor: 'rgba(255, 99, 132, 0.7)',
            stack: 'Stack 1',
            //barThickness: 27
         },
         {
            label: 'Corte 2',
            data: bars?.map((row) => row.level2),
            backgroundColor: 'rgba(54, 162, 235, 0.7)',
            stack: 'Stack 2',
            //barThickness: 27
         },
         {
            label: 'Corte 3',
            data: bars?.map((row) => row.level3),
            backgroundColor: 'rgba(75, 192, 192, 0.7)',
            stack: 'Stack 3',
            //barThickness: 27
         },
         {
            label: 'Corte 4',
            data: bars?.map((row) => row.level4),
            backgroundColor: 'rgba(255, 206, 86, 0.7)',
            stack: 'Stack 4',
            borderColor: [
               'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
            //barThickness: 27
         },
      ],
   };

   const options = {
      chart: {
         id: 'basic-bar',
      },
      plugins: {
         title: {
            display: true,
            text: 'Porcentaje de entrega'
         },
         legend: {
            display: true,
            position: 'top',   
         },
         datalabels: {
            anchor: 'end',
            align: 'start',
            formatter: (value) => value ? value + '%' : '',
            font: {
               weight: 'bold',
            },
            color:'#4B4B4B'
         },
         tooltip: {
            enabled: false, 
         },
      },
      scales: {
         x: {
            stacked: true
         },
         y: {
            beginAtZero: true,
            stacked: true
         },
      },
      responsive: true,
      maintainAspectRatio: true,
      aspectRatio: 4 / 3,
      
   };

   return (

      <div style={{ position: "relative", height: "auto", width: "500px" }} >
         <Bar data={data} options={options} plugins={[ChartDataLabels]} />{/* */}
      </div>
   );
};

export default BarChart;