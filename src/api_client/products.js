import get from '../api.client/base';

const fetchProductsCall = (path) => {
    return get(path);
}

export default fetchProductsCall;