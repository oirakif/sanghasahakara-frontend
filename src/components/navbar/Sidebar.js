import React, { useState } from 'react';
import {
    Drawer, List, ListItem, ListItemText, Collapse, ListItemIcon,
    Divider, Toolbar, Typography
} from '@mui/material';
import { ExpandLess, ExpandMore, Person, List as ListIcon, BarChart } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [openUsersDropdown, setOpenUsersDropdown] = useState(false);

    const handleUsersClick = () => {
        setOpenUsersDropdown(!openUsersDropdown);
    };

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{ width: 240, flexShrink: 1 }}
        >
            <Toolbar>
                <Typography variant="h6" noWrap>
                    Admin Panel
                </Typography>
            </Toolbar>
            <Divider />
            <List>
                {/* Users Dropdown */}
                <ListItem button onClick={handleUsersClick}>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                    {openUsersDropdown ? <ExpandLess /> : <ExpandMore />}
                </ListItem>

                <Collapse in={openUsersDropdown} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button component={Link} to="/users" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users List" />
                        </ListItem>
                        <ListItem button component={Link} to="/users/statistics" sx={{ pl: 4 }}>
                            <ListItemIcon>
                                <BarChart />
                            </ListItemIcon>
                            <ListItemText primary="User Statistics" />
                        </ListItem>
                    </List>
                </Collapse>

                {/* You can add more menu items here */}
            </List>
        </Drawer>
    );
};

export default Sidebar;
