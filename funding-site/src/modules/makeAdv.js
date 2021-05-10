import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';
import  { takeLatest } from 'redux-saga/effects';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as advAPI from '../lib/api/adv'  //안에잇는것들은 다 authAPI로 사용가능

const CHANGE_FIELD = 'makeadv/CHANGE_FIELD';
const INITIALIZE_FORM = 'makeadv/INITIALIZE_FORM';
const [REG_ADV, REG_ADV_SUCCESS, REG_ADV_FAILURE] = createRequestActionTypes(
    'makeadv/REG_ADV'
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
export const makeadvm = createAction(REG_ADV, ({ a_userid, a_title, a_title2, a_content, a_color, a_startdate, a_enddate, a_allow, a_price, a_img })=>({
    a_userid,
    a_title,
    a_title2,
    a_content,
    a_color,
    a_startdate,
    a_enddate,
    a_allow,
    a_price,
    a_img
}));

const GoMakeAdv = createRequestSaga(REG_ADV, advAPI.makeadvm);

export function * regAdvSaga() {
    yield takeLatest(REG_ADV, GoMakeAdv);
}

const initialState ={
    makeAd: {
        a_title: '',
        a_title2: '',
        a_content: '',
        a_color: '',
        a_startdate: '',
        a_enddate: '',
        // a_allow: '',
    },
};

const makeAdv = handleActions(
    {
        [CHANGE_FIELD]: (state, { payload: { form, key, value} }) => 
        produce(state, draft => {
            draft[form][key] = value;
        }),
        [INITIALIZE_FORM]: (state, { payload: form })=>({
            ...state,
            [form]: initialState[form],
            regAdvError: null,                                     //폼이 바뀌면 인증에러를 초기화
        }),
        [REG_ADV_SUCCESS]: (state, { payload: regAdvOk }) => ({   
            ...state,
            regAdvError: null,
            makeAdv: regAdvOk
        }),
        [REG_ADV_FAILURE]:(state, { payload: error }) => ({    
            ...state,
            regAdvError: error,
        }),
    },
    initialState
)

export default makeAdv;