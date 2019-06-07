import { get, post, deleteRequest, patch } from './base';

export function getProducts(page = 1) {
    return get('/posters/?page=' + page);
}

export function getSingleProduct(id) {
    return get('/posters/' + id + '/');
}

export function getSearchProducts(value) {
    return get('/posters/?search=' + value);
}

export function addProduct(data, headers) {
    return post('/posters/', data, headers);
}

export const deleteProduct = (id, headers) => {
    return deleteRequest('/posters/' + id + '/', headers);
}

export const fetchOwnProducts = (headers) => {
    return get('/posters/own/', headers)
}

export const updateProducts = (id, data, headers) => {
    return patch('/posters/' + id + '/', data, headers)
}
