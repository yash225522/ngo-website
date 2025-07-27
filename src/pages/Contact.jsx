import React from 'react';
import { Container, TextField, Typography, Button, Box } from '@mui/material';

const Contact = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Typography variant='4' gutterBottom>Contact Us</Typography>
            <Box component='form' noValidate autoComplete='off'>
                <TextField fullWidth label='Name' margin='normal' />
                <TextField fullWidth label='Email' type='email' margin='normal' />
                <TextField fullWidth label='Message' multiline rows={4} margin='normal' />
                <Button variant='contained' color='primary' sx={{ mt: 2 }}>Submit</Button>
            </Box>
        </Container>
    )
}

export default Contact;