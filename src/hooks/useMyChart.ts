import { useState, useEffect, useRef } from "react";
import Chart from 'chart.js/auto';
import { ChartDataCoin, StocksData, StocksOptions, DatasetsCoinType, DatasetsCoinArrType } from "../type/typeComponents/typesMyChart";

export const useMyChart = (nameCoin: string, 
                          newChartData: ChartDataCoin, 
                          nameCoinSecond: string, 
                          secondCoin: ChartDataCoin, 
                          canvasElement: any): any =>{

  const [dataCoinChart, setDataCoinChart] = useState<DatasetsCoinArrType>([]);

  useEffect( () => {

    const dataCoin: DatasetsCoinType = {
      label: nameCoin,
      data: newChartData.averageIndex,
      borderColor: '#fd7e14',
      backgroundColor: 'rgba(52, 42, 139, 0.100)',
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
    }

    const arrDataCoin: any = [];
    arrDataCoin.push(dataCoin);
    setDataCoinChart(arrDataCoin);
    
    Chart.overrides.line.spanGaps = true;

    const data: StocksData = {
      labels: newChartData.time,
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
  
    const myChart = new Chart(canvasElement.current, {
        type: 'line',
        data: data,
        options: options
    });

    return () => {
      myChart.destroy();
    }
  }, [newChartData]);

  useEffect( () => {
    if (nameCoinSecond !== '') {
      let chartStatus  = Chart.getChart("myChart");
      if (chartStatus !== undefined) {
        chartStatus.destroy();
      }
      
      const newDataCoinChart = [...dataCoinChart];
      const dataSecondCoin: DatasetsCoinType = {
          label: nameCoinSecond,
          data: secondCoin.averageIndex,
          borderColor: '#6d6d48',
          backgroundColor: '#6d6d48',
        }
      newDataCoinChart.push(dataSecondCoin);
      setDataCoinChart(newDataCoinChart);

      Chart.overrides.line.spanGaps = true;

      const data: StocksData = {
        labels: newChartData.time,
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
  
      const myChart = new Chart(canvasElement.current, {
          type: 'line',
          data: data,
          options: options
      });

      return () => {
        myChart.destroy();
      }
    }
  }, [nameCoinSecond]);
}