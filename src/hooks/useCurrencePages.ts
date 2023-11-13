import { useState, useLayoutEffect, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChart, getListOnPage } from "../AP/getCoins";
import { useFetching } from "../hooks/useFetching";
import { checkingUndefined } from "../utils/checks";
import { compileUnix } from "../utils/dateAndTime";
import { findAverageNumber } from "../utils/findAverageNumber";
import { CurrencePagesType, ChartDataType, DescriptionCoinType, LabelsType, LabelType, CurrenceDataType } from "../type/typeHooks/typesUseCurrencePages";

export const useCurrencePages = (): CurrencePagesType =>{
    const params = useParams();
    const [currenceData, setCurrenceData] = useState<CurrenceDataType>([{
        CHANGE24HOUR: '', 
        CHANGEDAY: '', 
        CHANGEHOUR: '', 
        CHANGEPCT24HOUR: '', 
        CHANGEPCTDAY: '', 
        CHANGEPCTHOUR: '', 
        CIRCULATINGSUPPLY: '',
        CIRCULATINGSUPPLYMKTCAP: '', 
        CONVERSIONLASTUPDATE: '',
        CONVERSIONSYMBOL: '',
        CONVERSIONTYPE: '',
        FROMSYMBOL: '',
        HIGH24HOUR: '',
        HIGHDAY: '',
        HIGHHOUR: '',
        IMAGEURL: '',
        LASTMARKET: '',
        LASTTRADEID: '',
        LASTUPDATE: '',
        LASTVOLUME: '',
        LASTVOLUMETO: '',
        LOW24HOUR: '',
        LOWDAY: '',
        LOWHOUR: '',
        MARKET: '',
        MKTCAP: '',
        MKTCAPPENALTY: '',
        NAME: '',
        OPEN24HOUR: '',
        OPENDAY: '',
        OPENHOUR: '',
        PRICE: '',
        SUPPLY: '',
        TOPTIERVOLUME24HOUR: '',
        TOPTIERVOLUME24HOURTO: '',
        TOSYMBOL: '',
        TOTALTOPTIERVOLUME24H: '',
        TOTALTOPTIERVOLUME24HTO: '',
        TOTALVOLUME24H: '',
        TOTALVOLUME24HTO: '',
        VOLUME24HOUR: '',
        VOLUME24HOURTO: '',
        VOLUMEDAY: '',
        VOLUMEDAYTO: '',
        VOLUMEHOUR: '',
        VOLUMEHOURTO: '' }]);
    const [descriptionCoin, setDescriptionCoin] = useState<any>({});
    const [chartData, setChartData] = useState<ChartDataType>({time: [], averageIndex: [], text: ``});

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

    const getDescriptionCoin = async (currenceData: CurrenceDataType ): Promise<any> =>{
        if (checkingUndefined(currenceData[0]) || +currenceData.length === 0) {
            return
        } else {
            setDescriptionCoin(await fetchCoin(currenceData[0].NAME));
        }
    }

    const processDataChart = (labels: LabelsType): void => {        
        if (checkingUndefined(labels) || labels.length === 0) {
            return
        } else {
            const newLabels: LabelsType = labels.slice();
            const nawChartData: ChartDataType = {...chartData};

            nawChartData.averageIndex = newLabels.map( (item: LabelType) => findAverageNumber(item.low, item.high));
            nawChartData.time = newLabels.map( (item: LabelType) => compileUnix(item.time)).map( (date: string) => date.slice(0, 10));
            nawChartData.text = `график средних значений стоимости ${currenceData[0].FROMSYMBOL}, в ${currenceData[0].TOSYMBOL} за 10 дней`;

            setChartData(nawChartData);
        }
    }

    useEffect(() => {getContent()}, []);
    useEffect(() => {getDescriptionCoin(currenceData)}, [currenceData]);
    useEffect(() => {processDataChart(descriptionCoin.Data)}, [descriptionCoin]);

    const resultCurrence: CurrencePagesType = [ currenceData, chartData ] as const;

    return resultCurrence
}