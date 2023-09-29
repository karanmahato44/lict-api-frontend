import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import useFetchData from '../hooks/UseFetchData';

ChartJS.register(ArcElement, Tooltip, Legend);


const PieChart = () => {

  const { data: faculties } = useFetchData('http://127.0.0.1:8000/lict/faculties');

  const labels = faculties.map(faculty => faculty.faculty_name);
  const data = faculties.map(faculty => faculty.total_students);

  const chartdata = {
    labels: labels,
    datasets: [
      {
        label: 'No. of Students',
        data: data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



  return (
    <Pie data={chartdata} />
  );
}

export default PieChart;  