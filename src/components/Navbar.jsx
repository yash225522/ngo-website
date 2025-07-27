import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <AppBar position='static'>
            <Toolbar sx={{ justifyContent: 'space-between'}}>
                <Typography variant='h6' component='div'>
                    HIS Organization
                </Typography>
                <div>
                    <Button color='inherit' component={Link} to='/'>Home</Button>
                    <Button color='inherit' component={Link} to='/projects'>Projects</Button>
                    <Button color='inherit' component={Link} to='/gallery'>Gallery</Button>
                    <Button color='inherit' component={Link} to='/contact'>Contact</Button>
                    <Button color='inherit' component={Link} to='/about'>About</Button>
                </div>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;