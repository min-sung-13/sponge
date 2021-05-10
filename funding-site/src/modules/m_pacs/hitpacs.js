import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as pacsAPI from '../../lib/api/pacs';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_HPACS,
    LIST_HPACS_SUCCESS,
    LIST_HPACS_FAILURE
] = createRequestActionTypes('pacs/LIST_HPACS');

export const listPacsByHit = createAction(
    LIST_HPACS,
    ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img }) => ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img})
);

const listhiPacsSaga = createRequestSaga(LIST_HPACS, pacsAPI.listPacsByHit);

export function* hpacsSaga() {
    yield takeLatest(LIST_HPACS, listhiPacsSaga);
}

const initialState = {
    hpacs: null,
    error: null
}

const hpacs = handleActions(
    {
        [LIST_HPACS_SUCCESS]: (state, { payload: hpacs}) => ({
            ...state,
            hpacs
        }),
        [LIST_HPACS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default hpacs;