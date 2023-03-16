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
    <div className="dashboard" style={{ backgroundColor: "#F8F9FD" }}>
      <Layout>
        <Stack direction="row">
          <SelectMenu />
          <SelectMenu />
        </Stack>
        <Stack direction="row" justifyContent="space-between">
            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
            width="67%"
            >
              <InOutBalanceCard
                amount="200.000"
                typeCode="Income"
                currency="$"
              />
              <InOutBalanceCard
                amount="100.000"
                typeCode="Outcome"
                currency="$"
              />
              <InOutBalanceCard
                amount={200.0 - 100.0}
                typeCode="Balance"
                currency="$"
              />
            </Stack>
            <ProfitBarCard realProfit={20} goalProfit={30} width="29%"/>
          </Stack>
          <Stack direction="row" justifyContent="space-between">
          <TransactionHistory />
            <BillsCard />
          </Stack>
      </Layout>
    </div>
  );
}
