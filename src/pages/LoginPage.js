// /src/pages/LoginPage.js
import React from 'react';
import { Container, Box } from '@mui/material';
import { handleLogin } from '../services/authService';
import LoginForm from '../components/auth/LoginForm';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const onLogin = async (data) => {
        try {
            const result = await handleLogin(data);

            // Store the token in localStorage (or sessionStorage if preferred)
            localStorage.setItem('token', result.token);

            navigate('/users');
        } catch (error) {
            console.error('Login error:', error);
            // Handle login error, e.g., show error message to user
        }
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
        </Container>
    );
};

export default LoginPage;
