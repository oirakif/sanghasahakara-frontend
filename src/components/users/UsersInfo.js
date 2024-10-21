import React from 'react';
import { Box, Typography } from '@mui/material';

const UsersInfo = ({ user }) => {
  return (
    <Box>
      <Typography variant="body1">ID: {user.id}</Typography>
      <Typography variant="body1">Email: {user.email}</Typography>
      <Typography variant="body1">Display Name: {user.display_name}</Typography>
      <Typography variant="body1">Email Verified: {user.is_email_verified ? 'Yes' : 'No'}</Typography>
      <Typography variant="body1">Account Type: {user.account_type}</Typography>
      <Typography variant="body1">Status: {user.status}</Typography>
      <Typography variant="body1">Login Count: {user.login_count}</Typography>
      <Typography variant="body1">Logout Count: {user.logout_count}</Typography>
      <Typography variant="body1">Created At: {new Date(user.created_at).toLocaleString()}</Typography>
      <Typography variant="body1">Updated At: {new Date(user.updated_at).toLocaleString()}</Typography>
    </Box>
  );
};

export default UsersInfo;
