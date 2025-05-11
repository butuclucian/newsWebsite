import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Etichete pentru grafice
    datasets: [
      {
        label: 'Visitors',
        data: [30, 70, 90, 60, 85, 95, 120], // Datele vizitatorilor
        borderColor: 'rgba(75,192,192,1)', // Culoare liniei
        backgroundColor: 'rgba(75,192,192,0.2)', // Culoare de fundal pentru linie
        fill: true,
      },
      {
        label: 'Bounce Rate',
        data: [50, 55, 60, 50, 45, 50, 48], // Datele pentru bounce rate
        borderColor: 'rgba(255,99,132,1)', // Culoare linie pentru bounce rate
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Months',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Users',
        },
      },
    },
  };

  return (
    <div className='text-center mt-10 text-black'>
      <h2 className='text-2xl font-bold mb-8'>Google Analytics Simulation</h2>
      <div className='flex justify-center'>
        <div className='w-full md:w-3/4'>
          <h3 className='font-semibold text-xl mb-4'>Visitors & Bounce Rate Over Time</h3>
          <Line data={data} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
