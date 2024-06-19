import React from 'react'

import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Switch
} from '@mui/material'

import { Dashboard, Home, ModeNight, PermContactCalendar, Person, Settings } from '@mui/icons-material'

const Sidebar = ({mode, setMode}) => (
    <Box
        flex={1}
        p={2}
        sx={{ display: { xs: "none", sm: "block" }}}
    >
        <Box position='fixed'>
            <List>
                {/* Homepage */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><Home /></ListItemIcon>
                        <ListItemText  primary="Homepage" />
                    </ListItemButton>
                </ListItem>

                {/* Dashboard */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><Dashboard /></ListItemIcon>
                        <ListItemText  primary="Dashboard" />
                    </ListItemButton>
                </ListItem>

                 {/* Friends */}
                 <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><Person /></ListItemIcon>
                        <ListItemText  primary="Friends" />
                    </ListItemButton>
                </ListItem>

                 {/* Settings */}
                 <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon><Settings /></ListItemIcon>
                        <ListItemText  primary="Settings" />
                    </ListItemButton>
                </ListItem>

                {/* Profile */}
                <ListItem disablePadding>
                    <ListItemButton component="a" href="#">
                        <ListItemIcon><PermContactCalendar /></ListItemIcon>
                        <ListItemText  primary="Profile" />
                    </ListItemButton>
                </ListItem>

                {/* Switch the Mode */}
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><ModeNight /></ListItemIcon>
                        <Switch
                            onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')} />
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    </Box>
)

export default Sidebar