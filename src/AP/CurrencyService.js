const serviceList = (method, url, param, apiKey) =>{
    return new Promise((resolve, reject) => {

    const xhr = new XMLHttpRequest();

    xhr.open(method, url+param+apiKey);

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

export default class CurrencesService {

    static async getData(method, url, api_key, param=''){
        return serviceList(method, url, api_key, param='')
            .then(data => data)
            .catch(err => err)
    }
}