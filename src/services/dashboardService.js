import apiClient from '../utils/apiClient';

export const fetchDashboardData = async (daysInterval) => {
  try {
    const token = localStorage.getItem('token');

    const response = await apiClient.get(`users/statistics?active_sessions_interval=${daysInterval}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.error('Error fetching dashboard data:', error);
    throw error;
  }
};
