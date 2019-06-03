import { get } from './base';

export function getProducts(page = 1) {
    return get('/posters/?page=' + page);
}

export function getSingleProduct(id) {
    return get('/posters/' + id + '/');
}

export function getSearchProducts(value) {
    return get('/posters/?search=' + value);
}