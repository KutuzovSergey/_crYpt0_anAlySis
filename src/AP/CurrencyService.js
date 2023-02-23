export default class CurrencesService {
    getList(){
        const api_key = '?api_key=92c340e1dee1b05551b8fe09fb59f2bc6ba4715e3ec434f226370c7654de8b38';
        const url = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,AAC,ADB,AIDOC,0XBTC&tsyms=USD,EUR';
        let response_data = null;

        const serviceList = (method, url, param) =>{
            return new Promise((resolve, reject) => {
    
            const xhr = new XMLHttpRequest();
        
            xhr.open(method, url+param);
        
            xhr.responseType = 'json';
        
            xhr.onload = () => {
                if(xhr.status >= 400){
                reject(xhr.response);
                } else {
                resolve(xhr.response);
                }
            }
        
            xhr.onerror = () => {
                reject(xhr.response);
            }
            xhr.send();
            })
        }
        serviceList('GET', url, api_key)
            .then(data => response_data = data)
            .catch(err => response_data = err)

        return response_data
    }

}