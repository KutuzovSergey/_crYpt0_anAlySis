import React, { useEffect, useRef, useState } from "react";
// import { Line, Chart } from "react-chartjs-2";
import Chart from 'chart.js/auto';

import cl from "./MyChart.module.scss";
import TitleMediumSized from "../TitleMediumSized/TitleMediumSized";

const MyChart = (props) =>{

  console.log(props.nawChartData);
  
  const canvasChart = useRef(null);

  useEffect( () => {
    Chart.overrides.line.spanGaps = true;
    const myChart = new Chart(canvasChart.current, {
      type: 'line',
      data: {
          labels: props.nawChartData.time,
          datasets: [{
              label: props.nameCoin,
              data: props.nawChartData.averageIndex,
              backgroundColor: [
                  'rgba(52, 42, 139, 0.190',
              ],
              borderColor: [
                  '#fd7e14',
              ],
              pointBackgroundColor: [
                '#ffffff'
              ],
              pointHoverBackgroundColor: '#32c46f',
              pointRadius: 3,
              pointHoverRadius: 4,
              pointBorderWidth: 4,
              borderWidth: 3,
              tension: 0.5,
              borderCapStyle: '#6a6d78',
              cubicInterpolationMode: 'rgba(52, 42, 139, 0.554)',
              fill: true,
          }]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: '#ffffff',
            fontSize: 14
          }
        },
        scales: {
            y: {
              beginAtZero: true
            }
          }
      }
  });
  return () => {
    myChart.destroy();
  }}, [props.nawChartData]);

  return (
    <div className={cl.chart} >
      <TitleMediumSized>{props.nawChartData.text}</TitleMediumSized>
      <div className={cl.chart__plan}>
        <canvas ref={canvasChart} id="myChart" width="500" height="400"></canvas>
      </div>
    </div>
  )
}

export default MyChart;