import { Box } from "@mui/system";
import {React, useState, useEffect} from "react";
import { Bar,Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  LineController,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineController,

  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  
);



export default function transactionChart() {
    //     const [chartData, setChartData] = useState({});
  
//     useEffect(() => {
    //   const fetchData = async () => {
    //     const response = await fetch('/api/monthly-balance-history');
    //     const data = await response.json();
        // const dates = data.map((item) => item.start_date);
        // const balances = data.map((item) => item.balance);
  
        // setChartData({
        //   labels: dates,
        //   datasets: [
        //     {
        //       label: 'Monthly Balance',
        //       data: balances,
        //       backgroundColor: 'rgba(75,192,192,0.4)',
        //       borderColor: 'rgba(75,192,192,1)',
        //       borderWidth: 1,
        //     },
        //   ],
        // });
    //   };
  
    //   fetchData();
    // }, []);
    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
      labels: labels,
      datasets: [
        {
          
          backgroundColor: "#037BCB",
          borderColor: "#037BCB",
          data: [0, 10, 5, 2, 20, 30, 45],
          
        },
      ],
    };
    const options = {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },}
    
  return (
<Box>
      
      <Bar data={data} options={options} />
          </Box>  )
}

