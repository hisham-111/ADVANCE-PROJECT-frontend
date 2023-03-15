import { Box, Typography, LinearProgress } from "@mui/material";
import { Stack } from "@mui/system";
import ArrowDropUpRoundedIcon from "@mui/icons-material/ArrowDropUpRounded";
import React from "react";

export default function profitBar({ goalProfit, realProfit }) {
  const progress = (realProfit / goalProfit) * 100;

  return (
    <Box
      sx={{
        width: "300px",
        padding: "24px",
        border: "1px solid rgba(109, 125, 147, 0.15)",
        boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        bgcolor: "beige",
      }}
    >
      <Typography variant="h6" style={{ fontWeight: "bold" }} marginBottom={2}>
        Profit Goal
      </Typography>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography
          variant="subtitle1"
          fontWeight={600}
          color="primary"
          style={{ fontSize: "20px" }}
        >
          ${realProfit}/${goalProfit}
        </Typography>
        <Stack direction="row" alignItems="center">
          <ArrowDropUpRoundedIcon color="primary" fontSize="large" />
          <Typography variant="subtitle1" fontWeight={600}>
            {progress}%
          </Typography>
        </Stack>
      </Stack>
      <LinearProgress
        variant="determinate"
        value={progress}
        style={{ width: "250px", height: "26px", borderRadius: "5px" }}
      />
    </Box>
  );
}
