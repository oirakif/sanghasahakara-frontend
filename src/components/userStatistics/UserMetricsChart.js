// UserMetricsChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, LineElement, CategoryScale, LinearScale, PointElement, Title } from 'chart.js';

Chart.register(LineElement, CategoryScale, LinearScale, PointElement, Title);

const UserMetricsChart = ({ chartData, totalUsersCount, distinctUsersCount, avgActiveUsersCount }) => {
  return (
    <>
      <Line
        data={{
          labels: chartData.labels,
          datasets: [
            {
              label: 'Average Active Users',
              data: chartData.chartActiveUsersCount,
              backgroundColor: 'rgba(75, 192, 192, 0.4)',
              borderColor: 'rgba(75, 192, 192, 0.4)', // Solid blue line
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

      <div style={{ marginTop: '20px', textAlign: 'center' }}>
        <div>
          <span style={{ color: 'rgba(75, 192, 192, 0.4)', marginLeft: '15px' }}>
            <strong>●</strong> Avg Active Users by Date
          </span>
        </div>
        <h3>Total Users Count: {totalUsersCount}</h3>
        <h3>Active Users Count Today: {distinctUsersCount}</h3>
        <h3>Average Active Users: {avgActiveUsersCount}</h3>
      </div>
    </>
  );
};

export default UserMetricsChart;
