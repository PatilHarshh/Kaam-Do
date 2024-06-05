import React from 'react';
import { Box, Grid, Typography, Card, CardContent, CardMedia, Container } from '@mui/material';
import { jobs } from '../../utils/data'; // Import jobs data from your utils/data file
import { Link } from 'react-router-dom';

const SectionThird = () => {
  return (
    <Box sx={{ backgroundColor: '#eee6db', py: 8 }}>
      <Container>
        <style>
          {`
            .card-hover {
              transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            }
            .card-hover:hover {
              transform: translateY(-10px);
              box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
              cursor: pointer;
            }
          `}
        </style>
        <Typography variant="h4" align="left" gutterBottom color="black">
          Featured Job Offers
        </Typography>
        <Typography variant="body2" align="left" color="textSecondary" sx={{ mb: 4 }}>
          Search your career opportunity through 112,800 jobs
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {jobs.map(job => (
            <Grid item key={job.id} xs={12} sm={6} md={3}>
 <Link to={`/job-detail/${job.id}`} style={{ textDecoration: 'none' }}>
              <Card className="card-hover" sx={{ borderRadius: 10 }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150px', backgroundColor: '#f5f5f5', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                  <CardMedia
                    component="img"
                    image={job.company.profileUrl} // Adjust this to match your actual image property
                    alt={job.jobTitle}
                    sx={{ maxWidth: '100%', maxHeight: '50%', objectFit: 'contain' }}
                  />
                </Box>
                <CardContent>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {job.jobTitle}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    {job.jobType}
                    <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                      by {job.company.name}
                    </Typography>
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {job.createdAt.toLocaleDateString()} {/* Adjust date format as needed */}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                    {job.company.name} - {job.company.location}
                  </Typography>
                </CardContent>
              </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SectionThird;
