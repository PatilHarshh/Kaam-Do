import React from "react";
import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Container,
  InputAdornment,
} from "@mui/material";
import clsx from "clsx";

const SectionSixth = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle subscription logic here
    console.log("Subscribe button clicked!");
  };

  return (
    <Container>
      <Box sx={{ py: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Stay Up to Date
        </Typography>
        <Typography
          variant="body2"
          align="center"
          className={clsx("text-gray-400", "dark:text-gray-300")}
          sx={{ mb: 4 }}
        >
          Subscribe to our newsletter to receive our weekly feed
        </Typography>
        <Typography
          variant="body1"
          align="center"
          className={clsx("text-gray-500", "dark:text-gray-400")}
          sx={{ mb: 4, px: { xs: 2, md: 6 } }}
        >
          Join our community to get the latest updates on our products, exclusive offers, and insightful articles on a variety of topics. Be the first to know about new features and upcoming events. Our newsletter is a great way to stay connected and informed.
        </Typography>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <img
              src="https://www.shutterstock.com/image-vector/young-good-looking-man-using-600nw-1959667441.jpg"
              alt="Newsletter"
              style={{ maxWidth: "100%", borderRadius: 10 }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                variant="body2"
                align="center"
                className={clsx("text-gray-500", "dark:text-gray-400")}
                sx={{ mb: 2 }}
              >
                Enter your email below to subscribe:
              </Typography>
              <TextField
                variant="outlined"
                placeholder="Enter your email"
                fullWidth
                sx={{
                  borderColor: "lightgrey",
                  borderRadius: 4,
                }}
                className={clsx("dark:bg-gray-500", "dark:border-gray-600")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="contained"
                        className={clsx(
                          "bg-blue-500",
                          "dark:bg-blue-300",
                          "text-white",
                          "dark:hover:text-white",
                          "dark:text-blue-900"
                        )}
                        onClick={handleSubmit}
                        sx={{ borderRadius: 20, textTransform: "none" }}
                      >
                        Subscribe
                      </Button>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default SectionSixth;
