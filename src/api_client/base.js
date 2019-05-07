import axios from 'axios';
import { BASE_URL } from '../app.config';

const request = (method, path) => {
    console.log(path)
    return axios({
        method: method,
        url: path,
    })    
}

const get = (path) => {
    return request('GET', BASE_URL + path);
}

export default get;