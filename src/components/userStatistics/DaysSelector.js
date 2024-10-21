// DaysSelector.js
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const DaysSelector = ({ days, onDaysChange }) => {
  return (
    <FormControl variant="outlined" sx={{ minWidth: 120, marginTop: 3 }}>
      <InputLabel id="days-select-label">Days</InputLabel>
      <Select
        labelId="days-select-label"
        id="days-select"
        value={days}
        onChange={onDaysChange}
        label="Days"
      >
        <MenuItem value={7}>Last 7 Days</MenuItem>
        <MenuItem value={14}>Last 14 Days</MenuItem>
        <MenuItem value={30}>Last 30 Days</MenuItem>
      </Select>
    </FormControl>
  );
};

export default DaysSelector;
