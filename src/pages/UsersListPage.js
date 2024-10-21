import React, { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { fetchUsersList } from '../services/userService';
import UsersTable from '../components/users/UsersTable';
import LoadingIndicator from '../components/loading/LoadingIndicator';
import { useSearchParams, useNavigate } from "react-router-dom";
import DashboardLayout from '../components/layout/DashboardLayout';

const UsersListPage = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const accessToken = searchParams.get('access_token');
        if (accessToken) {
            localStorage.setItem('token', accessToken);
        }
        const getUsers = async () => {
            try {
                const usersData = await fetchUsersList(1, 25);
                setUsers(usersData);
            } catch (error) {
                setTimeout(() => {
                    navigate('/users/me');
                }, 2000);
                console.error('Failed to fetch users', error);
            } finally {
                setLoading(false);
            }
        };

        getUsers();
    }, [searchParams, navigate]);

    if (loading) {
        return <LoadingIndicator />;
    }

    return (
        <>
            <DashboardLayout />
            <Container maxWidth="md">
                <UsersTable users={users} />
            </Container>
        </>
    );
};

export default UsersListPage;
