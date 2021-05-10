import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';
import { takeLatest} from 'redux-saga/effects';

const INITIALIZE = 'check/INITIALIZE';
const CHANGE_FIELD = 'check/CHANGE_FIELD';

const [
    EDIT_NOTICE,
    EDIT_NOTICE_SUCCESS,
    EDIT_NOTICE_FAILURE
] = createRequestActionTypes('edit/EDIT_NOTICE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value})=> ({
    key,
    value
}));

export const editNotice = createAction(EDIT_NOTICE, ({n_title, n_content, n_cateCode, n_like, n_image, notice}) => ({
    n_title,
    n_content,
    n_cateCode,
    n_like,
    n_image,
    notice
}));


const editButtonSaga = createRequestSaga(EDIT_NOTICE, noticeAPI.replaceNotice);
export function * editNoticeSaga(){
    yield takeLatest(EDIT_NOTICE, editButtonSaga);
}

const initialState = {
    n_title: '',
    n_content: '',
    n_cateCode: '',
    n_like:0,
    n_image: '',
    notice: null,
    noticeError: null
};

const noticeEdit = handleActions(
    {
        [INITIALIZE] : state => initialState,
        [CHANGE_FIELD] : (state, { payload: {key, value}}) => ({
            ...state,
            [key] : value
        }),
        [EDIT_NOTICE] : state => ({
            ...state,
            notice: null,
            noticeError: null
        }),
        [EDIT_NOTICE_SUCCESS] : (state, {payload: notice,}) => ({
            ...state,
            notice
    
        }),
        [EDIT_NOTICE_FAILURE] : (state, {payload : noticeError}) =>({
            ...state,
            noticeError
        }),
    },
    initialState
);

export default noticeEdit;