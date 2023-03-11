import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { flexbox, fontWeight } from "@mui/system";
import Divider from "@mui/material/Divider";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ position: "relative" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example">
          <Tab label="Income" {...a11yProps(0)} />

          <Tab label="Outcome" {...a11yProps(1)} sx={{ marginLeft: "-20px" }} />

          <Tab
            label="New More" 
            {...a11yProps(2)}
            sx={{ position: "absolute", right: "30px" }}
            
          />
        <KeyboardArrowRightIcon sx={{position:'absolute' , right:'20px' , top:'12px'}}/>

        </Tabs>

      </Box>


      <TabPanel value={value} index={0}>
        <Box sx={{ width: "100%" }}>
          <Stack spacing={2} sx={{ display: "flex" }}>
           
          <Item sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src="http://placekitten.com/g/70/70" />
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography variant="h6" component="h2">
                    1st category
                  </Typography>
                  <Typography>h1. Heading</Typography>
                </Box>
              </Box>

              <Typography sx={{ alignSelf: "center"}}>
                $100
                {/* {this.props.text.split("$100").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })} */}
                <KeyboardArrowRightIcon sx={{textAlign:'center' , marginBottom:'-6px'}}/>
              </Typography>
            </Item>

            <Item sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src="http://placekitten.com/g/70/70" />
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography variant="h6" component="h2">
                    2nd category
                  </Typography>
                  <Typography>h1. Heading</Typography>
                </Box>
              </Box>

              <Typography sx={{ alignSelf: "center" }}>
                $100
                {/* {this.props.text.split("$100").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })} */}
                <KeyboardArrowRightIcon sx={{textAlign:'center' , marginBottom:'-6px'}}/>
              </Typography>
            </Item>

            <Item sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src="http://placekitten.com/g/70/70" />
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography variant="h6" component="h2">
                    3rd category
                  </Typography>
                  <Typography>h1. Heading</Typography>
                </Box>
              </Box>

              <Typography sx={{ alignSelf: "center" }}>
                $100
                {/* {this.props.text.split("$100").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })} */}
                <KeyboardArrowRightIcon sx={{textAlign:'center' , marginBottom:'-6px'}}/>
              </Typography>
            </Item>

            <Item sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src="http://placekitten.com/g/70/70" />
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography variant="h6" component="h2">
                    4th category
                  </Typography>
                  <Typography>h1. Heading</Typography>
                </Box>
              </Box>

              <Typography sx={{ alignSelf: "center" }}>
                $100
                {/* {this.props.text.split("$100").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })} */}
                <KeyboardArrowRightIcon sx={{textAlign:'center' , marginBottom:'-6px'}}/>
              </Typography>
            </Item>

            <Item sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src="http://placekitten.com/g/70/70" />
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography variant="h6" component="h2">
                    5th category
                  </Typography>
                  <Typography>h1. Heading</Typography>
                </Box>
              </Box>

              <Typography sx={{ alignSelf: "center" }}>
                $100
                {/* {this.props.text.split("$100").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })} */}
                <KeyboardArrowRightIcon sx={{textAlign:'center' , marginBottom:'-6px'}}/>
              </Typography>
            </Item>

            <Item sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <img src="http://placekitten.com/g/70/70" />
                <Box sx={{ marginLeft: "15px" }}>
                  <Typography variant="h6" component="h2">
                    6th category
                  </Typography>
                  <Typography>h1. Heading</Typography>
                </Box>
              </Box>

              <Typography sx={{ alignSelf: "center" }}>
                $100
                {/* {this.props.text.split("\n").map((i, key) => {
                    return <div key={key}>{i}</div>;
                })} */}
                <KeyboardArrowRightIcon sx={{textAlign:'center' , marginBottom:'-6px'}}/>
              </Typography>
            </Item>
          </Stack>
        </Box>
      </TabPanel>

      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>

      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
