import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';

const SectionFifth = () => {
  // Example data for four featured cities
  const cities = [
    {
      id: '1',
      name: 'New York',
      imageUrl: 'https://via.placeholder.com/300', // Example image URL
      openPositions: 500, // Example number of open positions
    },
    {
      id: '2',
      name: 'San Francisco',
      imageUrl: 'https://via.placeholder.com/300', // Example image URL
      openPositions: 300,
    },
    {
      id: '3',
      name: 'London',
      imageUrl: 'https://via.placeholder.com/300', // Example image URL
      openPositions: 700,
    },
    {
      id: '4',
      name: 'Tokyo',
      imageUrl: 'https://via.placeholder.com/300', // Example image URL
      openPositions: 400,
    },
  ];

  return (
    <Container>
    <Box sx={{ py: 8 }}>
      <Typography variant="h4" align="left" gutterBottom>
        Featured Cities
      </Typography>
      <Typography variant="body2" align="left" color="textSecondary" sx={{ mb: 4 }}>
        Start your next career in a beautiful city
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {cities.map(city => (
          <Grid item key={city.id} xs={12} sm={6} md={3}>
            <Card sx={{ backgroundColor: '#e3f2fd', borderRadius: 10, height: '100%' }}>
              <CardMedia
                component="img"
                height="200"
                image={city.imageUrl}
                alt={city.name}
                sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" color="primary" gutterBottom>
                  {city.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {city.openPositions} open positions
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </Container>
  );
};

export default SectionFifth;
