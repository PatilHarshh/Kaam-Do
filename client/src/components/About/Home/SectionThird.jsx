import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import { jobs } from '../../utils/data'; // Import jobs data from your utils/data file
import './styles.css'; // Import the CSS file
import clsx from 'clsx';

const SectionThird = () => {
  return (
    <Box sx={{py: 8 }}
    className="bg-orange-200 dark:bg-slate-800"
    >
      <Container>
        <Typography variant="h4" align="left" gutterBottom className={clsx('text-black', 'dark:text-white')}>
          Featured Job Offers
        </Typography>
        <Typography variant="body2" align="left" className={clsx('text-gray-400', 'dark:text-gray-300')} sx={{ mb: 4 }}>
          Search your career opportunity through 112,800 jobs
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {jobs.map(job => (
            <Grid item key={job.id} xs={12} sm={6} md={3}>
              <Card className="card-hover dark:bg-slate-700" sx={{ borderRadius: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', backgroundColor: '#f5f5f5', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                  <CardMedia
                    component="img"
                    image={job.company.profileUrl} // Adjust this to match your actual image property
                    alt={job.jobTitle}
                    sx={{ maxWidth: '100%', maxHeight: '50%', objectFit: 'contain' }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" className={clsx('text-blue-700', 'dark:text-blue-200')} gutterBottom>
                    {job.jobTitle}
                  </Typography>
                  <Typography variant="body2" className={clsx('text-gray-400', 'dark:text-gray-300')} sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {job.jobType}
                    <Typography variant="body2" className={clsx('text-gray-400', 'dark:text-gray-300')} sx={{ ml: 1 }}>
                      by {job.company.name}
                    </Typography>
                  </Typography>
                  <Typography variant="body2" className={clsx('text-gray-400', 'dark:text-gray-300')}>
                    {job.createdAt.toLocaleDateString()} {/* Adjust date format as needed */}
                  </Typography>
                  <Typography variant="body2" className={clsx('text-gray-400', 'dark:text-gray-300')} sx={{ mt: 1 }}>
                    {job.company.name} - {job.company.location}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionThird;
