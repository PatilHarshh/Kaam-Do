import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';
import SectionFirst from './SectionFirst';
import SectionSecond from './SectionSecond';
import SectionThird from './SectionThird';
import SectionFourth from './SectionFourth';

const About = () => {
  return (
    <div>
      <SectionFirst />
      <SectionSecond />
      <SectionThird />
      <SectionFourth />
    </div>
  );
};

export default About;
