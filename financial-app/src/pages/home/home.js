import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Layout from "../../components/layout/layout";
import SelectMenu from "../../components/selectMenu/SelectMenu";
import InOutBalanceCard from "../../components/InOutBalanceCard/InOutBalanceCard";
import TransactionHistory from "../../components/transaction/transaction";
import ProfitBarCard from "../../components/profitBarCard/profitBarCard";
import BillsCard from "../../components/billsCard/billsCard";

export default function home() {
  return (
    <div className="Dashboard">
      <Layout>
          <Stack direction="row">
            <SelectMenu />
            <SelectMenu />
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Box sx={{width:"70%"}}>
          <Stack direction="row" justifyContent="space-between" >
            <InOutBalanceCard amount="200" typeCode="Income" currency="$"/>
            <InOutBalanceCard amount="100" typeCode="Outcome" currency="$"/>
            <InOutBalanceCard amount={200-100} typeCode="Income" currency="$"/>
          </Stack>
          <TransactionHistory />
          </Box>
          <Box>
            <ProfitBarCard realProfit={20} goalProfit={30}/>
            <BillsCard/>
          </Box>
        </Stack>
      </Layout>
    </div>
  );
}
