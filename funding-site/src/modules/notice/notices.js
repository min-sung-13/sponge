import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as noticeAPI from '../../lib/api/notice';
import { takeLatest } from 'redux-saga/effects';


const [
    LIST_NOTICES,
    LIST_NOTICES_SUCCES,
    LIST_NOTICES_FAILURE,
  
    
] = createRequestActionTypes('notices/LIST_NOTICES');

export const listNotices = createAction(
    LIST_NOTICES,
    ({ n_title, n_content, n_cateCode, n_image}) => ({n_title, n_content, n_cateCode, n_image})
);

const listNoticesSaga = createRequestSaga(LIST_NOTICES, noticeAPI.listNotices);
export function * noticesSaga(){
    yield takeLatest(LIST_NOTICES, listNoticesSaga);
}



const initialState = {
    notices: null,
    error: null,
    //lastPage: 1
}

const notices = handleActions(
    {
        [LIST_NOTICES_SUCCES] : (state, { payload: notices, meta: response}) => ({
            ...state,
            notices,
            // lastPage: parseInt(response.headers['last-page'], 10)
        }),
        [LIST_NOTICES_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default notices;