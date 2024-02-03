import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getChart, getListOnPage } from "../AP/getCoins";
import { useFetching } from "../hooks/useFetching";
import { checkingUndefined } from "../utils/checks";
import { CurrencePagesType, ChartDataType, LabelsType, CurrenceDataType, UseCompareCoinsType, DescriptionCoin, ObjectResultsType } from "../type/typeHooks/typesUseCurrencePages";
import { processingChartData } from "../utils/processingChartData";

export const useCurrencePages = (): CurrencePagesType =>{
    const params = useParams();
    const [currenceData, setCurrenceData] = useState<CurrenceDataType>([]);
    const [descriptionCoin, setDescriptionCoin] = useState<DescriptionCoin | {}>({});
    const [chartData, setChartData] = useState<ChartDataType>({time: [], averageIndex: [], text: ``});

    const [fetchContent, isLoadingContent] = useFetching(async (params: string[]) => {
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
        return getChart(params)
    });

    const getDescriptionCoin = async (currenceData: CurrenceDataType ): Promise<void> =>{
        if (checkingUndefined(currenceData[0]) || +currenceData.length === 0) {
            return
        } else {
            const arrayName: string[] = [];
            arrayName.push(currenceData[0].NAME);

            let description; 
            if (arrayName[0] !== '') {
                description = await fetchCoin(arrayName);

                if (description.Response === 'Success') {
                    setDescriptionCoin(description);
                }
            }
        }
    }

    const processDataChart = (labels: LabelsType): void => {      
        if (checkingUndefined(labels) || labels.length === 0) {
            return
        } else {
            const nawChartData: ChartDataType = {...chartData};
            const timeAndValues: ObjectResultsType = processingChartData(labels);

            nawChartData.averageIndex = timeAndValues.averageIndex;
            nawChartData.time = timeAndValues.time;
            nawChartData.text = `график средних значений стоимости ${currenceData[0].FROMSYMBOL}, в ${currenceData[0].TOSYMBOL} за 10 дней`;
 
            setChartData(nawChartData);
        }
    }

    useEffect(() => {getContent()}, []);
    useEffect(() => {getDescriptionCoin(currenceData)}, [currenceData]);
    useEffect(() => {
        if ("Data" in descriptionCoin) {
            processDataChart(descriptionCoin.Data.Data);
        } else {
            return
        }
    }, [descriptionCoin]);

    const resultCurrence: CurrencePagesType = [ currenceData, chartData ] as const;

    return resultCurrence
}

export const useCompareCoins = (): UseCompareCoinsType =>{
    const [arrNameCoin, setArrNameCoin] = useState<string[]>(['']);
    const [secondNameCoin, setSecondNameCoin] = useState<string>('')
    const [secondDescriptionCoin, setSecondDescriptionCoin] = useState<DescriptionCoin | {}>({});

    const [fetchCoin, isLoadingCoin] = useFetching(async (params: string[]) => {
        return getChart(params)
    });

    const getSecondCoin = (nameCoin: string): void =>{
        const newArrNameCoin: string[] = [];
        newArrNameCoin.push(nameCoin)
        setArrNameCoin(newArrNameCoin);
    }

    const getDescriptionCoin = async (arrNameCoin: string[] ): Promise<void> =>{
        let newDescriptionCoin: DescriptionCoin;
        if (arrNameCoin[0] !== '') {
            newDescriptionCoin = await fetchCoin(arrNameCoin);
            
            if (newDescriptionCoin.Response === 'Success') {
                setSecondDescriptionCoin(processingChartData(newDescriptionCoin.Data.Data)); 
            }
        }
    }

    useEffect(() => {
        getDescriptionCoin(arrNameCoin);
        setSecondNameCoin(arrNameCoin[0]);
        
    }, [arrNameCoin]);
    
    return [
        secondDescriptionCoin,
        secondNameCoin,
        getSecondCoin
    ] 
}