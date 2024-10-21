import React, { useEffect, useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { ResetPasswordForm } from '../components/auth/ResetPasswordForm';
import { handleResetPassword } from '../services/authService';
import { fetchUserProfile } from '../services/userService';
import { Snackbar, Alert } from '@mui/material';
import LoadingIndicator from '../components/loading/LoadingIndicator';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const ResetPasswordPage = () => {
    const navigate = useNavigate();
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('')
    const [loading, setLoading] = useState(true);
    const [isDisabledPage, setIsDisabledPage] = useState(false);
    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const profileData = await fetchUserProfile();
                if (profileData.account_type !== 'MAIN') {
                    setIsDisabledPage(true);
                    setTimeout(() => {
                        navigate('/users/me');
                    }, 2000);
                }
            } catch (error) {
                console.error('Failed to fetch user profile', error);
                setSnackbarMessage('Failed to fetch user profile');
                setSnackbarSeverity('error')
                setOpenSnackbar(true)
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
            } finally {
                setLoading(false);
            }
        };

        getUserProfile();
    }, [navigate]);

    const handleSubmit = async (data) => {
        if (data.oldPassword !== data.confirmOldPassword) {
            setSnackbarMessage('Old password and confirm old password must match.');
            return;
        }

        try {
            await handleResetPassword(data);
            setSnackbarMessage('Reset password success');
            setSnackbarSeverity('success')
            setOpenSnackbar(true);
        } catch (error) {
            switch (error.status) {
                case 409: {
                    setSnackbarMessage('New password cannot be identical as the old one');
                    setOpenSnackbar(true);
                    break;
                }
                case 404: {
                    setSnackbarMessage('Incorrect password');
                    setOpenSnackbar(true);
                    break;
                }
                default: {
                    setSnackbarMessage('Error resetting password. Please try again.');
                    setOpenSnackbar(true);
                }
            }


        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    if (loading) {
        return <LoadingIndicator />;
    }

    if(isDisabledPage){
        return <Alert severity='info'>Reset password is disabled for this account. Redirecting ..</Alert>
    }
    return (
        <>
            <DashboardLayout />
            <Container maxWidth="sm">
                <Box my={5} textAlign="center">
                    <Typography variant="h4" mb={3}>
                        Reset Password
                    </Typography>
                    <ResetPasswordForm onSubmit={handleSubmit} />
                </Box>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000} // Duration before the Snackbar automatically closes
                    onClose={handleCloseSnackbar}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} // Position of Snackbar
                >
                    <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
                        {snackbarMessage}

                    </Alert>
                </Snackbar>
            </Container>
        </>

    );
};

export default ResetPasswordPage;
