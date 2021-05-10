import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as advAPI from '../lib/api/adv';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_ADV,
    LIST_ADV_SUCCESS,
    LIST_ADV_FAILURE
] = createRequestActionTypes('adv/LIST_ADV');

export const listAdv = createAction(
    LIST_ADV, to_day => to_day
);

const listAdvSaga = createRequestSaga(LIST_ADV, advAPI.listAdv);

export function* advSaga() {
    yield takeLatest(LIST_ADV, listAdvSaga);
}

const initialState = {
    adv: null,
    error: null
}

const adv = handleActions(
    {
        [LIST_ADV_SUCCESS]: (state, { payload: adv}) => ({
            ...state,
            adv
        }),
        [LIST_ADV_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default adv;