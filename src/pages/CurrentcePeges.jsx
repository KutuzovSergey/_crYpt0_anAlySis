import React, { useEffect, useState } from "react";
import '../styles/CurrentcePages.scss';
import { useParams } from "react-router-dom";
import { getListOnPage } from "../AP/getCoins";
import { useFetching } from "../hooks/useFetching";
import ChartCard from "../components/ChartCard";


const CurrencePeges = () => {
    const params = useParams();
    const [currentceData, setCurrenceData] = useState([]);

    const [fetchContent, isLoadingContent] = useFetching(async (params) => {
        return await getListOnPage(params)
    });

    const getContent = async () => {
        const result = [];
        result.push(params.id);
        setCurrenceData(await fetchContent(result));
    }

    useEffect(() => {getContent()}, []);

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
                                <span>{data.SUPPLY}</span>
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
                        <ChartCard nameCoin={data.NAME} />
                    </div>
                </div>
                )
            }
            
        </div>
    )
}

export default CurrencePeges;