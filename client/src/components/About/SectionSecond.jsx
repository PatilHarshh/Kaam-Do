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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat,
                fermentum enim quis, consectetur metus.
              </Typography>
              <Typography variant="body1" paragraph>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </Typography>
              <Typography variant="body1" paragraph>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
              </Typography>
              <Typography variant="body1" paragraph>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </Typography>
              <Typography variant="body1" paragraph>
                Praesent ac lectus euismod, ullamcorper risus vel, hendrerit lectus. Proin non
                consequat mauris, nec sodales ante.
              </Typography>
              <Typography variant="body1" paragraph>
                Morbi eu ligula nec lorem maximus aliquam sit amet ac ex. Nulla eu arcu lacinia,
                ultrices quam eget, tincidunt urna.
              </Typography>
            </Grid>

            {/* Right Side - Cards */}
            <Grid item xs={12} md={6} container spacing={3}>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Card 1
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description of Card 1.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Card 2
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description of Card 2.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      Card 3
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      Description of Card 3.
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
