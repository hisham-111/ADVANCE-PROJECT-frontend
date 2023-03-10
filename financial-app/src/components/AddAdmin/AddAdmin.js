import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import '../AddAdmin/AddAdmin.css'
import  { useState } from 'react';
import { Box, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
export default function AddAdmin() {
  const [open, setOpen] = React.useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    fullName: '',
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
    if (!formValues.fullName) {
      errors.fullName = 'Full Name is required';
    }
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      // Close the dialog and submit the form
      handleClose();
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <section >
      <Button variant="contained" onClick={handleClickOpen} style={{fontWeight:"600", backgroundColor: "#026FC2"}}>

        Add Admin
      </Button>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{textAlign:"center", fontWeight:"600",color:"#394452"}}>Add New <Box display="inline" style={{color:'#026FC2'}}>Admin</Box></DialogTitle>
        <DialogContent style={{display:"flex",alignItems:"center",flexDirection:"column",margin:"20px 10px",width:"500px",padding:""}}>
        <TextField
            autoFocus
            margin="dense"
            id="fullName"
            label="Full Name"
            type="text"
            fullWidth
            variant="outlined"
            size="30"
            required
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            size="30"
            required
            error={formErrors.email !== ''}
            helperText={formErrors.email}
            onChange={handleInputChange}
          />
           <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            required
            size="30"
            onChange={handleInputChange}
            eye={showPassword ? "text" : "password"}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
          />
        </DialogContent>
        <DialogActions style={{display:"flex",flexDirection:"column", justifyContent:"space-around"}}>
        <Button onClick={handleSubmit}
        style={{ backgroundColor: "#026FC2", width: "160px",borderRadius: '10px',color:"#FFF",border:"2px solid",fontWeight:"600" }}>Add Account</Button>

        <Button onClick={handleClose} variant="outlined"
        style={{ backgroundColor: "#FFF", width: "160px",borderRadius: '10px',color:"#026FC2",border:"2px solid",fontWeight:"600" ,marginTop:"10px",marginRight:"10px"}}>Cancel</Button>
          
        </DialogActions>
      </Dialog>
    </section>
  );
}