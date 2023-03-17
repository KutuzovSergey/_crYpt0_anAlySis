import React, { useEffect, useState } from "react";
import '../styles/CurrentcePages.scss';
import { useParams } from "react-router-dom";
import { getChart, getListOnPage } from "../AP/getCoins";
import { useFetching } from "../hooks/useFetching";
import ChartCard from "../components/ChartCard";
import { checkingUndefined } from "../utils/checks";
import { compileUnix } from "../utils/dateAndTime";


const CurrencePeges = () => {
    const params = useParams();
    const [currentceData, setCurrenceData] = useState([]);
    const [dataChart, setDataChart] = useState([]);
    const [time, setTime] = useState([]);

    const [fetchContent, isLoadingContent] = useFetching(async (params) => {
        return await getListOnPage(params)
    });

    const [fetchCoin, isLoadingCoin] = useFetching(async (params) => {
        return getChart(params)
    });

    const getContent = async () => {
        const result = [];
        result.push(params.id);
        setCurrenceData(await fetchContent(result));
    }

    const dataProcessing = (data) =>{
        return new Promise((resolve, reject) =>{
            if (checkingUndefined(data.length)) {
                reject(data);
            } else {
                resolve(data);
            }
        })
    }

    const getDataChart = async () =>{
        if (checkingUndefined(currentceData[0])) {
            return
        } else {
            setDataChart(await fetchCoin(currentceData[0].NAME));

            const newLabels = await dataProcessing(dataChart.Data).then(result => result);

            setTime(...time, newLabels.map( item => compileUnix(item.time)));
        }
    }

    useEffect(() => {getContent()}, []);
    useEffect(() => {getDataChart()}, [currentceData]);

    return (
        <div>
            {currentceData.map( data => 
                <div className="coin" key={data.NAME}>
                    <div className="coin__header">
                        <div className="coin__header__image">
                            <img src={`https://www.cryptocompare.com/${data.IMAGEURL}`} alt={data.FROMSYMBOL} />
                        </div>
                        <div className="coin__header__name">
                            <span>{data.NAME}</span>
                        </div>
                    </div>
                    <div className="coin__property">
                        <div className="coin__property__info">
                            <div className="coin__property__value">
                                <span>{data.CIRCULATINGSUPPLYMKTCAP}</span>
                            </div>
                            <div className="coin__property__name">
                                <span>капитализация</span>
                            </div>
                        </div>
                        <div className="coin__property__info">
                            <div className="coin__property__value">
                                <span>{data.PRICE}</span>
                            </div>
                            <div className="coin__property__name">
                                <span>стоимость</span>
                            </div>
                        </div>
                        <div className="coin__property__info">
                            <div className="coin__property__value">
                                <span>{data.CHANGE24HOUR}</span>
                            </div>
                            <div className="coin__property__name">
                                <span>изменения за 24 часа</span>
                            </div>
                        </div>
                        <div className="coin__property__info">
                            <div className="coin__property__value">
                                <span>{data.LOW24HOUR}</span>
                            </div>
                            <div className="coin__property__name">
                                <span>максимум за 24 часа</span>
                            </div>
                        </div>
                        <div className="coin__property__info">
                            <div className="coin__property__value">
                                <span>{data.HIGH24HOUR}</span>
                            </div>
                            <div className="coin__property__name">
                                <span>максимум за 24 часа</span>
                            </div>
                        </div>
                    </div>
                    <div className="coin__chart">
                        <ChartCard dataChart={time} />
                    </div>
                </div>
                )
            }
            
        </div>
    )
}

export default CurrencePeges;