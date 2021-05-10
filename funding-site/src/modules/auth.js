import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import  { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth'  //안에잇는것들은 다 authAPI로 사용가능

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER'
)
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'auth/LOGIN'
)
const[SENDMAIL,SENDMAIL_SUCCESS,SENDMAIL_FAILURE] = createRequestActionTypes('auth/SENDMAIL')

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const register = createAction(REGISTER, ({ u_username, u_id, u_password })=>({
    u_username,
    u_id,
    u_password
}));
export const login = createAction(LOGIN, ({ u_id, u_password })=>({
    u_id,
    u_password
}));
export const sendmail = createAction(SENDMAIL,({u_id,number})=>({
    u_id,
    number
}))
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const sendmailSaga = createRequestSaga(SENDMAIL, authAPI.sendmail);
export function * authSaga() {
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(SENDMAIL,sendmailSaga);
}

const initialState ={
    register: {
        u_username : '',
        u_id: '',
        u_idConfirm: '',
        u_password: '',
        u_passwordConfirm: ''
    },
    login:{
        u_id: '',
        u_password: ''
    },
    sendmail:{
        u_id:'',
        number:''
    }
};

const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value} }) => 
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form })=>({
            ...state,
            [form]: initialState[form],
            authError: null,                                     //폼이 바뀌면 인증에러를 초기화
        }),
        [REGISTER_SUCCESS]: (state, { payload: auth }) => ({    //회원가입 성공
            ...state,
            authError: null,
            auth: auth
        }),
        [REGISTER_FAILURE]:(state, { payload: error }) => ({     //로그인 실패
            ...state,
            authError: error,
        }),
        [LOGIN_SUCCESS]: (state, { payload: auth }) => ({        //로그인 성공
            ...state,
            authError: null,
            auth: auth
        }),
        [LOGIN_FAILURE]:(state, { payload: error })=>({          //로그인 실패
            ...state,
            authError: error,
        }),
        [SENDMAIL_SUCCESS]:(state,{payload:auth})=>({
            ...state,
            authError:null,
            auth:auth
        }),
        [SENDMAIL_FAILURE]:(state, { payload: error })=>({          //로그인 실패
            ...state,
            authError: error,
        }),
    },
    initialState
)

export default auth;