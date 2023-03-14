import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { FormControl, InputLabel, Select, MenuItem,TextField, Button } from '@mui/material';
import { useState } from 'react';
import { Stack } from '@mui/system';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function AddTransactionForm() {
  const [value, setValue] = useState(0);
  // const [TypeCode, setTypeCode] = useState('');
  const [currency,SetCurrency] = useState('');
  const [amount, setAmount] = useState(0);
  const [schedule, setSchedule] = useState('');
  const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');

  const categoriesByType = {
    Incomes: ['Bills'],
    Expenses: ['Electricity', 'Building'],
  };
  const [typeCode, setTypeCode] = useState('Incomes');
  const [category, setCategory] = useState('');

  const availableCategories = categoriesByType[typeCode];
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleCurrencyChange = (event) =>{
    SetCurrency(event.target.value);
  }

  const handleAmountChange = (event) =>{
    const newAmount = parseInt(event.target.value);
    setAmount(newAmount);
  }

  const handleScheduleChange = (event) =>{  
    setSchedule(event.target.value);
  }
  const handleDescriptionChange = (event) =>{
    setDescription(event.target.value);
  }
 
  
  const handleTypeCodeChange = (event) => {
    setTypeCode(event.target.value);
    setCategory('');
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  

  return (
    <Box sx={{ width: '100%' }}>
  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    <Typography style={{ fontWeight: '600', color: '#394452', fontSize: '27px',paddingTop:"6px",paddingLeft:"8px" }}>
      Add New <Box display="inline" style={{ color: '#026FC2' }}>Transaction</Box>
    </Typography>
    <Tabs value={value} onChange={handleTabChange} aria-label="basic tabs example">
      <Tab label="Fixed" {...a11yProps(0)} />
      <Tab label="Recurring" {...a11yProps(1)} />
    </Tabs>
  </Box>


  <TabPanel value={value} index={0} >
    <Stack spacing={4} >
        <Stack  display="flex" flexDirection="row" justifyContent="space-between">
        <TextField variant='outlined' label="Title" type="text" size="10" required style={{width:"70%"}}/>

        <FormControl  style={{width:"25%" ,margin:"0"}}>
          <InputLabel id="schedule-select-label">Schedule</InputLabel>
            <Select style={{margin:"0"}}
              labelId="schedule-select-label"
              id="schedule-select"
              value={schedule}
              label="Schedule"
              onChange={handleScheduleChange} >
                  
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>
       </FormControl>
       </Stack>

       <Stack  display="flex" flexDirection="row" justifyContent="space-between">
          <TextField type="date" label="Start-Date" autoFocus focused style={{width:"70%"}}/>
        <FormControl style={{width:"25%"}}> 
          <InputLabel>TypeCode</InputLabel>
          <Select
            labelId="TypeCode-select-label"
            id="TypeCode-select"
            value={typeCode}
          label="TypeCode"
          onChange={handleTypeCodeChange}>
            <MenuItem value="Incomes">Income</MenuItem>
            <MenuItem value="Expenses">Expenses</MenuItem>
            </Select>
        </FormControl>
        </Stack>

        <Stack  display="flex" flexDirection="row" justifyContent="space-between">
          <TextField type="number" variant='outlined' value={amount} label='Amount'  onChange={handleAmountChange} inputProps={{steps:10 }} style={{width:"45%"}}/>  { /*set the increment/decrement step to 100*/}
          <FormControl style={{width:"25%"}}> 
            <InputLabel>Currency</InputLabel>
            <Select
              labelId="Currency-select-label"
              id="Currency-select"
              value={currency}
              label="Currency"
              onChange={handleCurrencyChange}>
              <MenuItem value="L.L">L.L.</MenuItem>
              <MenuItem value="$">$</MenuItem>

              </Select>
          </FormControl>
          <FormControl style={{width:"25%"}}>
          <InputLabel id="category-select-label">Category</InputLabel>
            <Select
              labelId="category-select-label"
              id="category-select"
              value={category}
              label="Category"
              onChange={handleCategoryChange}
            >
              {availableCategories.map((category) => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
              </Select>
          </FormControl>
        </Stack>

      
    <TextField value={description} placeholder="Description" label="Description" onChange={handleDescriptionChange}  variant='outlined' multiline rows={4}  rowsMax={8}/>
    
                <Stack display="flex" flexDirection="row" justifyContent="center">
                  <Button 
                  style={{ backgroundColor: "#026FC2",
                          width: "200px",
                          borderRadius: '10px',
                          color:"#FFF",
                          fontWeight:"600",
                          padding:"10px" }}
                          variant="outlined"
                      >Save</Button>
                    </Stack>
        

        
    </Stack>
    
  </TabPanel>






  <TabPanel value={value} index={1}>
  <Stack spacing={3} >
        
        <TextField variant='outlined' label="Title" type="text" size="10" required/>
          <Stack display="flex" flexDirection="row" justifyContent="space-between">
            <TextField type="date" label="Start-Date" autoFocus  focused style={{width:"48%"}}/>
            <TextField type="date" label="End-Date" autoFocus  focused   style={{width:"48%"}}/>
          </Stack>

          <Stack display="flex" flexDirection="row" justifyContent="space-between"> 
        <FormControl sx={{ width:"48%" }}> 
          <InputLabel>TypeCode</InputLabel>
          <Select
            labelId="TypeCode-select-label"
            id="TypeCode-select"
            value={typeCode}
            label="TypeCode"
            onChange={handleTypeCodeChange}>
            <MenuItem value="Incomes">Income</MenuItem>
            <MenuItem value="Expenses">Expenses</MenuItem>
            </Select>
        </FormControl>

          <FormControl style={{width:"48%"}}>
            <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                id="category-select"
                value={category}
                label="Category"
                onChange={handleCategoryChange}
              >
                {availableCategories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
                </Select>
            </FormControl>
                </Stack>

          <Stack display="flex" flexDirection="row" justifyContent="space-between">  
              <TextField type="number"  variant='outlined' value={amount} label='Amount'  onChange={handleAmountChange} inputProps={{steps:10 }} style={{width:"65%"}}/>  { /*set the increment/decrement step to 100*/}
              <FormControl style={{width:"30%"}}> 
                <InputLabel>Currency</InputLabel>
                <Select
                  labelId="Currency-select-label"
                  id="Currency-select"
                  value={currency}
                  label="Currency"
                  onChange={handleCurrencyChange}>
                  <MenuItem value="L.L">L.L.</MenuItem>
                  <MenuItem value="$">$</MenuItem>
                  </Select>
              </FormControl>
                  </Stack>  
      
      
    <TextField value={description} placeholder="Description" label="Description" onChange={handleDescriptionChange}  variant='outlined' multiline rows={4}  rowsMax={8}/>
    <Stack display="flex" flexDirection="row" justifyContent="center">
                  <Button 
                  style={{ backgroundColor: "#026FC2",
                          width: "200px",
                          borderRadius: '10px',
                          color:"#FFF",
                          fontWeight:"600",
                          padding:"10px" }}
                          variant="outlined"
                      >Save</Button>
                    </Stack>
    </Stack>
  </TabPanel>
</Box>

    );
  }