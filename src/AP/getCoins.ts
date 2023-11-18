import RequestServer from './RequestServer';
import { dataProcessing } from '../utils/fileCheck';
import { GetAllListType, GetDataProcessingType } from '../type/typeAP/typesGetCoins';

export async function getAllList(): Promise<GetAllListType> {
    try {
    const api_key: string = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const url: string = 'https://min-api.cryptocompare.com/data/blockchain/list';
    const get: string = 'GET';

    const result: any = await RequestServer.getData(get, url, api_key);
    
    // if (result.Data) {
        
    // }
    return Object.keys(result.Data)
    } catch {
        return []
    }
}

export async function  getListOnPage(coins: string[]): Promise<GetDataProcessingType> {
    // console.log(coins);
    if (typeof coins === 'undefined' || 
            !Array.isArray(coins) || 
            !coins.length) {
        coins = ['RMESH', 'ADA', 'SAL', 'ATMI', 'BAAS'];
    }

    const api_key: string = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const parameters: string = `?fsyms=${coins.join()}&tsyms=USD`;
    const url: string = 'https://min-api.cryptocompare.com/data/pricemultifull';
    const get: string = 'GET';
     
    const result = await RequestServer.getData(get, url, parameters, api_key);

    // console.log(result);
    return dataProcessing(result)
}

export async function getChart(coin: string): Promise<GetDataProcessingType>{
    // console.log(coin);
    const api_key: string = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const url: string = 'https://min-api.cryptocompare.com/data/v2/histoday';
    const parameters: string = `?fsym=${coin}&tsym=USD&limit=10`;
    const get: string = 'GET';

    const result = await RequestServer.getData(get, url, parameters, api_key);

    return dataProcessing(result)
}
// https://min-api.cryptocompare.com/data/v2/histoday?fsym=BIX&tsym=USD&limit=10
// const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
// // const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,AAC,ADB,AIDOC,0XBTC&tsyms=USD,EUR'; 