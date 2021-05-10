import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import  { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth'  //안에잇는것들은 다 authAPI로 사용가능

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes(
    'auth/REGISTER'
);
const [KAKAO_REG, KAKAO_REG_SUCCESS, KAKAO_REG_FAILURE] = createRequestActionTypes(
    'auth/KAKAO_REG'
);
const [NAVER_REG, NAVER_REG_SUCCESS, NAVER_REG_FAILURE] = createRequestActionTypes(
    'auth/NAVER_REG'
);
// const [UPDATE,UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes(
//     'auth/UPDATE'
// )
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
    u_password,
}));
export const kakao_reg = createAction(KAKAO_REG, ({ u_username, u_id, u_profile }) => ({
    u_id,
    u_username,
    u_profile
}));
export const naver_reg = createAction(NAVER_REG, ({ u_username, u_id, u_profile }) => ({
    u_id,
    u_username,
    u_profile
}));

// export const update = createAction(UPDATE, ({ u_password, u_username }) => ({
//     // u_id,
//     u_password,
//     u_username
// }));

const GoregisterSaga = createRequestSaga(REGISTER, authAPI.register);
const KakaoRegSaga = createRequestSaga(KAKAO_REG, authAPI.kakao_reg);
const NaverRegSaga = createRequestSaga(NAVER_REG, authAPI.naver_reg);
// const updateSaga = createRequestSaga(UPDATE, authAPI.update);
export function * registerSaga() {
    yield takeLatest(REGISTER, GoregisterSaga);
    yield takeLatest(KAKAO_REG, KakaoRegSaga);
    yield takeLatest(NAVER_REG, NaverRegSaga);
    // yield takeLatest(UPDATE, updateSaga);
}

const initialState ={
    register: {
        u_username : '',
        u_id: '',
        u_idConfirm: '',
        u_password: '',
        u_passwordConfirm: '',
        u_profile: '',
    },
    kakao: {
        u_id: '',
        u_username: '',
        u_profile: ''
    },
    // update: {
    //     // u_id: '',
    //     u_password: '',
    //     u_password_confirm: '',
    //     u_username: ''
    // }
};

const join = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value} }) => 
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form })=>({
            ...state,
            [form]: initialState[form],
            joinError: null,                                     //폼이 바뀌면 인증에러를 초기화
        }),
        [REGISTER_SUCCESS]: (state, { payload: joinOk }) => ({    //회원가입 성공
            ...state,
            joinError: null,
            join: joinOk
        }),
        [REGISTER_FAILURE]:(state, { payload: error }) => ({     //로그인 실패
            ...state,
            joinError: error,
        }),
        [KAKAO_REG_SUCCESS]: (state, { payload: kakaoOk }) => ({    //회원가입 성공
            ...state,
            kakaoError: null,
            kakao_Reg: kakaoOk
        }),
        [KAKAO_REG_FAILURE]:(state, { payload: error }) => ({     //로그인 실패
            ...state,
            kakaoError: error,
        }),
        [NAVER_REG_SUCCESS]: (state, { payload: naverOk }) => ({    //회원가입 성공
            ...state,
            kakaoError: null,
            naver_Reg: naverOk
        }),
        [NAVER_REG_FAILURE]:(state, { payload: error }) => ({     //로그인 실패
            ...state,
            naverError: error,
        }),
        // [UPDATE_SUCCESS]: (state, { payload: updateOk }) => ({
        //     ...state,
        //     updateError: null,
        //     update: updateOk
        // }),
        // [UPDATE_FAILURE]: (state, { payload: error }) => ({
        //     ...state,
        //     updateError: error,
        // })
    },
    initialState
)

export default join;