import React from 'react';
import { Box, Typography, Grid, TextField, Button, Container, InputAdornment } from '@mui/material';

const SectionSixth = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle subscription logic here
    console.log('Subscribe button clicked!');
  };

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Stay Up to Date
        </Typography>
        <Typography variant="body2" align="center" color="textSecondary" sx={{ mb: 4 }}>
          Subscribe to our newsletter to receive our weekly feed
        </Typography>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <img
              src="https://www.shutterstock.com/image-vector/young-good-looking-man-using-600nw-1959667441.jpg"
              alt="Newsletter"
              style={{ maxWidth: '100%', borderRadius: 10 }}
            />
          </Grid>
          <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                fullWidth
                sx={{ mb: 2, borderRadius: 20 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSubmit}
                        sx={{ borderRadius: 10, textTransform: 'none', color: 'white' }}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SectionSixth;
