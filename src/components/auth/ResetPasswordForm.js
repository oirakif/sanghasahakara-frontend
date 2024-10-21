import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

export const ResetPasswordForm = ({ onSubmit }) => {
    const [oldPassword, setOldPassword] = useState('');
    const [confirmOldPassword, setConfirmOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({ oldPassword, confirmOldPassword, newPassword });
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Old Password"
                type="password"
                fullWidth
                margin="normal"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                required
            />
            <TextField
                label="Confirm Old Password"
                type="password"
                fullWidth
                margin="normal"
                value={confirmOldPassword}
                onChange={(e) => setConfirmOldPassword(e.target.value)}
                required
                error={oldPassword !== confirmOldPassword && confirmOldPassword !== ''}
                helperText={
                    oldPassword !== confirmOldPassword && confirmOldPassword !== ''
                        ? "Passwords don't match"
                        : ''
                }
            />
            <TextField
                label="New Password"
                type="password"
                fullWidth
                margin="normal"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                error={newPassword === oldPassword && newPassword !== ''}
                helperText={
                    newPassword === oldPassword && newPassword !== ''
                        ? "New password cannot be identical as the old one"
                        : ''
                }
            />
            <Button variant="contained" color="primary" type="submit" fullWidth>
                Reset Password
            </Button>
        </form>
    );
};
