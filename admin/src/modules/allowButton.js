import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import * as advertiseAPI from '../lib/api/advertise';
import { takeLatest} from 'redux-saga/effects';





const INITIALIZE = 'allow/INITIALIZE';
const CHANGE_FIELD = 'allow/CHANGE_FIELD';

const [
    ALLOW_ADVERTISE,
    ALLOW_ADVERTISE_SUCCESS,
    ALLOW_ADVERTISE_FAILURE
] = createRequestActionTypes('allow/ALLOW_ADVERTISE');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value})=> ({
    key,
    value
}));

export const allowAdvertise = createAction(ALLOW_ADVERTISE, ({a_allow, advertise}) => ({
    a_allow, advertise
}));


const allowAdvertiseSaga = createRequestSaga(ALLOW_ADVERTISE, advertiseAPI.allowAdvertise);
export function * allowSaga(){
    yield takeLatest(ALLOW_ADVERTISE, allowAdvertiseSaga);
}



const initialState = {
    
    upsert: true,
    a_allow: 'Y',
    advertise: null,
    advertiseError: null,
};

const allowButton = handleActions(
    {
        [INITIALIZE] : state => initialState,
        [CHANGE_FIELD] : (state, { payload: {key, value}}) => ({
            ...state,
            [key] : value
        }),
        [ALLOW_ADVERTISE] : state => ({
            ...state,
            advertise: null,
            advertiseError: null
        }),
        [ALLOW_ADVERTISE_SUCCESS] : (state, {payload: advertise,}) => ({
            ...state,
            advertise
    
        }),
        [ALLOW_ADVERTISE_FAILURE] : (state, {payload : advertiseError}) =>({
            ...state,
            advertiseError
        }),
    },
    initialState
);

export default allowButton;