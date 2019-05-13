import { post } from './base';

export function signIn(data) {
    return post('/login/', data);
};

export function signUp(data) {
    return post('/registration/', data);
}