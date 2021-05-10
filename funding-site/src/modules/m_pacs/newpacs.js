import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as pacsAPI from '../../lib/api/pacs';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_NPACS,
    LIST_NPACS_SUCCESS,
    LIST_NPACS_FAILURE
] = createRequestActionTypes('pacs/LIST_NPACS');

export const listPacsByNew = createAction(
    LIST_NPACS,
    ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img }) => ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img})
);

const listnePacsSaga = createRequestSaga(LIST_NPACS, pacsAPI.listPacsByNew);

export function* npacsSaga() {
    yield takeLatest(LIST_NPACS, listnePacsSaga);
}

const initialState = {
    npacs: null,
    error: null
}

const npacs = handleActions(
    {
        [LIST_NPACS_SUCCESS]: (state, { payload: npacs}) => ({
            ...state,
            npacs
        }),
        [LIST_NPACS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default npacs;