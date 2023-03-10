import React, { useEffect, useState } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'
import { useFetching } from "../hooks/useFetching";
import { getChart } from "../AP/getCoins";

const ChartCard = (props) =>{

  const [dataChart, setDataChart] = useState([]);

  const [fetchCoin, isLoadingCoin] = useFetching(async (params) => {
    return getChart(params)
  });

  const getDataChart = async () =>{
    setDataChart(await fetchCoin(props.nameCoin).Data);
    console.log(dataChart);
  }

  useEffect(() => {getDataChart()}, []);

  const chartData = {
    labels: ['Mon.', 'Tue.', 'Wed.', 'Thu.',  'Fri.', 'Sat.', 'Sun.'],
    // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
    datasets: [
      {
        label: 'Popularity of colours',
        data: [55, 23, 96, 55, 23, 96, 23],
              // you can set indiviual colors for each bar
        backgroundColor: 'rgb(213,227,238)',
        borderWidth: 3,
      }
    ]
  }
  return (
    <div className="card__chart">
      <Line
        data={chartData}
        type="line"
        ptions={{
          plugins: {
            title: {
              display: true,
              text: "Валюта в течение 7 дней"
              },
            legend: {
              display: false
            }
          }
        }}/>
    </div>
  )
}

export default ChartCard;