import React, { useEffect, useRef, useState, FC } from "react";
import Chart, { ChartData, ChartOptions} from 'chart.js/auto';
import TitleMediumSized from "../TitleMediumSized/TitleMediumSized";
import { DatasetsCoinArrType, DatasetsCoinType, PropsType, StocksData, StocksOptions } from "../../../type/typeComponents/typesMyChart";
import { useMyChart } from "../../../hooks/useMyChart";

import cl from "./MyChart.module.scss";

const MyChart:FC<PropsType> = (props: PropsType) =>{

  const canvasChart: any = useRef<HTMLCanvasElement>(null);
  useMyChart(props.nameCoin, props.newChartData, props.nameCoinSecond, props.secondCoin, canvasChart);

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