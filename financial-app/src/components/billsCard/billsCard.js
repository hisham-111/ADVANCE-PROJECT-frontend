import LocalGroceryStoreRoundedIcon from "@mui/icons-material/LocalGroceryStoreRounded";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { React, useState } from "react";

export default function BillsCard() {
  const [bills, setBills] = useState([
    {
      id: "1",
      fixes_key_id: "1",
      fixed_key: {
        id: "1",
        title: "fixed key title -1",
        description: "description-1 bl bla bla bla bla bla bla bla bla bla",
        isActive: true,
      },
      schedule: "yearly",
      start_date: "yy-mm-dd",
      isPaid: false,
      category_id: "1",
      category: {
        id: "1",
        name: "Category-1",
        type_code: "expenses",
      },
      currency_id: "1",
      currency: {
        id: "1",
        name: "$",
        rate: "15000",
      },
      created_at: "yy-mm-dd",
    },
    {
      id: "2",
      fixes_key_id: "2",
      fixed_key: {
        id: "2",
        title: "fixed key title -2",
        description: "description-2 bl bla bla bla bla bla bla bla bla bla",
        isActive: true,
      },
      schedule: "yearly",
      start_date: "yy-mm-dd",
      isPaid: false,
      category_id: "2",
      category: {
        id: "2",
        name: "Category-2",
        type_code: "income",
      },
      currency_id: "2",
      currency: {
        id: "2",
        name: "$",
        rate: "15000",
      },
      created_at: "yy-mm-dd",
    },
    {
      id: "3",
      fixes_key_id: "3",
      fixed_key: {
        id: "3",
        title: "fixed key title -3",
        description: "description-1 bl bla bla bla bla bla bla bla bla bla",
        isActive: true,
      },
      schedule: "monthly",
      start_date: "yy-mm-dd",
      isPaid: false,
      category_id: "1",
      category: {
        id: "1",
        name: "Category-1",
        type_code: "expenses",
      },
      currency_id: "1",
      currency: {
        id: "1",
        name: "$",
        rate: "15000",
      },
      created_at: "yy-mm-dd",
    },
  ]);

  // handlePay = (id) => {
  //   const response = axios
  //     .put(`http://localhost:8000/fixed/${id}`, {
  //       isPaid: true,
  //     })
  //     .then((response) => {
  //       {
  //         if (response.status === 200) {
  //           const updatedBill = response.fixed;
  //           setBills((prevState) => ({
  //             ...prevState,
  //         bills: prevState.bills.map((bill) =>
  //           bill.id === updatedBill.id ? updatedBill : bill
  //         ),
  //           }));
  //           console.log(bills);
  //         }
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <Box
      sx={{
        padding: "24px",
        width: "29%",
        border: "1px solid rgba(109, 125, 147, 0.15)",
        boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
        borderRadius: "12px",
        bgcolor: "white",
      }}
      
    >
      <Typography variant="h6" sx={{ fontWeight: "bold" }} mb={2}>
        Upcoming Bills
      </Typography>
      <Stack spacing={2}>
        {bills
          .filter((item) => item.isPaid === false)
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
                    <LocalGroceryStoreRoundedIcon color="primary" />
                  </Box>
                  <Stack>
                    <Typography sx={{ fontWeight: "bold" }}>
                      {item.fixed_key.title}
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
                  <Button
                    sx={{
                      border: "2px solid #026FC2",
                      borderRadius: "6px",
                      maxWidth: "70px",
                      maxHeight: "40px",
                      fontWeight: "600",
                      fontSize: "14px",
                      textTransform: "none",
                    }}
                    // onClick={() => handlePay(item.id)}
                  >
                    Pay
                  </Button>
                </Stack>
                <Divider light />
              </>
            );
          })}
      </Stack>
    </Box>
  );
}
