
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import FaceIcon from "@mui/icons-material/Face";
import { Stack } from "@mui/system";
import "./Header.css";

export default function BasicTextFields() {
  return (
    <Stack>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px",
        }}>
        <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
          Dashboard
        </Typography>


        <Box>
          <TextField
            label="Search for transaction"
            sx={{ marginLeft: "8px", marginRight: "8px" }}
          />
        </Box>

        <Box sx={{ display: "flex", flexWrap: "nowrap", color: "#6D7D93" }}>
          <NotificationsNoneIcon />
          <FaceIcon />
        </Box>
      </Box>

    </Stack>
  );
}
