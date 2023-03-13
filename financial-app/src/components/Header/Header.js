import React from 'react';
import { Box, Stack } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import './Header.css';
import SearchBar from '../searchBar/searchBar.js';
function Header()  {
     
        return (
          <Box className="Header_container">
            <Stack direction="row" justifyContent="space-between">
              <h1>DASHBOARD</h1>
              <SearchBar />
            </Stack>
          </Box>
        );
    
}

export default Header;