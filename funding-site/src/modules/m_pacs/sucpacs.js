import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as pacsAPI from '../../lib/api/pacs';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_SPACS,
    LIST_SPACS_SUCCESS,
    LIST_SPACS_FAILURE
] = createRequestActionTypes('pacs/LIST_SPACS');

export const listPacsBySuc = createAction(
    LIST_SPACS,
    ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img, to_day }) => ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img, to_day})
);

const listSuPacsSaga = createRequestSaga(LIST_SPACS, pacsAPI.listPacsBySuc);

export function* spacsSaga() {
    yield takeLatest(LIST_SPACS, listSuPacsSaga);
}

const initialState = {
    spacs: null,
    error: null
}

const spacs = handleActions(
    {
        [LIST_SPACS_SUCCESS]: (state, { payload: spacs}) => ({
            ...state,
            spacs
        }),
        [LIST_SPACS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default spacs;