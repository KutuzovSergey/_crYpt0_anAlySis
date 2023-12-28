import Chart, { ChartData, ChartOptions} from 'chart.js/auto';

type ChartDataCoin = {
  time: string[],
  averageIndex: number[],
  text: string,
}

export type PropsType = {
  newChartData: ChartDataCoin,
  nameCoin: string,
  secondCoin: ChartDataCoin,
  nameCoinSecond: string
}

export type DatasetsCoinType = {
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
}

export interface StocksData extends ChartData {
    labels: string[],
    datasets: DatasetsCoinType[],
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