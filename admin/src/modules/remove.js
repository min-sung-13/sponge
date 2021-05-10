import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/notice';
import {takeLatest} from 'redux-saga/effects';

const [
    REMOVE_NOTICE,
    REMOVE_NOTICE_SUCCESS,
    REMOVE_NOTICE_FAILURE,
] = createRequestActionTypes('remove/REMOVE_NOTICE');


export const removeNotice = createAction(REMOVE_NOTICE,
    ({n_title, n_content, n_cateCode, n_like, n_image, notice}) => ({n_title, n_content, n_cateCode, n_like, n_image, notice})
);

const removeNoticeSaga = createRequestSaga(REMOVE_NOTICE, noticeAPI.removeNotice);
export function * removeSaga(){
    yield takeLatest(REMOVE_NOTICE, removeNoticeSaga);
}

const initialState = {
    notice: null,
    noticeError: null
};

const remove = handleActions ({
    [REMOVE_NOTICE_SUCCESS]: (state, {payload: notice}) => ({
        ...state,
        notice
    }),
    [REMOVE_NOTICE_FAILURE] : (state, {payload: error}) => ({
        ...state,
        error
    }),
}, initialState);

export default remove;