import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import { takeLatest, call } from 'redux-saga/effects';
import * as authAPI from '../lib/api/auth'
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';

const CHANGE_FIELD = 'user/CHANGE_FIELD';
const INITIALIZE_FORM = 'user/INITIALIZE_FORM';
const TEMP_SET_USER = 'user/TEMP_SET_USER';
const [CHECK, CHECK_SUCCESS, CHECK_FAILURE] = createRequestActionTypes(
    'user/CHECK'
)
const LOGOUT = 'user/LOGOUT';

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);
export const check = createAction(CHECK);
export const logout = createAction(LOGOUT);

const checkSaga = createRequestSaga(CHECK, authAPI.check);

function checkFailureSaga() {
    try{
        localStorage.removeItem('user')
    }catch(e){
        console.log('localStorage error')
    }
}

function* logoutSaga(){
    try {
        yield call(authAPI.logout);
        localStorage.removeItem('user');
    }catch(e){
        console.log(e)
    }
}

export function* userSaga(){
    yield takeLatest(CHECK, checkSaga);
    yield takeLatest(CHECK_FAILURE, checkFailureSaga);
    yield takeLatest(LOGOUT, logoutSaga);
};

const initialState = {
    user: null,
    checkError: null,
};

export default handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value} }) => 
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form })=>({
            ...state,
            [form]: initialState[form],
            updateError: null,                                     //폼이 바뀌면 인증에러를 초기화
        }),
        [TEMP_SET_USER]:(state, { payload: user }) => ({
            ...state,
            user
        }),
        [CHECK_SUCCESS]:(state, { payload: user }) => ({
            ...state,
            user,
            checkError: null,
        }),
        [CHECK_FAILURE]:(state, { payload: error }) => ({
            ...state,
            user: null,
            checkError: error
        }),
        [LOGOUT]: state => ({
            ...state,
            user: null
        })
    }, initialState
);