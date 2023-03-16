import { Stack, Box } from "@mui/system";
import React from "react";
import InOutBalanceCard from "../../components/InOutBalanceCard/InOutBalanceCard";
import Layout from "../../components/layout/layout";
import ProfitBarCard from "../../components/profitBarCard/profitBarCard";
import { Typography } from "@mui/material";
import BalanceChart from "../../components/charts/balanceBarChart/balanceBarChart";
import TransactionCart from "../../components/charts/transactionChart/transactionChart";
import CategoriesHistory from "../../components/Categories/Categories_History";

export default function Statistics() {
  return (
    <div className="statistics" style={{ backgroundColor: "#F8F9FD" }}>
      <Layout>
        <Stack direction="row" justifyContent="space-between" >
          <Stack paddingRight={2} style={{ width: "69%", overflow: "scroll", height: "88vh"}}>
            <Stack
              direction="row"
              justifyContent="space-between"
              flexWrap="wrap"
            >
              <InOutBalanceCard
                amount="200.000"padding
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
            <Box
              sx={{
                marginY:"16px",
                padding: "32px",
                border: "1px solid rgba(109, 125, 147, 0.15)",
                boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                bgcolor: "white",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                marginBottom={1}
              >
                Balance History
              </Typography>
              <BalanceChart />
            </Box>
            <Box
              sx={{
                padding: "32px",
                border: "1px solid rgba(109, 125, 147, 0.15)",
                boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                bgcolor: "white",
              }}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold" }}
                marginBottom={1}
              >
                Transaction History
              </Typography>
              <TransactionCart />
            </Box>
          </Stack>
          <Stack spacing={2} style={{width:"28%"}}>
          <ProfitBarCard realProfit={20} goalProfit={30} width="100%"/>
          <Box
              sx={{
                padding: "32px",
                border: "1px solid rgba(109, 125, 147, 0.15)",
                boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                bgcolor: "white",
              }}
            >
          <CategoriesHistory/>
          </Box>
          </Stack>
        </Stack>
      </Layout>
    </div>
  );
}
