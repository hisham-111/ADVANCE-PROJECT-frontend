import React from 'react';
import { Box } from "@mui/material";
import Header from '../../components/Header/Header';
import Sidebar from '../../components/sideBar/sideBar'
// import InOutBalanceCard from '../../components/InOutBalanceCard/InOutBalanceCard'
import SelectMenu from '../../components/selectMenu/SelectMenu'
// import profitBar from "../../components/profitBarCard/profitBarCard";
import TabPanel from '../../components/transaction/transaction'

function DashboardContent ()  {
   
        return (
            <Box>
                <Sidebar />
                <Header/>
                {/* <InOutBalanceCard/> */}
                <TabPanel />
                <SelectMenu />          
                {/* <profitBar />  */}
            </Box>
        );
    }


export default DashboardContent;