import React from 'react';
import { Box, Stack, TextField } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
function SearchBar() {
        return (
          <Box>
            <Stack className="Stack" direction="row" spacing={10}>
              {/* <div class="input-group rounded">
                <input
                  type="search"
                  class="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span class="input-group-text border-0" id="search-addon">
                  <i class="fas fa-search"></i>
                </span>
              </div> */}
              <TextField
                id="Search"
                label="Search"
                variant="outlined"
                sx={{
                  "& > :not(style)": {
                    m: -1,
                    width: "30ch",
                    
                  },bgcolor: "#6D7D93"
                }}
                
              />
              <NotificationsIcon fontSize="large" sx={{ color: "#6D7D93" }} />
            </Stack>
          </Box>
        );
    
}
 
export default SearchBar;

