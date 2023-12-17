import React, {FC} from "react";
import MyChart from "../components/UI/MyChart/MyChart";
import ListСoinСharacteristics from "../components/ListСoinСharacteristics";
import HeaderCoin from "../components/HeaderCoin";
import LinksInternetSearch from "../components/LinksInternetSearch";
import { useCompareCoins, useCurrencePages } from "../hooks/useCurrencePages";
import OtherCoins from "../components/OtherCoins";

import '../styles/CurrentcePages.scss';

const CurrencePages:FC = () => {
    const [currenceData, chartData] = useCurrencePages();
    const [secondDescriptionCoin, getSecondCoin] = useCompareCoins();

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
                        <MyChart newChartData={chartData} nameCoin={data.NAME} secondCoin={secondDescriptionCoin} nameCoinSecond={''}/>
                        <div className="coin__interface">
                            <LinksInternetSearch nameCoin={data.NAME}/>
                            <OtherCoins getCoin={getSecondCoin}/>
                        </div>
                    </div>
                </div>
                )
            }
            
        </div>
    )
}

export default CurrencePages;

   