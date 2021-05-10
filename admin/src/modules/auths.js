import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as noticeAPI from '../lib/api/auth';
import { takeLatest } from 'redux-saga/effects';


const [
    LIST_AUTHS,
    LIST_AUTHS_SUCCES,
    LIST_AUTHS_FAILURE,
  
    
] = createRequestActionTypes('auth/LIST_AUTHS');

export const listAuths = createAction(
    LIST_AUTHS,
    ({ u_id, u_username, u_profile}) => ({u_id, u_username, u_profile})
);

const listAuthsSaga = createRequestSaga(LIST_AUTHS, noticeAPI.listAuth);
export function * authsSaga(){
    yield takeLatest(LIST_AUTHS, listAuthsSaga);
}



const initialState = {
    auth: null,
    error: null,
    lastPage: 1
}

const auths = handleActions(
    {
        [LIST_AUTHS_SUCCES] : (state, { payload: auths, meta: response}) => ({
            ...state,
            auths,
            lastPage: parseInt(response.headers['last-page'], 10)
        }),
        [LIST_AUTHS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default auths;