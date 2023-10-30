import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getChart, getListOnPage } from "../AP/getCoins";
import { useFetching } from "../hooks/useFetching";
import { checkingUndefined } from "../utils/checks";
import { compileUnix } from "../utils/dateAndTime";
import { findAverageNumber } from "../utils/findAverageNumber";
import MyChart from "../components/UI/MyChart/MyChart";
import ListСoinСharacteristics from "../components/ListСoinСharacteristics";
import HeaderCoin from "../components/HeaderCoin";
import LinksInternetSearch from "../components/LinksInternetSearch";

import '../styles/CurrentcePages.scss';

const CurrencePages = () => {
    const params = useParams();
    const [currenceData, setCurrenceData] = useState([]);
    const [dataChart, setDataChart] = useState([]);
    const [chart, setChart] = useState({time: [], averageIndex: [], text: ``, backgroundColor: ''});

    const [fetchContent, isLoadingContent] = useFetching(async (params) => {
        return await getListOnPage(params)
    });

    const getContent = async () => {
        const result = [];
        result.push(params.id);
        setCurrenceData(await fetchContent(result));
    }


    const [fetchCoin, isLoadingCoin] = useFetching(async (params) => {
        return getChart(params)
    });

     const getDataChart = async (currenceData) =>{
        if (checkingUndefined(currenceData[0]) || currenceData.length === 0) {
            return
        } else {
            setDataChart(await fetchCoin(currenceData[0].NAME));
        }
    }

    const processDataChart = (labels) => {        
        if (checkingUndefined(labels) || labels.length === 0) {
            return
        } else {
        const newLabels = labels.slice();
        const nawChart = {};

        nawChart.backgroundColor = 'rgb(213,227,238)';
        nawChart.averageIndex = newLabels.map( item => findAverageNumber(item.low, item.high));
        nawChart.time = newLabels.map( item => compileUnix(item.time)).map(date => date.slice(0, 10));
        nawChart.text = `график средних значений стоимости ${currenceData[0].FROMSYMBOL}, в ${currenceData[0].TOSYMBOL} за 10 дней`;

        setChart(nawChart);
        }
    }

    useEffect(() => {getContent()}, []);
    useEffect(() => {getDataChart(currenceData)}, [currenceData]);
    useEffect(() => {processDataChart(dataChart.Data)}, [dataChart]);

    return (
        <div className="coin">
            {currenceData.map( data => 
                <div className="coin__wrapper" key={data.NAME}>
                    <HeaderCoin
                        name={data.NAME}
                        alt={data.FROMSYMBOL}
                        images={data.IMAGEURL}/>
                    <ListСoinСharacteristics
                        cost={data.PRICE}
                        minimum={data.LOW24HOUR}
                        maximum={data.HIGH24HOUR}
                        chenge={data.CHANGE24HOUR}
                        capitalization={data.CIRCULATINGSUPPLYMKTCAP}/>
                        
                    <div className="coin__chart">
                        <MyChart newChartData={chart} nameCoin={data.NAME}/>
                        <div className="coin__links-internet">
                            <LinksInternetSearch nameCoin={data.NAME}/>
                        </div>
                    </div>
                </div>
                )
            }
            
        </div>
    )
}

export default CurrencePages;

   