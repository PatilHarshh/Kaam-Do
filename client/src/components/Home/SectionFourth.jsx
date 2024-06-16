import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import clsx from 'clsx';

const SectionFourth = () => {
  // Example data for three companies
  const companies = [
    {
      id: '1',
      name: 'Google',
      description: 'Explore opportunities at Google.',
      jobs: 5000, // Total number of jobs
      image: 'https://static01.nyt.com/images/2019/06/18/business/18google/merlin_155876157_28d611ed-0437-4e3a-819e-c4ecb616d59e-superJumbo.jpg', // Example image URL
    },
    {
      id: '2',
      name: 'Amazon',
      description: 'Join Amazon and build the future.',
      jobs: 8000,
      image: 'https://www.accountancydaily.co/sites/default/files/styles/media_thumbnail/public/field/image/amazon_adobestock_291428005_editorial_use_only.jpeg?itok=rt2oGCMy', // Example image URL
    },
    {
      id: '3',
      name: 'Microsoft',
      description: 'Innovate with Microsoft.',
      jobs: 10000,
      image: 'https://www.investmentmonitor.ai/wp-content/uploads/sites/7/2021/12/microsoft-headquarters-fdi.jpg', // Example image URL
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
        <Typography variant="h4" align="left" gutterBottom className={clsx('text-black', 'dark:text-white')}>
          Find Best Companies
        </Typography>
        <Typography variant="body2" align="left" className={clsx('text-gray-400', 'dark:text-gray-300')} sx={{ mb: 4 }}>
          Work for the best companies in the world
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {companies.map(company => (
            <Grid item key={company.id} xs={12} sm={6} md={4}>
              <Card className="card-hover dark:bg-blue-950" sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                <CardMedia
                  component="img"
                  height="150"
                  image={company.image}
                  alt={company.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" className={clsx('text-blue-700', 'dark:text-blue-200')} gutterBottom>
                    {company.name}
                  </Typography>
                  <Typography variant="body2" className={clsx('text-gray-400', 'dark:text-gray-300')}>
                    {company.description}
                  </Typography>
                  <Typography variant="body2" className={clsx('text-black', 'dark:text-gray-400')} sx={{ mt: 1 }}>
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
