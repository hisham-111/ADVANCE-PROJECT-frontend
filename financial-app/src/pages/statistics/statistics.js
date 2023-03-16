import { Stack } from "@mui/system";
import React from "react";
import InOutBalanceCard from "../../components/InOutBalanceCard/InOutBalanceCard";
import Layout from "../../components/layout/layout";
import SelectMenu from "../../components/selectMenu/SelectMenu";
import ProfitBarCard from "../../components/profitBarCard/profitBarCard";
import { Typography } from "@mui/material";

export default function Statistics() {
  return (
    <div className="statistics" style={{ backgroundColor: "#F8F9FD" }}>
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
            <InOutBalanceCard amount="200.000" typeCode="Income" currency="$" />
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
            <Stack>
              <Typography variant="h6">Balance History</Typography>
              
            </Stack>
          </Stack>
          <ProfitBarCard realProfit={20} goalProfit={30} />
        </Stack>
      </Layout>
    </div>
  );
}
