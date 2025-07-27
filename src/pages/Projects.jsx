import React from 'react';
import { Container, Grid, Card, CardContent, Typography, CardMedia } from '@mui/material';

const projects = [
  { title: "Clean Water Initiative", image: "/images/water.jpg", desc: "Providing clean water access." },
  { title: "Education for All", image: "/images/education.jpg", desc: "Improving education in rural areas." },
  { title: "Healthcare Camps", image: "/images/healthcare.jpg", desc: "Organizing medical camps." }
];

const Projects = () => {
    return (
        <Container maxWidth='lg' sx={{ mt:5 }}>
            <Grid container spacing={4}>
                {projects.map((project, index) => (
                    <Grid item xs={12} md={4} key={index}>
                        <Card>
                            <CardMedia component='img' height='200' image={project.image} alt={project.title} />
                            <CardContent>
                                <Typography variant='h6'>{project.title}</Typography>
                                <Typography variant='body2'>{project.desc}</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}

export default Projects;