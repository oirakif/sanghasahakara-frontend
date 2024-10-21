import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import Sidebar from '../navbar/Sidebar'; // Import the Sidebar component
import TopNavbar from '../navbar/TopNavbar'; // Import the Top Navbar component

const DashboardLayout = ({ children }) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Sidebar />
            <TopNavbar /> {/* Include Top Navbar here */}
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
               
                {children}
            </Box>
        </Box>
    );
};

export default DashboardLayout;
