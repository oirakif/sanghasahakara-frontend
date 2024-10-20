import apiClient from '../utils/apiClient';

export const handleLogin = async (data) => {
    try {
        const response = await apiClient.post('/auth/main/login', data, {
            headers: { 'Content-Type': 'application/json' },
        });

        // If login is successful, return the result
        return response.data;
    } catch (error) {
        // Handle login failure, either by throwing the error or returning a meaningful response
        console.error('Login failed:', error);
        throw error;
    }
};