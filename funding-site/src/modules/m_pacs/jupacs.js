import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../../lib/createRequestSaga';
import * as pacsAPI from '../../lib/api/pacs';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_JPACS,
    LIST_JPACS_SUCCESS,
    LIST_JPACS_FAILURE
] = createRequestActionTypes('pacs/LIST_JPACS');

export const listPacsByJu = createAction(
    LIST_JPACS,
    ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img, _id }) => ({ p_title, p_explain,  p_cate, p_addr, p_state, p_type, p_img, _id})
);

const listjuPacsSaga = createRequestSaga(LIST_JPACS, pacsAPI.listPacsByJu);

export function* jpacsSaga() {
    yield takeLatest(LIST_JPACS, listjuPacsSaga);
}

const initialState = {
    jpacs: null,
    error: null
}

const jpacs = handleActions(
    {
        [LIST_JPACS_SUCCESS]: (state, { payload: jpacs}) => ({
            ...state,
            jpacs
        }),
        [LIST_JPACS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default jpacs;