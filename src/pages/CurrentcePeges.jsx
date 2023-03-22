import React, { useEffect, useState } from "react";
import '../styles/CurrentcePages.scss';
import { useParams } from "react-router-dom";
import { getChart, getListOnPage } from "../AP/getCoins";
import { useFetching } from "../hooks/useFetching";
import MyChart from "../components/UI/MyChart/MyChart";
import { checkingUndefined } from "../utils/checks";
import { compileUnix } from "../utils/dateAndTime";
import ListСoinСharacteristics from "../components/ListСoinСharacteristics";
import HeaderCoin from "../components/HeaderCoin";
import { findAverageNumber } from "../utils/findAverageNumber";


const CurrencePeges = () => {
    const params = useParams();
    const [currentceData, setCurrenceData] = useState([]);
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

     const getDataChart = async (currentceData) =>{
        if (checkingUndefined(currentceData[0]) || currentceData.length === 0) {
            return
        } else {
            setDataChart(await fetchCoin(currentceData[0].NAME));
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
        nawChart.text = `график средних значений стоимости ${currentceData[0].FROMSYMBOL}, в ${currentceData[0].TOSYMBOL} за 10 дней`;

        setChart(nawChart);
        }
    }

    useEffect(() => {getContent()}, []);
    useEffect(() => {getDataChart(currentceData)}, [currentceData]);
    useEffect(() => {processDataChart(dataChart.Data)}, [dataChart]);

    return (
        <div>
            {currentceData.map( data => 
                <div className="coin" key={data.NAME}>
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
                        <div className="coin__chart__wrapper">
                            <MyChart nawChartData={chart} />
                        </div>
                    </div>
                </div>
                )
            }
            
        </div>
    )
}

export default CurrencePeges;

   