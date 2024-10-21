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

export const handleResetPassword = async (data) => {
    try {
        await apiClient.post('/auth/main/password/reset', data, {
            headers: { 'Content-Type': 'application/json' },
        });

        return;
    } catch (error) {
        console.error('register failed:', error);
        throw error;
    }
};

export const handleLogout = async () => {
    try {
        await apiClient.post('/auth/main/logout');

        return;
    } catch (error) {
        console.error('logout failed:', error);
        throw error;
    }
};
