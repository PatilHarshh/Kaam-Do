import React from 'react';
import { Box, Button, Card, CardContent, Container, Grid, Typography } from '@mui/material';

const SectionThird = () => {
    return (
        <Box sx={{ backgroundColor: '#FFD8B6', py: 8, textAlign: 'center' }}
        className="dark:bg-slate-800"
        >
            {/* Third Section */}
            <Container>
                <Typography variant="h4" gutterBottom>
                    Meet Our Leaders
                </Typography>
                <Typography variant="body1" paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {[1, 2, 3, 4].map((leader) => (
                        <Grid item key={leader} xs={12} sm={6} md={3}>
                            <Card sx={{ borderRadius: 10 }}>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        Leader {leader}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        CEO / Position
                                    </Typography>
                                </CardContent>
                            </Card>

                        </Grid>
                    ))}
                    <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                        View More
                    </Button>
                </Grid>
            </Container>
        </Box>
    );
};

export default SectionThird;
