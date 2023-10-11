import React, { useEffect, useState } from "react";
import { Line, Chart } from "react-chartjs-2";

import cl from "./MyChart.module.scss";

const MyChart = (props) =>{

  const [chartData, setChartData] = useState({
    labels: props.nawChartData.time,  
    datasets: [
      {
        label: props.nawChartData.text,
        data: props.nawChartData.averageIndex,
        pointRadius: 4,
        pointBorderWidth: 2,
        backgroundColor: props.nawChartData.backgroundColor,
        hoverBackgroundColor: '#ff0000',
        borderColor: '#3bb44a',
        borderWidth: 4,
      }
    ],
    defaults: {
      backgroundColor: '#9BD0F5'
    }
  });

  useEffect(() => {
    setChartData({
      labels: props.nawChartData.time,  
      datasets: [
        {
          label: props.nawChartData.text,
          data: props.nawChartData.averageIndex,
          pointRadius: 4,
          pointBorderWidth: 2,
          backgroundColor: props.nawChartData.backgroundColor,
          hoverBackgroundColor: '#ff0000',
          borderColor: '#3bb44a',
          borderWidth: 4,
        }
      ],
      defaults: {
        backgroundColor: '#9BD0F5'
      }
    })
  }, [props.nawChartData]);

  return (
    <div className={cl.chart} >
      <Line
        data={chartData}
        type="line"
        ptions={{
          plugins: {
            title: {
              display: true,
              text: "Валюта в течение 10 дней"
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