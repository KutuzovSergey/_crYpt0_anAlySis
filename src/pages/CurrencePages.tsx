import React from "react";
import MyChart from "../components/UI/MyChart/MyChart";
import ListСoinСharacteristics from "../components/ListСoinСharacteristics";
import HeaderCoin from "../components/HeaderCoin";
import LinksInternetSearch from "../components/LinksInternetSearch";
import { useCurrencePages } from "../hooks/useCurrencePages";

import '../styles/CurrentcePages.scss';

const CurrencePages = () => {
    const [currenceData, chartData] = useCurrencePages();

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
                        <MyChart newChartData={chartData} nameCoin={data.NAME}/>
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

   