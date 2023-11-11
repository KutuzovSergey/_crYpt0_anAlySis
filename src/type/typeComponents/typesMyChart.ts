import Chart, { ChartData, ChartOptions} from 'chart.js/auto';

export type Props = {
    newChartData: {
      time: string[],
      averageIndex: number[],
      text: string,
    },
    nameCoin: string
  }

  export interface StocksData extends ChartData {
    labels: string[],
    datasets: [{
      label: string,
      data: number[],
      backgroundColor: string[],
      borderColor: string[],
      pointBackgroundColor: string[],
      pointHoverBackgroundColor: string,
      pointRadius: number,
      pointHoverRadius: number,
      pointBorderWidth: number,
      borderWidth: number,
      tension: number,
      borderCapStyle: string,
      cubicInterpolationMode: string,
      fill: boolean
    }],
  }

  export interface StocksOptions extends ChartOptions {
    legend: {
      display: boolean,
      labels: {
        fontColor: string,
        fontSize: number
      }
    },
    scales: {
      y: {
        beginAtZero: boolean
      }
    }
  }