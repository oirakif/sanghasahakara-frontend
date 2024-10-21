// /src/pages/RegisterPage.js
import React, { useState } from 'react';
import { Container, Box } from '@mui/material';
import RegisterForm from '../components/auth/RegisterForm';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../components/auth/GoogleLoginButton';
import { handleRegister } from '../services/authService';
import { Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const onRegister = async (data) => {
    try {
      await handleRegister(data);
      setOpenSnackbar(true);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={5}>
        <RegisterForm onRegister={onRegister} />
        <GoogleLoginButton />
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </Box>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000} // Duration before the Snackbar automatically closes
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position of Snackbar
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          User successfully registered!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RegisterPage;
