import React, { useEffect, useRef, useState } from "react";
import Chart, { ChartData, ChartOptions} from 'chart.js/auto';
import TitleMediumSized from "../TitleMediumSized/TitleMediumSized";
import { Props, StocksData, StocksOptions } from "../../../type/typeComponents/typesMyChart";

import cl from "./MyChart.module.scss";

const MyChart:React.FC<Props> = (props: Props) =>{

  console.log(props.secondCoin);
  
  const canvasChart = useRef<HTMLCanvasElement>(null);
  
  // const ctx = canvasChart.current?.getContext('2d');

  useEffect( () => {
    Chart.overrides.line.spanGaps = true;
    const data: StocksData = {
      labels: props.newChartData.time,
      datasets: [{
          label: props.nameCoin,
          data: props.newChartData.averageIndex,
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
      }],
    }

    const options: StocksOptions = {
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

    const ChartItem: any = canvasChart;
    
    const myChart = new Chart(ChartItem.current, {
      type: 'line',
      data: data,
      options: options
  });
  return () => {
    myChart.destroy();
  }}, [props.newChartData]);

  return (
    <div className={cl.chart} >
      <TitleMediumSized>{props.newChartData.text}</TitleMediumSized>
      <div className={cl.chart__plan}>
        <canvas ref={canvasChart} id="myChart" width="500" height="400"></canvas>
      </div>
    </div>
  )
}

export default MyChart;