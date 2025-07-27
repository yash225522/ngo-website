import React from 'react';
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material';

const images = [
  { src: "/images/gallery1.jpeg", caption: "Childer Smiling" },
  { src: "/images/gallery2.jpeg", caption: "Volunteering" },
  { src: "/images/gallery3.jpeg", caption: "Healthcare Camp" },
];

const Gallery = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <Typography variant="h4" gutterBottom>Gallery</Typography>
      <Grid container spacing={4}>
        {images.map((img, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card>
              <CardMedia component="img" height="200" image={img.src} alt={img.caption} />
              <Typography align="center" sx={{ p: 1 }}>{img.caption}</Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Gallery;
