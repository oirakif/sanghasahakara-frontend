import React from 'react';
import { TableCell, TableRow } from '@mui/material';

const UsersTableRow = ({ user }) => {
  return (
    <TableRow>
      <TableCell>{user.id}</TableCell>
      <TableCell>{user.email}</TableCell>
      <TableCell>{user.display_name}</TableCell>
      <TableCell>{user.is_email_verified ? 'Yes' : 'No'}</TableCell>
      <TableCell>{user.account_type}</TableCell>
      <TableCell>{user.status}</TableCell>
      <TableCell>{user.login_count}</TableCell>
      <TableCell>{user.logout_count}</TableCell>
      <TableCell>{new Date(user.created_at).toLocaleString()}</TableCell>
      <TableCell>{new Date(user.updated_at).toLocaleString()}</TableCell>
    </TableRow>
  );
};

export default UsersTableRow;
