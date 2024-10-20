// DashboardPage.js
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { fetchDashboardData } from '../services/dashboardService';
import DaysSelector from '../components/dashboard/DaysSelector';
import UserMetricsChart from '../components/dashboard/UserMetricsChart';

const DashboardPage = () => {
    const [days, setDays] = useState(7); // Default to 7 days
    const [chartData, setChartData] = useState({
        labels: [],
        distinctUsersData: [],
        avgActiveUsersData: [],
    });
    const [totalUsersCount, setTotalUsersCount] = useState(0);

    const handleDaysChange = (event) => {
        setDays(event.target.value);
    };

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const accessToken = queryParams.get('access_token');

        if (accessToken) {
            localStorage.setItem('access_token', accessToken);
        }
        const loadData = async () => {
            try {
                const data = await fetchDashboardData(days);

                // Assuming the response contains daily data for users over the selected days
                setChartData({
                    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'], // Update with actual labels if needed
                    distinctUsersData: Array(days).fill(data.distinctUsersCount), // Mock data for distinct users
                    avgActiveUsersData: Array(days).fill(data.avgActiveUsersCount), // Mock data for average active users
                });
                setTotalUsersCount(data.totalUsersCount); // Set total users count
            } catch (error) {
                console.error('Error loading dashboard data:', error);
            }
        };

        loadData();
    }, [days]); // Re-fetch data when `days` changes

    return (
        <Container maxWidth="md">
            <Box textAlign="center" my={5}>
                <Typography variant="h4">Dashboard</Typography>

                <DaysSelector days={days} onDaysChange={handleDaysChange} />

                <Box mt={5}>
                    <UserMetricsChart chartData={chartData} totalUsersCount={totalUsersCount} />
                </Box>
            </Box>
        </Container>
    );
};

export default DashboardPage;
