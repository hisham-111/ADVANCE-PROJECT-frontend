import React from 'react';
import { Box, Stack } from "@mui/material";
import './Dashboard.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/sideBar/sideBar'
import InOutBalanceCard from '../../components/InOutBalanceCard/InOutBalanceCard'
import SelectMenu from '../../components/selectMenu/SelectMenu'
// import profitBar from "../../components/profitBarCard/profitBarCard";
import TabPanel from '../../components/transaction/transaction'

function DashboardContent ()  {
   
        return (
          <Box className="page">
            <Stack className="Stack" direction="row" spacing={0}>
              <Stack className="Stack" direction="row" spacing={1}>
                <Sidebar className="sideBar" />
              </Stack>
              <Stack className="Stack" direction="column" spacing={4}>
                <Header className="header" />
                <SelectMenu className="menu" />
                <InOutBalanceCard />
                <Stack className="Stack" direction="row" spacing={50}>
                <h4>Transactions History</h4>
                <h4>Upcoming Bill</h4>
                </Stack>

                <Stack className="Stack" direction="row" spacing={2}>
                  <TabPanel className="transaction" />
                  <TabPanel className="transaction" />
                </Stack>
              </Stack>
            </Stack>
            {/* <profitBar />
            {this.props.goalProfit}
            {this.props.grealProfit} */}

            {/* <Grid container spacing={1}>
              <Grid item xs={2} md={2}>
                <Header />
              </Grid>
              <Grid item xs={6} md={4}>
                <Sidebar />
              </Grid>
              <Grid item xs={6} md={4}>
                <h2>Transaction History</h2>
                <TabPanel />
              </Grid>
              <Grid item xs={6} md={8}>
                <SelectMenu />
              </Grid>
            </Grid> */}
          </Box>
        );
    }


export default DashboardContent;