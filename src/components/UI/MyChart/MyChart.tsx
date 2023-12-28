import React, { useEffect, useRef, useState, FC } from "react";
import Chart, { ChartData, ChartOptions} from 'chart.js/auto';
import TitleMediumSized from "../TitleMediumSized/TitleMediumSized";
import { DatasetsCoinType, PropsType, StocksData, StocksOptions } from "../../../type/typeComponents/typesMyChart";

import cl from "./MyChart.module.scss";

const MyChart:FC<PropsType> = (props: PropsType) =>{

  const [dataCoinChart, setDataCoinChart] = useState<any>([]);
  // const [dataSecondCoin, setDataSecondCoin] = useState<any>({
  //   // label: props.nameCoinSecond,
  //   // data: props.secondCoin.averageIndex,
  //   // backgroundColor: [
  //   //   'rgba(52, 42, 139, 0.190',
  //   // ],
  //   // borderColor: [
  //   //   '#fd7e14',
  //   // ],
  //   // pointBackgroundColor: [
  //   //   '#ffffff'
  //   // ],
  //   // pointHoverBackgroundColor: '#32c46f',
  //   // pointRadius: 3,
  //   // pointHoverRadius: 4,
  //   // pointBorderWidth: 4,
  //   // borderWidth: 3,
  //   // tension: 0.5,
  //   // borderCapStyle: '#6a6d78',
  //   // cubicInterpolationMode: 'rgba(52, 42, 139, 0.554)',
  //   // fill: true,
  // });

  // const createSecondCoin = (dataSecondCoin: DatasetsCoinType) => {
  //   const newDataCoinChart: DatasetsCoinType[] = [...dataCoinChart];
  //   newDataCoinChart.push(dataSecondCoin);
  //   setDataCoinChart(newDataCoinChart);
  // }
  
  const canvasChart: any = useRef<HTMLCanvasElement>(null);
  // const chartPlanBlock: any = useRef<HTMLElement>(null);
  // console.log(props.nameCoinSecond);
  // const ctx = canvasChart.current?.getContext('2d');

  // console.log(props.secondCoin);
  // console.log(props.nameCoinSecond);
  // useEffect( () => {
    // const newDataCoinChart = [...dataCoinChart];
    
    // setDataSecondCoin(
      // {
      //   label: 'Dataset 2',
      //   data: [100, 33, 22, 19, 11, 49, 30, 41, 32],
      //   borderColor: '#6d6d48',
      //   backgroundColor: '#6d6d48',
      // },
    //   {
    //   label: props.nameCoinSecond,
    //   data: props.secondCoin.averageIndex,
    //   backgroundColor: [
    //     'rgba(52, 42, 139, 0.190)',
    //   ],
    //   borderColor: [
    //     '#fd7e14',
    //   ],
    //   pointBackgroundColor: [
    //     '#ffffff'
    //   ],
    //   pointHoverBackgroundColor: '#32c46f',
    //   pointRadius: 3,
    //   pointHoverRadius: 4,
    //   pointBorderWidth: 4,
    //   borderWidth: 3,
    //   tension: 0.5,
    //   borderCapStyle: '#6a6d78',
    //   cubicInterpolationMode: 'rgba(52, 42, 139, 0.554)',
    //   fill: true,
    // }
    // )

    // if (props.nameCoinSecond !== '') {
    //   newDataCoinChart.push(dataSecondCoin);
    //   setDataCoinChart(newDataCoinChart);
      // console.log(dataCoinChart);
    // }

  // }, [props.nameCoinSecond]);
  
  // useEffect( () => {
  //   setDataCoinChart([{
  //     label: props.nameCoin,
  //     data: props.newChartData.averageIndex,
  //     backgroundColor: [
  //       'rgba(52, 42, 139, 0.190)',
  //     ],
  //     borderColor: [
  //       '#fd7e14',
  //     ],
  //     pointBackgroundColor: [
  //       '#ffffff'
  //     ],
  //     pointHoverBackgroundColor: '#32c46f',
  //     pointRadius: 3,
  //     pointHoverRadius: 4,
  //     pointBorderWidth: 4,
  //     borderWidth: 3,
  //     tension: 0.5,
  //     borderCapStyle: '#6a6d78',
  //     cubicInterpolationMode: 'rgba(52, 42, 139, 0.554)',
  //     fill: true,
  //   },]);
  // }, []);

  // console.log(props.newChartData.averageIndex);

  // let myChart: any = new Chart(canvasChart.current, {
  //     type: 'line',
  //     data: {
  //       datasets: [{
  //         backgroundColor: "#6a6d78",
  //         borderColor: "rgba(52, 42, 139, 0.190)",
  //         data: [1],
  //         label: "BAAS"
  //       }],
  //       labels: [4]
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true
  //         }
  //       }
  //   }
  // });
  // myChart.destroy();

  useEffect( () => {
    // setDataCoinChart([
      //   {
      //   label: props.nameCoin,
      //   data: props.newChartData.averageIndex,
      //   backgroundColor: [
      //     'rgba(52, 42, 139, 0.190)',
      //   ],
      //   borderColor: [
      //     '#fd7e14',
      //   ],
      //   pointBackgroundColor: [
      //     '#ffffff'
      //   ],
      //   pointHoverBackgroundColor: '#32c46f',
      //   pointRadius: 3,
      //   pointHoverRadius: 4,
      //   pointBorderWidth: 4,
      //   borderWidth: 3,
      //   tension: 0.5,
      //   borderCapStyle: '#6a6d78',
      //   cubicInterpolationMode: 'rgba(52, 42, 139, 0.554)',
      //   fill: true,
      // },
    //   {
    //     label: props.nameCoin,
    //     data: props.newChartData.averageIndex,
    //     borderColor: 'rgba(52, 42, 139, 0.190)',
    //     backgroundColor: '#6a6d78',
    //   },
    // ]);
    // destroyChart(myChart);

    const dataCoin = {
      label: props.nameCoin,
      data: props.newChartData.averageIndex,
      borderColor: 'rgba(52, 42, 139, 0.190)',
      backgroundColor: '#6a6d78',
    }

    const arrDataCoin: any = [];
    arrDataCoin.push(dataCoin);
    setDataCoinChart(arrDataCoin);
    
    Chart.overrides.line.spanGaps = true;

    const data: StocksData = {
      labels: props.newChartData.time,
      datasets: arrDataCoin,
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
  
    const myChart = new Chart(canvasChart.current, {
        type: 'line',
        data: data,
        options: options
    });

    return () => {
      myChart.destroy();
    }
  }, [props.newChartData]);

  useEffect( () => {
    if (props.nameCoinSecond !== '') {
      let chartStatus  = Chart.getChart("myChart");
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }

      console.log(props);
      
      const newDataCoinChart = [...dataCoinChart];
      const dataSecondCoin = {
          label: props.nameCoinSecond,
          data: props.secondCoin.averageIndex,
          borderColor: '#6d6d48',
          backgroundColor: '#6d6d48',
        }
      newDataCoinChart.push(dataSecondCoin);
      setDataCoinChart(newDataCoinChart);

      Chart.overrides.line.spanGaps = true;

      const data: StocksData = {
        labels: props.newChartData.time,
        datasets: newDataCoinChart,
      }

      // console.log(data);

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
  
      const myChart = new Chart(canvasChart.current, {
          type: 'line',
          data: data,
          options: options
      });

      return () => {
        myChart.destroy();
      }
    }
  }, [props.nameCoinSecond]);

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