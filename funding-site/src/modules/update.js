import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import  { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as authAPI from '../lib/api/auth'  //안에잇는것들은 다 authAPI로 사용가능

const CHANGE_FIELD = 'update/CHANGE_FIELD';
const INITIALIZE_FORM = 'update/INITIALIZE_FORM';
const [UPDATE, UPDATE_SUCCESS, UPDATE_FAILURE] = createRequestActionTypes(
    'update/UPDATE'
);

export const changeField = createAction(
    CHANGE_FIELD,
    ({form, key, value}) => ({
        form,
        key,
        value
    })
);

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

export const updateOk = createAction(UPDATE, ({ u_password, u_profile })=>({
    u_password,
    u_profile
}));

const GoUpdateSaga = createRequestSaga(UPDATE, authAPI.update);

export function * updateSaga() {
    yield takeLatest(UPDATE, GoUpdateSaga);
};

const initialState = {
    edit: {
        u_password: '',
        u_password_confirm: '',
        u_profile: '',
    }
};

const update = handleActions(
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
        [UPDATE_SUCCESS]: (state, { payload: updateInfo }) => ({
            ...state,
            updateError: null,
            update: updateInfo
        }),
        [UPDATE_FAILURE]: (state, { payload: error }) => ({
            ...state,
            updateError: error
        })
    }, initialState
);

export default update;