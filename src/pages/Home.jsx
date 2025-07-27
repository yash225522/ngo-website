import React from 'react';
import {
  Container, Typography, Box, Button, Grid, Card, CardContent
} from '@mui/material';

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundImage: 'url("/images/hero.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '60vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Box sx={{ backgroundColor: 'rgba(0,0,0,0.5)', p: 4, borderRadius: 2 }}>
          <Typography variant="h3" gutterBottom>
            Empowering Communities. Changing Lives.
          </Typography>
          <Typography variant="h6" gutterBottom>
            Join us in building a better future through education, health, and equality.
          </Typography>
          <Button variant="contained" color="primary" size="large" href="/projects">
            See Our Projects
          </Button>
        </Box>
      </Box>

      {/* Mission Section */}
      <Container sx={{ py: 6 }}>
        <Typography variant="h4" gutterBottom>Our Mission</Typography>
        <Typography variant="body1">
          At NGO Name, we work to bring positive change by focusing on education, clean water, and healthcare
          for underprivileged communities. We believe in equal opportunity, dignity, and sustainable progress.
        </Typography>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: '#f5f5f5', py: 5 }}>
        <Container>
          <Grid container spacing={4} textAlign="center">
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" color="primary">500+</Typography>
              <Typography>Students Educated</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" color="primary">30+</Typography>
              <Typography>Healthcare Camps</Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h3" color="primary">1000+</Typography>
              <Typography>Lives Impacted</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Call to Action */}
      <Container sx={{ py: 6, textAlign: 'center' }}>
        <Typography variant="h4" gutterBottom>Become a Volunteer</Typography>
        <Typography variant="body1" paragraph>
          Your time and skills can make a big difference. Join our team of dedicated volunteers to help spread hope and create impact.
        </Typography>
        <Button variant="outlined" color="primary" size="large" href="/contact">
          Get Involved
        </Button>
      </Container>

      {/* Testimonials */}
      <Box sx={{ bgcolor: '#e3f2fd', py: 5 }}>
        <Container>
          <Typography variant="h4" gutterBottom>What People Say</Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1">
                    "Volunteering with this NGO was life-changing. The work they do truly changes lives."
                  </Typography>
                  <Typography variant="subtitle2" align="right">– Yash Gupta, Volunteer</Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="body1">
                    "Thanks to their education program, my son now goes to school. We're forever grateful!"
                  </Typography>
                  <Typography variant="subtitle2" align="right">– Yogita Swami, Beneficiary</Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
