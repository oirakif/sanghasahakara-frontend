// /src/components/Auth/LoginForm.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const LoginForm = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({ email, password });
    };

    return (
        <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h5" mb={2}>Log In</Typography>
            <TextField
                fullWidth
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                margin="normal"
                required
            />
            <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                required
            />
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }}>
                Log In
            </Button>
        </Box>
    );
};

export default LoginForm;
