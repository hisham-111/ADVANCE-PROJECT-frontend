import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController
);

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      borderRadius: Number.MAX_VALUE,
      type: "bar",
      label: "Income",
      backgroundColor: "rgba(53, 162, 235)",
      data: [0, 10, 5, 2, 20, 30, 45],
      borderColor: "white",
      borderWidth: 2,
    },
    {
      borderRadius: Number.MAX_VALUE,
      type: "bar",
      label: "Outcome",
      backgroundColor: "red",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};


export default function TransactionChart() {
  //   const [chartData, setChartData] = useState({});

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('/api/monthly-balance-history');
  //     const data = await response.json();
  //     const dates = data.map((item) => item.start_date);
  //     const balances = data.map((item) => item.balance);

  //     setChartData({
  //       labels: dates,
  //       datasets: [
  //         {
  //           label: 'Monthly Balance',
  //           data: balances,
  //           backgroundColor: 'rgba(75,192,192,0.4)',
  //           borderColor: 'rgba(75,192,192,1)',
  //           borderWidth: 1,
  //         },
  //       ],
  //     });
  //   };

  //   fetchData();
  // }, []);
  return <Chart type="bar" data={data} />;
}
