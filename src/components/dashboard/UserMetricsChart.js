// UserMetricsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const UserMetricsChart = ({ chartData, totalUsersCount }) => {
  return (
    <div>
      <Line
        data={{
          labels: chartData.labels,
          datasets: [
            {
              label: 'Distinct Users',
              data: chartData.distinctUsersData,
              backgroundColor: 'rgba(75, 192, 192, 0.4)', // Blue color for distinct users
              borderColor: 'rgba(75, 192, 192, 1)', // Solid blue line
              borderWidth: 2,
              fill: false, // Do not fill under the line
            },
            {
              label: 'Avg Active Users',
              data: chartData.avgActiveUsersData,
              backgroundColor: 'rgba(255, 99, 132, 0.4)', // Red color for average active users
              borderColor: 'rgba(0, 255, 0, 1)', // Solid green line
              borderWidth: 2,
              fill: false, // Do not fill under the line
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: 'User Metrics over Time',
            },
            tooltip: {
              mode: 'index',
              intersect: false,
            },
          },
        }}
      />

      <div style={{ marginTop: '20px' }}>
        <h3>Total Users Count: {totalUsersCount}</h3>
      </div>
    </div>
  );
};

export default UserMetricsChart;
