import { post, patch } from './base';

export function signIn(data) {
    return post('/login/', data);
};

export function signUp(data) {
    return post('/registration/', data);
}

export const updateUser = (data, headers) => {
    return patch('/profile/', data, headers);
}
