import React, { useEffect, useState } from "react";
import { Line, Chart } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import { useFetching } from "../../../hooks/useFetching";
import { getChart } from "../../../AP/getCoins";

import cl from "./MyChart.module.scss";

const MyChart = (props) =>{

  // Chart.defaults.backgroundColor = '#9BD0F5';

  const [chartData, setChartData] = useState({
    labels: ['Mon.', 'Tue.', 'Wed.', 'Thu.',  'Fri.', 'Sat.', 'Sun.'],
    datasets: [
      {
        label: 'Popularity of colours',
        data: [ 10, 10, 12, 10, 8, 10, 10, 5, 10, 15, 10],
        pointRadius: 4,
        pointBorderWidth: 2,
        backgroundColor: '#0c3a5b',
        hoverBackgroundColor: '#ff0000',
        borderColor: '#3bb44a',
        borderWidth: 4,
      }
    ],
    defaults: {
      backgroundColor: '#9BD0F5'
    }
  })

  const fillData = () =>{

    const copiChartData = {};

    Object.assign(copiChartData, chartData);

    copiChartData.labels = props.nawChartData.time;
    copiChartData.datasets[0].data = props.nawChartData.averageIndex;
    copiChartData.datasets[0].label = props.nawChartData.text;
    copiChartData.datasets[0].backgroundColor = props.nawChartData.backgroundColor;

    setChartData(copiChartData);
  }

  useEffect(() => {fillData()}, [props.nawChartData]);

  return (
    <div className={cl.chart} >
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

export default MyChart;