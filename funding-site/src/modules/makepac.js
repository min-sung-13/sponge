import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as pacAPI from '../lib/api/pacs';
import { takeLatest } from 'redux-saga/effects';

const [
    ADD_PAC,
    ADD_PAC_SUCCESS,
    ADD_PAC_FAILURE
] = createRequestActionTypes('pac/ADD_PAC');

export const addProject = createAction(ADD_PAC,
    ({p_title, p_explain, p_cate, p_addr, p_tag, p_img, p_maker, p_startDate, p_lastDate, p_refund, p_video, p_story, p_hit, p_state, p_type, p_pick, p_project}) => ({p_title, p_explain, p_cate, p_addr, p_tag, p_img, p_maker, p_startDate, p_lastDate, p_refund, p_video, p_story, p_hit, p_state, p_type, p_pick, p_project})
)

export const updateProject = createAction(ADD_PAC, ({p_title, p_img }) => ({p_title, p_img })
);

const makePacSaga = createRequestSaga(ADD_PAC, pacAPI.addProject);
const updatePacSaga = createRequestSaga(ADD_PAC, pacAPI.updateProject);

export function* makepacSaga(){
    yield takeLatest(ADD_PAC, makePacSaga);
    yield takeLatest(ADD_PAC, updatePacSaga);
}

const initialState = {
    pac: null,
    error: null
};

const makepac = handleActions (
    {
        [ADD_PAC_SUCCESS]: (state, { payload: pac}) => ({
            ...state,
            pac
        }),
        [ADD_PAC_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default makepac;