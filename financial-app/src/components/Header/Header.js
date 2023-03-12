import React from 'react';
import { Box, Stack } from "@mui/material";
// import NotificationsIcon from "@mui/icons-material/Notifications";
import './Header.css';
import SearchBar from '../searchBar/searchBar.js';
function Header()  {
     
        return (
          <Box className="Header_container">
            <Stack className="Stack" direction="row" spacing={50}>
              <h1 className="title">DASHBOARD</h1>
              <SearchBar />
            </Stack>
          </Box>
        );
    
}

export default Header;