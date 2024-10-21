import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Snackbar, Alert } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { handleLogout } from '../../services/authService';

const TopNavbar = () => {
    const navigate = useNavigate();
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [error, setError] = useState(false);

    const onLogout = async () => {
        // Clear token or any other necessary cleanup
        try {
            await handleLogout();
            localStorage.removeItem('token');
            setSnackbarMessage('Logout successful!');
            setSnackbarOpen(true);
            setTimeout(() => {
                navigate('/login');
            }, 2000);
        } catch (error) {
            console.error('Logout error:', error);
            setSnackbarMessage('Logout failed! Please try again.');
            setError(true);
            setSnackbarOpen(true);
        }
    };

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSnackbarOpen(false);
    };
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Dashboard
                    </Typography>
                    <Box>
                        <Button color="inherit" component={Link} to="/users/me">
                            My Profile
                        </Button>
                        <Button color="inherit" onClick={onLogout}>
                            Logout
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert onClose={handleSnackbarClose} severity={error ? 'error' : 'success'} sx={{ width: '100%' }}>
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </>
    );
};

export default TopNavbar;
