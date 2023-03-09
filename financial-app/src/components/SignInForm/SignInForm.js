import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Stack } from '@mui/system';
import { Password } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { blue } from '@mui/material/colors';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setFormValues({ ...formValues, [id]: value });
    setFormErrors({ ...formErrors, [id]: '' });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let errors = {};
    if (!formValues.email) {
      errors.email = 'Email is required';
    }
    if (!formValues.password) {
      errors.password = 'Password is required';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Submit the form
    }
  };

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      spacing={8}
      direction="column"
    >
      <Typography fontSize={50} letterSpacing={5} textAlign={"center"}>
        Signin To the <Box display="inline" style={{color:'#014374'}}>App</Box>
      </Typography>

      <TextField
        id="email"
        type="email"
        label="Email"
        style={{ width: "calc(100% - 100px)" }}
        size="30"
        
        required
        error={Boolean(formErrors.email)}
        helperText={formErrors.email}
        onChange={handleInputChange}
      />
      <TextField
        id="password"
        type={showPassword ? "text" : "password"}
        label="Password"
        style={{ width: "calc(100% - 100px)"}}
        variant="outlined"
        required
        error={Boolean(formErrors.password)}
        helperText={formErrors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        onChange={handleInputChange}
      />
      <Button
        variant="contained"
        style={{ backgroundColor: "#014374", width: "150px",borderRadius: '10px' }}
        onClick={handleSubmit}
      >
        Signin
      </Button>
    </Stack>
  );
};

export default SignInForm;

