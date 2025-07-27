import React from "react";
import { Box, Typography, Container, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#1976d2', color: 'white', py: 4, mt: 8 }}>
            <Container maxWidth="lg" sx={{ textAlign: 'center'}}>
                <Typography variant="body1" gutterBottom>
                    &copy; {new Date().getFullYear()} HIS Organization. All rights reserved.
                </Typography>
                <Link href='/privacy' color="inherit" underline="hover">Privacy Policy</Link>
            </Container>
        </Box>        
    )
}

export default Footer;