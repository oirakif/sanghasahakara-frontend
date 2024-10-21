// /src/services/axiosInstance.js
import axios from 'axios';

// Create an axios instance
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_USER_STATISTICS_SERVICE_BACKEND_URL, // Adjust to your API base URL
});

// Add a request interceptor (optional) to include the token in each request
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {

    Promise.reject(error)
    window.location.href = '/login'
  }
);

// Add a response interceptor to handle expired or invalid tokens
apiClient.interceptors.response.use(
  (response) => response, // Pass successful responses
  (error) => {
    console.log(error)
    if (error.response && error.response.status === 401) {
      // Token is invalid or expired
      console.error('Token expired or invalid. Logging out...');

      // Optionally, clear the token and redirect to login
      localStorage.removeItem('token');
      window.location.href = '/login'; // Redirect to the login page

      return Promise.reject('Session expired. Please log in again.');
    }
    return Promise.reject(error);
  }
);

export default apiClient;
