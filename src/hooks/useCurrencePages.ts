import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChart, getListOnPage } from "../AP/getCoins";
import { useFetching } from "../hooks/useFetching";
import { checkingUndefined } from "../utils/checks";
import { compileUnix } from "../utils/dateAndTime";
import { findAverageNumber } from "../utils/findAverageNumber";
import { CurrencePagesType, ChartDataType, DescriptionCoinType, LabelsType, LabelType, CurrenceDataType } from "../type/typeHooks/typesUseCurrencePages";
import { UseFetchingCallbackType } from "../type/typeHooks/typesUseCurrences";

export const useCurrencePages = (): CurrencePagesType =>{
    const params = useParams();
    const [currenceData, setCurrenceData] = useState<CurrenceDataType>([]);
    const [descriptionCoin, setDescriptionCoin] = useState<any>({});
    const [chartData, setChartData] = useState<ChartDataType>({time: [], averageIndex: [], text: ``});

    const [fetchContent, isLoadingContent] = useFetching(async (params: string[]) => {
        // console.log(params);
        return await getListOnPage(params)
    });

    const getContent = async () => {
        const result: string[] = [];
        if (typeof params.id !== 'undefined') {
            result.push(params.id);
        }
        setCurrenceData(await fetchContent(result));
    }

    const [fetchCoin, isLoadingCoin] = useFetching(async (params: string[]) => {
        // console.log(params);
        return getChart(params)
    });

    const getDescriptionCoin = async (currenceData: CurrenceDataType ): Promise<any> =>{
        // console.log(currenceData);
        if (checkingUndefined(currenceData[0]) || +currenceData.length === 0) {
            return
        } else {
            // console.log("worked out");
            const arrayName: string[] = [];
            arrayName.push(currenceData[0].NAME);
            console.log(await fetchCoin(arrayName));
            setDescriptionCoin(await fetchCoin(arrayName));
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
    useEffect(() => {
        // console.log(descriptionCoin.Data);
        processDataChart(descriptionCoin.Data)
    }, [descriptionCoin]);

    const resultCurrence: CurrencePagesType = [ currenceData, chartData ] as const;

    return resultCurrence
}