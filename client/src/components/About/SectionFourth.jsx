import React from 'react';
import { Box, Button, Container, Typography, Divider, Grid } from '@mui/material';

const SectionFourth = () => {
    return (
        <Box sx={{ backgroundColor: '#eee6db', py: 8, textAlign: 'center' }}
        className="dark:bg-slate-800"
        >
            <Typography variant="h4" gutterBottom>
                We're Hiring!
            </Typography>
            <Typography variant="body1" paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
            <Grid container spacing={2} justifyContent="center">
                {[1, 2, 3].map((_, index) => (
                    <React.Fragment key={index}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" paragraph>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography variant="body1">
                                Location: New York, Dallas, ...
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Button variant="contained" color="primary" sx={{ borderRadius: 10, textTransform: 'none', color: 'white' }}>
                                Apply Now
                            </Button>
                        </Grid>
                        {index < 2 && <Divider sx={{ my: 4, width: '100%' }} />}
                    </React.Fragment>
                ))}
            </Grid>
        </Box>
    );
};

export default SectionFourth;
