import RequestServer from './RequestServer';
import { dataProcessing } from '../utils/fileCheck';

export async function getAllList(){
    const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const url = 'https://min-api.cryptocompare.com/data/blockchain/list';
    const get = 'GET';

    const result = await RequestServer.getData(get, url, api_key);

    return Object.keys(result.Data);
}

export async function  getListOnPage(coins) {
    if(!coins.length){
        coins = ['RMESH', 'ADA', 'SAL', 'ATMI', 'BAAS'];
    }

    const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
    const parameters = `?fsyms=${coins}&tsyms=USD`;
    const url = 'https://min-api.cryptocompare.com/data/pricemultifull';
    const get = 'GET';
     
    const result = await RequestServer.getData(get, url, parameters, api_key);

    return dataProcessing(result)

    // setCurrences(dataProcessing(result));
}






// const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
// // const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,AAC,ADB,AIDOC,0XBTC&tsyms=USD,EUR';