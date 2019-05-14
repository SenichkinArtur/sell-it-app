import { get } from './base';

export function getProducts() {
    return get('/posters');
}

export function getSingleProduct(id) {
    return get('/posters/' + id);
}

export function getSearchProducts(value) {
    return get('/posters/?search=' + value);
}