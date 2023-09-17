import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const chartData = {
  labels: ['Mon.', 'Tue.', 'Wed.', 'Thu.',  'Fri.', 'Sat.', 'Sun.'],
  // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
  datasets: [
    {
      label: 'Popularity of colours',
      data: [ 0.4667, 0.47009999999999996, 0.50465, 0.52215, 0.49105, 0.48345000000000005, 0.4975, 0.515, 0.51435, 0.50515, 0.513],
            // you can set indiviual colors for each bar
      backgroundColor: 'rgb(213,227,238)',
      borderWidth: 3,
    }
  ]
}

const ChartCard = (props) =>{

  const fillData = () =>{

    chartData.labels = props.nawChartData.time;
    chartData.datasets[0].data = props.nawChartData.averageIndex;
    chartData.datasets[0].label = props.nawChartData.text;
    chartData.datasets[0].backgroundColor = props.nawChartData.backgroundColor;
  }

  useEffect(() => {fillData()}, [props.nawChartData]);

  return (
    <div className="card__chart" >
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