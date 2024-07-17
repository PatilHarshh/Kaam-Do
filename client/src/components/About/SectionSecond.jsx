import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import React from 'react'

const SectionSecond = () => {
  return (
    <div>
        {/* Second Section */}
        <Box sx={{ py: 8 }}
         className="dark:bg-slate-900"
         >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Side */}
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Our Mission
              </Typography>
              <Typography variant="body1" paragraph>
                We understand the job search can be daunting. Between sifting through countless postings and 
                navigating complex application processes, valuable time gets lost. 
              </Typography>
              <Typography variant="body1" paragraph>
                That's why we created Kaam Do! - a streamlined platform 
                designed to simplify your job search journey.
              </Typography>
              <Typography variant="body1" paragraph>
                Our dedicated team is here to bridge the gap between job seekers and employers. 
              </Typography>
              <Typography variant="body1" paragraph>
                We strive to make the entire process efficient and user-friendly, so you can focus on what 
                truly matters - landing your dream job.
              </Typography>
              <Typography variant="body1" paragraph>
                <b>Ready to Take the Next Step?</b>
              </Typography>
              <Typography variant="body1" paragraph>
                Sign up for Kaam Do! today and take control of your career. Let us help you 
                find the perfect job that aligns with your skills and aspirations.
              </Typography>
            </Grid>

            {/* Right Side - Cards */}
            <Grid item xs={12} md={6} container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Find Your Perfect Match
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Filter jobs by skills, experience, and location to land your dream opportunity.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Build a Winning Resume
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Craft a professional, ATS-friendly resume in minutes using our innovative builder.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Dedicated Support
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Our team is here to answer your questions and guide you throughout your job search journey.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </div>
  )
}

export default SectionSecond
