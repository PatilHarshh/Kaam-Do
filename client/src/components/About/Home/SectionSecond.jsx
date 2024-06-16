import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import clsx from 'clsx';

const SectionSecond = () => {
  // Sample data for categories
  const categories = [
    { id: 1, title: 'Marketing', positions: '2 open positions', imageUrl: 'https://www.pngplay.com/wp-content/uploads/7/Digital-Marketing-Transparent-Free-PNG.png' },
    { id: 2, title: 'Finance', positions: '3 open positions', imageUrl: 'https://via.placeholder.com/300x200/FFDAB9/FFA500?text=Finance' },
    { id: 3, title: 'IT', positions: '5 open positions', imageUrl: 'https://via.placeholder.com/300x200/FFDAB9/FFA500?text=IT' },
    { id: 4, title: 'Human Resources', positions: '1 open position', imageUrl: 'https://via.placeholder.com/300x200/FFDAB9/FFA500?text=HR' },
    { id: 5, title: 'Operations', positions: '4 open positions', imageUrl: 'https://via.placeholder.com/300x200/FFDAB9/FFA500?text=Operations' },
    { id: 6, title: 'Sales', positions: '2 open positions', imageUrl: 'https://via.placeholder.com/300x200/FFDAB9/FFA500?text=Sales' },
    { id: 7, title: 'Customer Service', positions: '3 open positions', imageUrl: 'https://via.placeholder.com/300x200/FFDAB9/FFA500?text=Customer+Service' },
    { id: 8, title: 'Engineering', positions: '6 open positions', imageUrl: 'https://via.placeholder.com/300x200/FFDAB9/FFA500?text=Engineering' },
   
  ];

  return (
    <Container>

      <Box sx={{  py: 8 }}>
        <Typography variant="h4" align="left" gutterBottom>
          Search by Category
        </Typography>
        <Typography variant="body2" align="left" className={clsx('text-gray-300', 'dark:text-gray-100')}>
          Search your career opportunity with our categories
        </Typography>
        <Grid container spacing={3} justifyContent="center" sx={{ mt: 4 }}>
          {categories.map(category => (
            <Grid item key={category.id} xs={12} sm={6} md={3}>
              <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: 3, borderRadius: 2 }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={category.imageUrl}
                  alt={category.title}
                  sx={{ borderRadius: '50%', backgroundColor: 'black' }}
                />
                <CardContent>
                  <Typography variant="h5" align="center"  gutterBottom sx={{color:'black'}}>
                    {category.title}
                  </Typography>
                  <Typography variant="body2" align="center" color="text.Secondary">
                    {category.positions}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>    </Container>

  );
};

export default SectionSecond;
