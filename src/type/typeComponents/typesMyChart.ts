import Chart, { ChartData, ChartOptions} from 'chart.js/auto';

export type ChartDataCoin = {
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
  backgroundColor: string | undefined,
  borderColor: string | undefined,
  pointBackgroundColor?: string,
  pointHoverBackgroundColor?: string,
  pointRadius?: number,
  pointHoverRadius?: number,
  pointBorderWidth?: number,
  borderWidth?: number,
  tension?: number,
  borderCapStyle?: string,
  cubicInterpolationMode?: string,
  fill?: boolean
}

export type DatasetsCoinArrType = DatasetsCoinType[]


export type CanvasChartType = {
  current: HTMLCanvasElement
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

export type RandomParametersType = {
  borderColor: string | undefined,
  backgroundColor: string | undefined,
  pointBackgroundColor: string | undefined,
  pointHoverBackgroundColor: string | undefined,
  borderCapStyle: string | undefined,
  cubicInterpolationMode: string | undefined
}