import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../../lib/createRequestSaga';
import * as noticeAPI from '../../lib/api/notice';
import { takeLatest } from 'redux-saga/effects';


const [
    LIST_NOTICES,
    LIST_NOTICES_SUCCES,
    LIST_NOTICES_FAILURE,
  
    
] = createRequestActionTypes('notice/LIST_NOTICES');

export const nextNotice = createAction(
    LIST_NOTICES,
    ({ n_title, n_date, n_cateCode}) => ({n_title, n_date, n_cateCode})
);

const listNoticesSaga = createRequestSaga(LIST_NOTICES, noticeAPI.nextNotice);
export function * noticesSaga(){
    yield takeLatest(LIST_NOTICES, listNoticesSaga);
}



const initialState = {
    notice: null,
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