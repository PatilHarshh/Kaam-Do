import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import clsx from 'clsx';

const SectionFifth = () => {

  // Example data for four featured cities
  const cities = [
    {
      id: '1',
      name: 'New York',
      imageUrl: 'https://cdn.britannica.com/61/93061-050-99147DCE/Statue-of-Liberty-Island-New-York-Bay.jpg', // Example image URL
      openPositions: 500, // Example number of open positions
    },
    {
      id: '2',
      name: 'San Francisco',
      imageUrl: 'https://media.istockphoto.com/id/1342281568/photo/golden-gate-bridge-with-clouds-over-san-francisco-california-usa.webp?b=1&s=170667a&w=0&k=20&c=_aCUoulYM84W-Sqh0hv17S8rVDx_Nd-Od6lTQFZJ11s=', // Example image URL
      openPositions: 300,
    },
    {
      id: '3',
      name: 'London',
      imageUrl: 'https://burst.shopifycdn.com/photos/big-ben-clock.jpg?width=1000&format=pjpg&exif=0&iptc=0', // Example image URL
      openPositions: 700,
    },
    {
      id: '4',
      name: 'Tokyo',
      imageUrl: 'https://a1.cdn.japantravel.com/photo/12865-215185/1440x960!/tokyo-tokyo-prefecture-215185.jpg', // Example image URL
      openPositions: 400,
    },
  ];

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <style>
          {`
            .card-hover {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            .card-hover:hover {
              transform: translateY(-10px);
              box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
            }
          `}
        </style>
        <Typography variant="h4" align="left" gutterBottom className='dark:text-white'>
          Featured Cities
        </Typography>
        <Typography variant="body2" align="left" className={clsx('text-gray-400', 'dark:text-gray-300')} sx={{ mb: 4 }}>
          Start your next career in a beautiful city
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {cities.map(city => (
            <Grid item key={city.id} xs={12} sm={6} md={3}>
              <Card className="card-hover dark:bg-blue-950" sx={{ backgroundColor: '#e3f2fd', borderRadius: 10, height: '100%' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={city.imageUrl}
                  alt={city.name}
                  sx={{ borderTopLeftRadius: 10, borderTopRightRadius: 10, objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" gutterBottom
                  className={clsx('text-blue-700', 'dark:text-blue-200')}
                  >
                    {city.name}
                  </Typography>
                  <Typography variant="body2" className={clsx('text-gray-400', 'dark:text-gray-300')}>
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
