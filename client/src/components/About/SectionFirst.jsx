import React from 'react';
import { Box, Typography } from '@mui/material';

const SectionFirst = () => {
  return (
    <Box sx={{ backgroundColor: '#FFD8B6', py: 8, textAlign: 'center' }}>
      {/* First Section */}
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="body1" paragraph>
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
};

export default SectionFirst;
