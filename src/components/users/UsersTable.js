import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import UsersTableRow from './UsersTableRow';

const UsersTable = ({ users }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Display Name</TableCell>
                        <TableCell>Email Verified</TableCell>
                        <TableCell>Account Type</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Login Count</TableCell>
                        <TableCell>Logout Count</TableCell>
                        <TableCell>Created At</TableCell>
                        <TableCell>Updated At</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {users.map((user) => (
                        <UsersTableRow key={user.id} user={user} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default UsersTable;
