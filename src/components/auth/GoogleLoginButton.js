// /src/components/Auth/GoogleLoginButton.js
import React from 'react';
import { Button } from '@mui/material';


const GoogleLoginButton = () => {
    const handleGoogleLogin = () => {
        
        // Redirect to your backend's Google OAuth endpoint
        window.location.href = `${process.env.REACT_APP_GOOGLE_OAUTH_URL}?redirect_uri=${process.env.REACT_APP_FRONTEND_URL}/users`;
    };

    return (
        <Button
            fullWidth
            onClick={handleGoogleLogin}
            variant="outlined"
            color="secondary"
            sx={{ mt: 2 }}
        >
            Log In with Google
        </Button>
    );
};

export default GoogleLoginButton;
