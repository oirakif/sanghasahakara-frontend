// UserStatisticsPage.js
import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { fetchUserStatisticsData } from '../services/userStatisticsService';
import DaysSelector from '../components/userStatistics/DaysSelector';
import UserMetricsChart from '../components/userStatistics/UserMetricsChart';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const UserStatisticsPage = () => {
    const navigate = useNavigate();
    const [days, setDays] = useState(7); // Default to 7 days
    const [chartData, setChartData] = useState({
        labels: [],
        avgActiveUsersData: [],
    });
    const [totalUsersCount, setTotalUsersCount] = useState(0);
    const [distinctUsersCount, setDistinctUsersCount] = useState(0);
    const [avgActiveUsersCount, setAvgActiveUsersCount] = useState(0);

    const handleDaysChange = (event) => {
        setDays(event.target.value);
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchUserStatisticsData(days);

                // Assuming the response contains daily data for users over the selected days
                setChartData({
                    labels: data.activeUsersMetrics.map((metric) => metric.day),
                    chartActiveUsersCount: data.activeUsersMetrics.map((metric) => metric.active_users_count)
                });
                setTotalUsersCount(data.totalUsersCount);
                setDistinctUsersCount(data.distinctUsersCount);
                setAvgActiveUsersCount(data.avgActiveUsersCount);
            } catch (error) {
                console.error('Error loading dashboard data:', error);
                navigate('/users/me');
            }
        };

        loadData();
    }, [days, navigate]); // Re-fetch data when `days` changes

    return (
        <>
            <DashboardLayout />
            <Container maxWidth="md">
                <Box textAlign="center" my={5}>
                    <Typography variant="h4">User Statistics</Typography>

                    <DaysSelector days={days} onDaysChange={handleDaysChange} />

                    <Box mt={5}>
                        <UserMetricsChart chartData={chartData} totalUsersCount={totalUsersCount} distinctUsersCount={distinctUsersCount} avgActiveUsersCount={avgActiveUsersCount} />
                    </Box>
                </Box>
            </Container>
        </>
    );
};

export default UserStatisticsPage;
