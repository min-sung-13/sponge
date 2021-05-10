import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';
import {takeLatest} from 'redux-saga/effects';

const [
    READ_NOTICE,
    READ_NOTICE_SUCCESS,
    READ_NOTICE_FAILURE,
] = createRequestActionTypes('post/READ_NOTICE');
const UNLOAD_NOTICE = 'notice/UNLOAD_NOTICE';

export const readNotice = createAction(READ_NOTICE, id => id);
export const unloadNotice = createAction(UNLOAD_NOTICE);

const readNoticeSaga = createRequestSaga(READ_NOTICE, noticeAPI.readNotice);
export function * noticeSaga(){
    yield takeLatest(READ_NOTICE, readNoticeSaga);
}

const initialState = {
    notice: null,
    error: null
};

const notice = handleActions (
    {
    [READ_NOTICE_SUCCESS]: (state, {payload: post}) => ({
        ...state,
        post
    }),
    [READ_NOTICE_FAILURE] : (state, {payload :error}) => ({
        ...state,
        error
    }),
    [UNLOAD_NOTICE] : () => initialState,
},initialState
);

export default notice;