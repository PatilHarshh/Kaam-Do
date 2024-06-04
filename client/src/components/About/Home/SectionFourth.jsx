import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';

const SectionFourth = () => {
  // Example data for three companies
  const companies = [
    {
      id: '1',
      name: 'Google',
      description: 'Explore opportunities at Google.',
      jobs: 5000, // Total number of jobs
      image: 'https://via.placeholder.com/150', // Example image URL
    },
    {
      id: '2',
      name: 'Amazon',
      description: 'Join Amazon and build the future.',
      jobs: 8000,
      image: 'https://via.placeholder.com/150', // Example image URL
    },
    {
      id: '3',
      name: 'Microsoft',
      description: 'Innovate with Microsoft.',
      jobs: 10000,
      image: 'https://via.placeholder.com/150', // Example image URL
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
        <Typography variant="h4" align="left" gutterBottom color="black">
          Find Best Companies
        </Typography>
        <Typography variant="body2" align="left" color="textSecondary" sx={{ mb: 4 }}>
          Work for the best companies in the world
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {companies.map(company => (
            <Grid item key={company.id} xs={12} sm={6} md={4}>
              <Card className="card-hover" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={company.image}
                  alt={company.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {company.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {company.description}
                  </Typography>
                  <Typography variant="body2" color="black" sx={{ mt: 1 }}>
                    {company.jobs} jobs available
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

export default SectionFourth;
