// /src/pages/LoginPage.js
import React from 'react';
import { Container, Box } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const handleLogin = (data) => {
        // Call login API or authentication logic
        console.log('Login with:', data);
    };

    return (
        <Container maxWidth="sm">
            <Box textAlign="center" my={5}>
                <LoginForm onLogin={handleLogin} />
                <GoogleLoginButton />
                <p>
                    Don't have an account yet? <Link to="/register">Register</Link>
                </p>
            </Box>
        </Container>
    );
};

export default LoginPage;
