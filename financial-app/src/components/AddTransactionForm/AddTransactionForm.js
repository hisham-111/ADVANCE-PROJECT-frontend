import * as React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, Select, MenuItem,TextField, Button,Typography,Box, Tabs, Tab} from '@mui/material';
import { useState, useEffect,useMemo } from 'react';
import { Stack } from '@mui/system';
import axios from 'axios';
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
  const [typeCode, setTypeCode] = useState('');
  const [currencies,SetCurrencies] = useState([]);
  const [amount, setAmount] = useState(0);
  const [schedule, setSchedule] = useState('');
  const [description, setDescription] = useState('');
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  //Select the comboBoxes

  const [selectedCurrency, setSelectedCurrency] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTitle, setSelectedTitle] = useState('');
  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  function handleFixedSubmit(event) {
    event.preventDefault();
    console.log('Form submitted!');
    console.log('Title:', selectedTitle);
    console.log('Schedule:', schedule);
    console.log('Start date:', startDate);
    console.log('Type code:', typeCode);
    console.log('Amount:', amount);
    console.log('Currency:', selectedCurrency);
    console.log('Category:', categories);
    console.log('Description:', description);
    

  }
  function handleRecurringSubmit(event){
    event.preventDefault();
    console.log("formData",title)
    console.log("formData",startDate)
    console.log("formData",endDate)
    console.log("formData",typeCode)
    console.log("formData",categories)
    console.log("formData",amount)
    console.log("formData",selectedCurrency)
    console.log("formData",description)
    setAmount('');
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/currency')
      .then(response => {
        SetCurrencies(response.data.currencies);
        console.log(response.data.currencies);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/categories')
      .then(response => {
        setCategories(response.data.categories);
        console.log(response.data.categories);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/key')
      .then(response => {
        setTitle(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },[]);

 const key = [
    {
      id:"1",
      name:"azzam",
      description:"azzam description"
    },
    {
      id:"2",
      name:"hisham",
      description:"hisham description"
    }
  ]
  // const categories = [
  //   {
  //     id: "1",
  //     name: "habibi",
  //     typeCode: "Incomes"
  //   },
  //   {
  //     id: "2",
  //     name: "azzam",
  //     typeCode: "Expenses"
  //   },
  //   {
  //     id: "3",
  //     name: "xyz",
  //     typeCode: "Incomes"
  //   },
  // ]
  

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
    <form action='post' onSubmit={handleFixedSubmit}>
    <Stack spacing={4} >
        <Stack  display="flex" flexDirection="row" justifyContent="space-between">
        {/* <TextField variant='outlined' label="Title" type="text" size="10" required style={{width:"70%"}}/> */}

        <FormControl style={{width:"70%"}}>
        <InputLabel id="title-select-label">Title</InputLabel>
          <Select
            labelId="title-select-label"
            id="title-select"
            value={title}
            label="title"
            onChange={(event) => {
              setSelectedTitle(event.target.value);
              setDescription(key.find((key) => key.title === event.target.value).description);
            }}
            required
          >
            {Array.isArray(key) && key.map((key) => (
              <MenuItem key={key.id} value={key.title}>
                {key.title}
              </MenuItem>
            ))}
          </Select>
      </FormControl>

        <FormControl  style={{width:"25%" ,margin:"0"}}>
          <InputLabel id="schedule-select-label" >Schedule</InputLabel>
            <Select style={{margin:"0"}}
              labelId="schedule-select-label"
              id="schedule-select"
              value={schedule}
              label="Schedule"
              onChange={(event) =>{setSchedule(event.target.value)}}
              required >
                  
              <MenuItem value="Weekly">Weekly</MenuItem>
              <MenuItem value="Monthly">Monthly</MenuItem>
              <MenuItem value="Yearly">Yearly</MenuItem>
            </Select>
       </FormControl>
       </Stack>

       <Stack  display="flex" flexDirection="row" justifyContent="space-between">
          <TextField type="date" label="Start-Date" value={startDate} onChange={(event) =>setStartDate(event.target.value)} autoFocus required focused style={{width:"70%"}}/>
        <FormControl style={{width:"25%"}}> 
          <InputLabel>TypeCode</InputLabel>
          <Select
            labelId="TypeCode-select-label"
            id="TypeCode-select"
            value={typeCode}
             label="TypeCode"
             required
          onChange={(event) =>{  setTypeCode(event.target.value)}}>
            <MenuItem value="incomes">Income</MenuItem>
            <MenuItem value="expenses">Expenses</MenuItem>
            </Select>
        </FormControl>
        </Stack>

        <Stack  display="flex" flexDirection="row" justifyContent="space-between">
            <TextField required type="number" variant='outlined' value={amount} label='Amount'  onChange={(event) =>{  setAmount(event.target.value)}} inputProps={{steps:10 }} style={{width:"45%"}}/>  { /*set the increment/decrement step to 100*/}
            <FormControl style={{width:"25%"}}> 
             <InputLabel>Currency</InputLabel>
                <Select
                  required
                  labelId="Currency-select-label"
                  id="Currency-select"
                  value={selectedCurrency}
                  label="Currency"
                  onChange={(event) =>{  setSelectedCurrency(event.target.value)}}>
                  {Array.isArray(currencies) && currencies.map((currencies) => (
                  <MenuItem key={currencies.id} value={currencies.name}>
                    {currencies.name}
                  </MenuItem>
                ))}
                  </Select>
            </FormControl>
            <FormControl style={{width:"25%"}}>
            <InputLabel id="categories-select-label">Category</InputLabel>
              <Select
                labelId="categories-select-label"
                id="categories-select"
                value={selectedCategory}
                label="Category"
                onChange={(event) =>{setSelectedCategory(event.target.value)}}
                required
              >
                {Array.isArray(categories) && categories.filter(categories => categories.type_code === typeCode).map((categories) => (
                <MenuItem key={categories.id} value={categories.name}>
                  {categories.name}
                </MenuItem>
              ))}

                </Select>
            </FormControl>
        </Stack>      
            <TextField
              value={description}
              label="Description"
              autoFocus
              variant='outlined'
              multiline
              rows={4}
              rowsMax={8}
              InputProps={{readOnly: true}}
            />   

      <Stack display="flex" flexDirection="row" justifyContent="center">
            <Button 
            type="submit"
            style={{ backgroundColor: "#026FC2",
                    width: "200px",
                    borderRadius: '10px',
                    color:"#FFF",
                    fontWeight:"600",
                    padding:"10px" }}
                    variant="outlined"
                >Save
              </Button>
          </Stack>
             
    </Stack>
    </form>
  </TabPanel>






  <TabPanel value={value} index={1}>
    <form action='post' onSubmit={handleRecurringSubmit}>
  <Stack spacing={3} >
        
        <TextField variant='outlined' value={title} onChange={(event)=>setTitle(event.target.value)}  label="Title" type="text" size="10" required/>
          <Stack display="flex" flexDirection="row" justifyContent="space-between">
          <TextField
              type="date"
              value={startDate}
              onChange={(event) => {
                setStartDate(event.target.value);
                if (event.target.value > endDate) {
                  setEndDate(event.target.value);
                }
              }}
              required
              label="Start-Date"
              autoFocus
              focused
              style={{width:"48%"}}
            />

            <TextField
              type="date"
              value={endDate}
              onChange={(event) => {
                setEndDate(event.target.value);
                if (event.target.value < startDate) {
                  setStartDate(event.target.value);
                }
              }}
              required
              label="End-Date"
              autoFocus
              focused
              style={{width:"48%"}}
            />
          </Stack>

          <Stack display="flex" flexDirection="row" justifyContent="space-between"> 
        <FormControl sx={{ width:"48%" }}> 
        <InputLabel>TypeCode</InputLabel>
          <Select
            labelId="TypeCode-select-label"
            id="TypeCode-select"
            value={typeCode}
             label="TypeCode"
             required
          onChange={(event) =>{  setTypeCode(event.target.value)}}>
            <MenuItem value="incomes">Income</MenuItem>
            <MenuItem value="expenses">Expenses</MenuItem>
            </Select>
        </FormControl>

        <FormControl style={{width:"48%"}}>
        <InputLabel id="categories-select-label">Category</InputLabel>
              <Select
                labelId="categories-select-label"
                id="categories-select"
                value={selectedCategory}
                label="Category"
                onChange={(event) =>{setSelectedCategory(event.target.value)}}
                required
              >
                {Array.isArray(categories) && categories.filter(categories => categories.type_code === typeCode).map((categories) => (
                <MenuItem key={categories.id} value={categories.name}>
                  {categories.name}
                </MenuItem>
              ))}

                </Select>
          </FormControl>
                </Stack>

          <Stack display="flex" flexDirection="row" justifyContent="space-between">  
                  <TextField type="number" required  variant='outlined' value={amount} label='Amount'  onChange={(event) =>{  setAmount(event.target.value)}} inputProps={{steps:10 }} style={{width:"65%"}}/>  { /*set the increment/decrement step to 100*/}
              <FormControl style={{width:"30%"}}> 
                <InputLabel>Currency</InputLabel>
                <Select
                  required
                  labelId="Currency-select-label"
                  id="Currency-select"
                  value={selectedCurrency}
                  label="Currency"
                  onChange={(event) =>{  setSelectedCurrency(event.target.value)}}>
                  {Array.isArray(currencies) && currencies.map((currencies) => (
                  <MenuItem key={currencies.id} value={currencies.name}>
                    {currencies.name}
                  </MenuItem>
                ))}
                  </Select>
              </FormControl>
           </Stack>  
      
      
    <TextField value={description} required placeholder="Description" label="Description" onChange={(event) =>{  setDescription(event.target.value)}}  variant='outlined' multiline rows={4}  rowsMax={8}/>
         <Stack display="flex"  flexDirection="row" justifyContent="center">
            <Button 
            type="submit"
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
    </form>
      </TabPanel>
    </Box>

    );
  }