"use client";
import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    TextField,
    Button,
} from "@mui/material";
import Lottie from "lottie-react";
import contactAnimation from "../lottie-animation/contactAnimation.json";
const Contact = () => {

    return <div >
        <Box sx={{ mt: "2rem", mb: '50px' }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Lottie animationData={contactAnimation} style={{ height: '500px' }} />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ display: "flex", alignItems: "center" }}
                >
                    <form >
                        <TextField
                            label="Name"
                            fullWidth
                            margin="normal"

                        />
                        <TextField
                            label="Email"
                            fullWidth
                            margin="normal"

                        />
                        <TextField
                            label="Message"
                            fullWidth
                            multiline
                            rows={4}
                            margin="normal"

                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: "1rem", fontSize: "1.2rem" }}
                            type="submit"
                        >
                            Submit
                        </Button>
                    </form>
                </Grid>
            </Grid>
        </Box></div>;
};

export default Contact;