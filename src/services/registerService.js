import apiClient from '../utils/apiClient';

export const handleRegister = async (data) => {
    try {
        const response = await apiClient.post('/auth/main/register', data, {
            headers: { 'Content-Type': 'application/json' },
        });

        return response.data;
    } catch (error) {
        console.error('register failed:', error);
        throw error;
    }
};