// /src/pages/LoginPage.js
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import { handleLogin } from '../services/authService';
import LoginForm from '../components/auth/LoginForm';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Snackbar, Alert } from '@mui/material';

const LoginPage = () => {
    const navigate = useNavigate();
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('');

    const onLogin = async (data) => {
        try {
            const result = await handleLogin(data);

            // Store the token in localStorage (or sessionStorage if preferred)
            localStorage.setItem('token', result.token);
            setSnackbarMessage('Login successful');
            setSnackbarSeverity('success')
            setOpenSnackbar(true);
            navigate('/users');
        } catch (error) {
            console.log(error)
            switch (error.status) {
                case 404: {
                    setSnackbarMessage('Invalid username or password');
                    setSnackbarSeverity('error')
                    break
                }
                case 400: {
                    setSnackbarSeverity('warning')
                    setSnackbarMessage(error.response.data.message);
                    break;
                } default: {
                    setSnackbarMessage('login error, please try again in a while')
                    setSnackbarSeverity('info')
                }
            }
            setOpenSnackbar(true);
            console.error('Login error:', error);
            // Handle login error, e.g., show error message to user
        }
    };
    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };
    return (
        <Container maxWidth="sm">
            <Box textAlign="center" my={5}>
                <LoginForm onLogin={onLogin} />
                <GoogleLoginButton />
                <p>
                    Don't have an account ? <Link to="/register">Register</Link>
                </p>
            </Box>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000} // Duration before the Snackbar automatically closes
                onClose={handleCloseSnackbar}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default LoginPage;
