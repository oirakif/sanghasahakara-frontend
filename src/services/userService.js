import apiClient from '../utils/apiClient';

export const fetchUsersList = async (page, perPage) => {
    try {
        const token = localStorage.getItem('token');

        const response = await apiClient.get(`users/list?page=${page}&per_page=${perPage}`, {
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

export const fetchUserProfile = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await apiClient.get(`users/profile/me`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }); return response.data.data;
    } catch (error) {
        throw error;
    }
};
