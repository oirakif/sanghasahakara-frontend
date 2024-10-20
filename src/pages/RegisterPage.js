// /src/pages/RegisterPage.js
import React from 'react';
import { Container, Box } from '@mui/material';
import RegisterForm from '../components/auth/RegisterForm';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';


const RegisterPage = () => {
  const handleRegister = (data) => {
    // Call registration API or authentication logic
    console.log('Register with:', data);
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={5}>
        <RegisterForm onRegister={handleRegister} />
        <GoogleLoginButton />
        <p>
        Already have an account? <Link to="/login">Log in</Link>
      </p>
      </Box>
    </Container>
  );
};

export default RegisterPage;
