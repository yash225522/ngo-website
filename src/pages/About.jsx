import React from 'react';
import { Container, Typography } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1" paragraph>
        We are a non-profit organization dedicated to improving lives through education, healthcare, and empowerment.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to reach underprivileged communities and provide them with resources to lead better lives.
      </Typography>
    </Container>
  );
};

export default About;
