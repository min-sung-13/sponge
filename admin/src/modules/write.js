import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';

const [
    WRITE_NOTICE,
    WRITE_NOTICE_SUCCESS,
    WRITE_NOTICE_FAILURE
] = createRequestActionTypes('write/WRITE_NOTICE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value})=> ({
    key,
    value
}));

export const writeNotice = createAction(WRITE_NOTICE, ({n_title, n_content, n_cateCode, n_like, n_image}) => ({
    n_title,
    n_content,
    n_cateCode,
    n_like,
    n_image
}));

const writeNoticeSaga = createRequestSaga(WRITE_NOTICE, noticeAPI.writeNotice);
export function * writeSaga(){
    yield takeLatest(WRITE_NOTICE, writeNoticeSaga);
}

const initialState = {
    upsert: true,
    n_title: '',
    n_content: '',
    n_cateCode: '',
    n_like: 0,
    n_image: '',
    notice: null,
    noticeError: null
};

const write = handleActions(
    {
        [INITIALIZE]: state => initialState,
        [CHANGE_FIELD]: (state, { payload: {key, value} }) => ({
            ...state,
            [key]: value
        }),
        [WRITE_NOTICE] : state => ({
            ...state,
            notice: null,
            noticeError: null
        }),
        [WRITE_NOTICE_SUCCESS] : (state, {payload: notice }) => ({
            ...state,
            notice
        }),
        [WRITE_NOTICE_FAILURE] : (state, { payload: noticeError }) =>({
            ...state,
            noticeError
        }),
    },
    initialState
);

export default write;