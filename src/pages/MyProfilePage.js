import React, { useState, useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import { fetchUserProfile } from '../services/userService';
import LoadingIndicator from '../components/loading/LoadingIndicator';
import UsersInfo from '../components/users/UsersInfo';
import ResetPasswordButton from '../components/auth/ResetPasswordButton';
import DashboardLayout from '../components/layout/DashboardLayout';
import { useNavigate } from 'react-router-dom';

const MyProfilePage = () => {
    const navigate = useNavigate()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const profileData = await fetchUserProfile();
                setUser(profileData);
            } catch (error) {
                console.error('Failed to fetch user profile', error);
                navigate('/login')
            } finally {
                setLoading(false);
            }
        };

        getUserProfile();
    }, [navigate]);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <>
            <DashboardLayout />
            <Container maxWidth="sm">
                <Box textAlign="center" my={5}>
                    <Typography variant="h4">My Profile</Typography>
                    {user && (
                        <>
                            <UsersInfo user={user} />
                            {user.account_type === 'MAIN' && <ResetPasswordButton />}
                        </>
                    )}
                </Box>
            </Container>
        </>
    );
};

export default MyProfilePage;
