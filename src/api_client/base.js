import axios from 'axios';

const BASE_URL = "http://light-it-04.tk/api";

const request = ({ method, url, data }) => {
    return axios({
        method,
        url,
        data
    })    
}

export const get = (path) => {
    return request({
        method: 'GET',
        url: BASE_URL + path 
    });
}

export const post = (path, data) => {
    return request({
        method: 'POST',
        url: BASE_URL + path,
        data
    });
}
