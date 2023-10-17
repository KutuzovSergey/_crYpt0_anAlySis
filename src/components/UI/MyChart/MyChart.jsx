import React, { useEffect, useRef, useState } from "react";
// import { Line, Chart } from "react-chartjs-2";
import Chart from 'chart.js/auto';

import cl from "./MyChart.module.scss";

const MyChart = (props) =>{

  // const canvasChart = React.createRef().getContext("2d");

  // const canvasChart = React.createRef();
  console.log(props.nawChartData);
  const canvasChart = useRef(null);

  useEffect( () => {
    console.log(canvasChart.current);
    const myChart = new Chart(canvasChart.current, {
      type: 'line',
      data: {
          labels: props.nawChartData.time,
          datasets: [{
              label: props.nawChartData.text,
              data: props.nawChartData.averageIndex,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
              ],
              pointRadius: 4,
              pointBorderWidth: 2,
              borderWidth: 4
          }]
      },
      options: {
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

  // const [chartData, setChartData] = useState({
  //   labels: props.nawChartData.time,  
  //   datasets: [
  //     {
  //       label: props.nawChartData.text,
  //       data: props.nawChartData.averageIndex,
  //       pointRadius: 4,
  //       pointBorderWidth: 2,
  //       backgroundColor: props.nawChartData.backgroundColor,
  //       hoverBackgroundColor: '#ff0000',
  //       borderColor: '#3bb44a',
  //       borderWidth: 4,
  //     }
  //   ],
  //   defaults: {
  //     backgroundColor: '#9BD0F5'
  //   }
  // });

  // useEffect(() => {
  //   setChartData({
  //     labels: props.nawChartData.time,  
  //     datasets: [
  //       {
  //         label: props.nawChartData.text,
  //         data: props.nawChartData.averageIndex,
  //         pointRadius: 4,
  //         pointBorderWidth: 2,
  //         backgroundColor: props.nawChartData.backgroundColor,
  //         hoverBackgroundColor: '#ff0000',
  //         borderColor: '#3bb44a',
  //         borderWidth: 4,
  //       }
  //     ],
  //     defaults: {
  //       backgroundColor: '#9BD0F5'
  //     }
  //   })
  // }, [props.nawChartData]);

  return (
    <div className={cl.chart} >
      <div>
        <canvas ref={canvasChart} id="myChart" width="400" height="400"></canvas>
      </div>
      
      {/* <Line
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
        }}/> */}
    </div>
  )
}

export default MyChart;