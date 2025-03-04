"use client";
import { Tabs, Tab, Typography, Box } from '@mui/material';
import { useState } from 'react';

export default function ServicesTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="Services tabs">
        <Tab label="Service 1" />
        <Tab label="Service 2" />
        <Tab label="Service 3" />
      </Tabs>
      {value === 0 && (
        <Box sx={{ p: 3 }}>
          <Typography>Details about Service 1</Typography>
        </Box>
      )}
      {value === 1 && (
        <Box sx={{ p: 3 }}>
          <Typography>Details about Service 2</Typography>
        </Box>
      )}
      {value === 2 && (
        <Box sx={{ p: 3 }}>
          <Typography>Details about Service 3</Typography>
        </Box>
      )}
    </Box>
  );
}
