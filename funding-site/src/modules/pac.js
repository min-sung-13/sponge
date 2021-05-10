import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as pacAPI from '../lib/api/pacs';
import { takeLatest } from 'redux-saga/effects';

const [
    READ_PAC,
    READ_PAC_SUCCESS,
    READ_PAC_FAILURE
] = createRequestActionTypes('pac/READ_PAC');

const UNLOAD_PAC = 'pac/UNLOAD_PAC';

export const readPac = createAction(READ_PAC, p_addr => p_addr);
export const unloadPac = createAction(UNLOAD_PAC);
const readPacSaga = createRequestSaga(READ_PAC, pacAPI.readPac);
export function* pacSaga(){
    yield takeLatest(READ_PAC, readPacSaga);
}

const initialState = {
    pac: null,
    error: null
};

const pac = handleActions (
    {
        [READ_PAC_SUCCESS]: (state, { payload: pac}) => ({
            ...state,
            pac
        }),
        [READ_PAC_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        }),
        [UNLOAD_PAC]: () => initialState,
    },
    initialState
);

export default pac;