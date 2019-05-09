import axios from 'axios';
import { BASE_URL } from '../app.config';

const request = (method, path) => {
    return axios({
        method: method,
        url: path,
    })    
}

export const get = (path) => {
    return request('GET', BASE_URL + path);
}

export const post = (path) => {
    return request('POST', BASE_URL + path);
}
