import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as pacsAPI from '../lib/api/pacs';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_PACS,
    LIST_PACS_SUCCESS,
    LIST_PACS_FAILURE
] = createRequestActionTypes('pacs/LIST_PACS');

export const listPacs = createAction(
    LIST_PACS
);

const listPacsSaga = createRequestSaga(LIST_PACS, pacsAPI.listPacs);

export function* pacsSaga() {
    yield takeLatest(LIST_PACS, listPacsSaga);
}

const initialState = {
    pacs: null,
    error: null
}

const pacs = handleActions(
    {
        [LIST_PACS_SUCCESS]: (state, { payload: pacs}) => ({
            ...state,
            pacs
        }),
        [LIST_PACS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default pacs;