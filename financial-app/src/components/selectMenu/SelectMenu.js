import React, { useState } from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

function SelectMenu() {
  const [timeframe, setTimeframe] = useState('Current');

  const handleChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 10 , bgcolor:"white"}}>
      <InputLabel id="timeframe-select-label">Timeframe</InputLabel>
      <Select
        labelId="timeframe-select-label"
        id="timeframe-select"
        value={timeframe}
        label="Timeframe"
        onChange={handleChange} >
            
        <MenuItem value="Current">Current</MenuItem>
        <MenuItem value="Weekly">Weekly</MenuItem>
        <MenuItem value="Monthly">Monthly</MenuItem>
        <MenuItem value="Yearly">Yearly</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectMenu;
