import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { Password } from '@mui/icons-material';
import { Typography } from '@mui/material';

const SignInForm = () => {

  return (
    <Stack alignItems="center" justifyContent="space-between" spacing={10} direction="column" marginTop={17}>
        <Typography fontSize={50} letterSpacing={5}>Signin To the App</Typography>
      <Stack 
    // direction="column"   
    // alignItems="center"  
       spacing={8}>
        <TextField 
       
        id='email'
        type='email'
        label='Email'
        
        size='30'
        required 
        />
        <TextField  
        id='password'
        type='password'
        label='Password'
        
        variant='outlined'
        required
        />
        <Button variant='contained'
     style={{ backgroundColor: '#014374' }}
        >Signin</Button>
      </Stack>
    </Stack>
  );
};

export default SignInForm;