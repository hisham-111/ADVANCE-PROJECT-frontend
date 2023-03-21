import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { Box, Button, Divider, Typography,DialogActions,DialogTitle,Dialog,TextField,DialogContent } from "@mui/material";
import { Stack } from "@mui/system";
import { React, useState,useEffect } from "react";
import axios from 'axios';
export default function AdminsCard() {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '', 
  });
  

    const [admins, setAdmins]=useState([
        {
            id: "1",
            fullName: "Admin Name-1",
            userName: "Admin userName-1",
            created_at: "yy-mm-dd",
        },
        {
            id: "2",
            fullName: "Admin Name-2",
            userName: "Admin userName-2",
            created_at: "yy-mm-dd",
        }
    ]);

    


    const handleSubmit = (event,id) => {
      event.preventDefault();
      const data = {
        name: formValues.name,
        email: formValues.email,
        
      };
      axios
      .patch(`http://localhost:8000/api/auth/admin/${id}`,data, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        // If the deletion was successful, update the list of admins
        setAdmins(admins.filter((item) => item.id !== id));
        console.log(response.data);
        setFormValues({
          name: '',
          email: '',
          password: '',
        })
        handleClose();
      })
      .catch((error) => {
        console.log(error);
      });
    };




    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  function handleDelete(id) {
    axios
      .delete(`http://localhost:8000/api/auth/admin/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        // If the deletion was successful, update the list of admins
        setAdmins(admins.filter((item) => item.id !== id));
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/auth/admins',{
      headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('access_token')
      }
    })
      .then(response => {
        setAdmins(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  return (
    
    <Box
      sx={{
        padding: "50px",
        width: "60%",
        border: "1px solid rgba(109, 125, 147, 0.15)",
        boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        bgcolor:"white",
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }} marginBottom={1}>
        Admins
      </Typography>
      <Stack spacing="20px">
        {admins
          .map((item) => {
            return (
              <>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  key={item.id}
                >
                  <Box
                    sx={{
                      padding: "16px",
                      borderRadius: "12px",
                      maxWidth: "56px",
                      maxHeight: "56px",
                      bgcolor: "#E6F1F9",
                    }}
                  >
                    <PersonRoundedIcon color="primary" />
                  </Box>
                  <Stack>
                    <Typography sx={{ fontWeight: "bold"}}>
                      {item.email}
                    </Typography>
                    <Typography
                      sx={{
                        color: "gray",
                        fontWeight: "400",
                        fontSize: "12px",
                      }}
                    >
                      {item.created_at}
                    </Typography>
                  </Stack>
                  <Stack direction="row" spacing={6}>
                  <Button
                    sx={{
                      border: "2px solid #026FC2",
                      borderRadius: "6px",
                      width: "66px",
                      height: "37px",
                      fontWeight: "600",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                    onClick={() => handleClickOpen(item.id)}
                  >
                    Edit
                  </Button>
                  <Button
                  variant="contained"
                    sx={{
                      borderRadius: "6px",
                      width: "66px",
                      height: "37px",
                      fontWeight: "600",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </Button>
                  </Stack>
                </Stack>
                <Divider light />
              </>
            );
          })}
      </Stack>

      <Dialog open={open} onClose={handleClose} >
        <DialogTitle style={{textAlign:"center", fontWeight:"600",color:"#394452"}}>Edit<Box display="inline" style={{color:'#026FC2'}}> Admin</Box>
        </DialogTitle>
        <form action='post' onSubmit={handleSubmit}>
        <DialogContent style={{display:"flex",alignItems:"center",flexDirection:"column",margin:"20px 10px",width:"500px"}}>
          
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
            onChange={(event) =>  setFormValues({...formValues, name: event.target.value})}     
            value={admins.email}       
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
            onChange={(event) =>  setFormValues({...formValues, email: event.target.value})}   
            value={formValues.email }
          />
           
        </DialogContent>
        <DialogActions style={{display:"flex",flexDirection:"row", justifyContent:"space-around",marginBottom:"20px"}}>
        <Button onClick={handleClose} 
        style={{ backgroundColor: "#FFF", width: "160px",borderRadius: '10px',color:"#026FC2",fontWeight:"600" }}  variant="outlined">Cancel</Button>

        <Button type='submit'
        style={{ backgroundColor: "#026FC2", width: "160px",borderRadius: '10px',color:"#FFF",fontWeight:"600" }} variant="outlined">Edit Admin</Button>

        </DialogActions>
        </form>
      </Dialog>
    </Box>
  )
}

  
  