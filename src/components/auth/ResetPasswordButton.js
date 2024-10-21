import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ResetPasswordButton = () => {
    const navigate = useNavigate();

    const handleResetPassword = () => {
        navigate('/reset-password');
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={handleResetPassword}
            sx={{ mt: 2 }}
        >
            Reset Password
        </Button>
    );
};

export default ResetPasswordButton;
