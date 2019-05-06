import { all } from 'redux-saga/effects';
import productSagas from './products';
import userSagas from './user';

export default function* rootSaga() {
    yield all([ productSagas(), userSagas() ]);
}