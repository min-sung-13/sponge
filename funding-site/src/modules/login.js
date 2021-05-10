import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import  { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth'  //안에잇는것들은 다 authAPI로 사용가능

const CHANGE_FIELD = 'login/CHANGE_FIELD';
const INITIALIZE_FORM = 'login/INITIALIZE_FORM';
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes(
    'login/LOGIN'
)
const [KAKAO_LOGIN, KAKAO_LOGIN_SUCCESS, KAKAO_LOGIN_FAILURE] = createRequestActionTypes(
    'login/KAKAO_LOGIN'
)
const [NAVER_LOGIN, NAVER_LOGIN_SUCCESS, NAVER_LOGIN_FAILURE] = createRequestActionTypes(
    'login/NAVER_LOGIN'
)

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const loginOk = createAction(LOGIN, ({ u_id, u_password })=>({
    u_id,
    u_password
}));
export const kakaoLoginOk = createAction(KAKAO_LOGIN, ({u_id}) => ({
    u_id
}));
export const naverLoginOk = createAction(NAVER_LOGIN, ({u_id}) => ({
    u_id
}));

const GologinSaga = createRequestSaga(LOGIN, authAPI.login);
const GoKakaoLoginSaga = createRequestSaga(KAKAO_LOGIN, authAPI.kakao_login);
const GoNaverLoginSaga = createRequestSaga(NAVER_LOGIN, authAPI.naver_login);
export function * loginSaga() {
    yield takeLatest(LOGIN, GologinSaga);
    yield takeLatest(KAKAO_LOGIN, GoKakaoLoginSaga);
    yield takeLatest(NAVER_LOGIN, GoNaverLoginSaga);
}

const initialState ={
    loginG: {
        u_id: '',
        u_password: ''
    },
    kakaoLogin: {
        u_id: ''
    }
};

const login = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value} }) => 
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form })=>({
            ...state,
            [form]: initialState[form],
            loginError: null,                                     //폼이 바뀌면 인증에러를 초기화
        }),
        [LOGIN_SUCCESS]: (state, { payload: logininfo }) => ({        //로그인 성공
            ...state,
            loginError: null,
            login: logininfo
        }),
        [LOGIN_FAILURE]:(state, { payload: error })=>({          //로그인 실패
            ...state,
            loginError: error,
        }),
        [KAKAO_LOGIN_SUCCESS]: (state, { payload: logininfo }) => ({        //로그인 성공
            ...state,
            loginError: null,
            login: logininfo
        }),
        [KAKAO_LOGIN_FAILURE]:(state, { payload: error })=>({          //로그인 실패
            ...state,
            loginError: error,
        }),
        [NAVER_LOGIN_SUCCESS]: (state, { payload: logininfo }) => ({        //로그인 성공
            ...state,
            loginError: null,
            login: logininfo
        }),
        [NAVER_LOGIN_FAILURE]:(state, { payload: error })=>({          //로그인 실패
            ...state,
            loginError: error,
        })
    },
    initialState
)

export default login;