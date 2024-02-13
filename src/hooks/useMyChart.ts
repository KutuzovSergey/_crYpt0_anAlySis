import { useState, useEffect } from "react";
import Chart from 'chart.js/auto';
import { ChartDataCoin, StocksData, StocksOptions, DatasetsCoinType, DatasetsCoinArrType, RandomParametersType, CanvasChartType } from "../type/typeComponents/typesMyChart";
import { getRandomNumber } from "../utils/getRandomNumber";
import { colorHEXMap, colorRgbaMap } from "../utils/colorsChartsGraphs";

export const useMyChart = (nameCoin: string, 
                          newChartData: ChartDataCoin, 
                          nameCoinSecond: string, 
                          secondCoin: ChartDataCoin, 
                          canvasElement: CanvasChartType): void =>{
  
  const [dataCoinChart, setDataCoinChart] = useState<DatasetsCoinArrType>([]);

  useEffect( () => {

    const dataCoin: DatasetsCoinType = {
      label: nameCoin,
      data: newChartData.averageIndex,
      borderColor: '#fd7e14',
      backgroundColor: 'rgba(52, 42, 139, 0.100)',
      pointBackgroundColor: '#ffffff',
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

    const arrDataCoin: DatasetsCoinArrType = [];

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
      const randomParameters: RandomParametersType = {
        borderColor: '',
        backgroundColor: '',
        pointBackgroundColor: '',
        pointHoverBackgroundColor: '',
        borderCapStyle: '',
        cubicInterpolationMode: ''
      }

      const determineColors = (): void =>{
        randomParameters.borderColor = colorHEXMap.get(getRandomNumber(0, 100));
        randomParameters.backgroundColor = colorHEXMap.get(getRandomNumber(0, 100));
        randomParameters.pointBackgroundColor = colorHEXMap.get(getRandomNumber(0, 100));
        randomParameters.pointHoverBackgroundColor = colorHEXMap.get(getRandomNumber(0, 100));
        randomParameters.borderCapStyle = colorHEXMap.get(getRandomNumber(0, 100));
        randomParameters.cubicInterpolationMode = colorRgbaMap.get(getRandomNumber(0, 100));
      }

      determineColors();

      const newDataCoinChart = [...dataCoinChart];
      const dataSecondCoin: DatasetsCoinType = {
          label: nameCoinSecond,
          data: secondCoin.averageIndex,
          borderColor: randomParameters.borderColor,
          backgroundColor: randomParameters.backgroundColor,
          pointBackgroundColor: randomParameters.pointBackgroundColor,
          pointHoverBackgroundColor: randomParameters.pointHoverBackgroundColor,
          pointRadius: 3,
          pointHoverRadius: 4,
          pointBorderWidth: 4,
          borderWidth: 3,
          tension: 0.5,
          borderCapStyle: randomParameters.borderCapStyle,
          cubicInterpolationMode: randomParameters.cubicInterpolationMode,
          fill: true,
        }
      newDataCoinChart.push(dataSecondCoin);
      setDataCoinChart(newDataCoinChart);

      Chart.overrides.line.spanGaps = true;

      const data: StocksData = {
        labels: newChartData.time,
        datasets: newDataCoinChart,
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
    }
  }, [nameCoinSecond]);
}