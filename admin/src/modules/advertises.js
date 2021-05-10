import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as advertiseAPI from '../lib/api/advertise'
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_ADVERTISES,
    LIST_ADVERTISES_SUCCES,
    LIST_ADVERTISES_FAILURE,
    
] = createRequestActionTypes('advertise/LIST_ADVERTISES');

export const listAdvertises = createAction(
    LIST_ADVERTISES,
    ({a_title, a_content, a_color,a_img, a_startdate, a_enddate, a_allow, a_price})=>({a_title, a_content, a_color,a_img, a_startdate, a_enddate, a_allow, a_price})
);

const listAdvertisesSaga = createRequestSaga(LIST_ADVERTISES, advertiseAPI.listAdvertise);
export function * advertisesSaga(){
    yield takeLatest(LIST_ADVERTISES, listAdvertisesSaga);
}

const initialState = {
    advertise: null,
    error: null,
    lastPage: 1
}

const advertises = handleActions(
    {
    [LIST_ADVERTISES_SUCCES] : (state, { payload: advertises, meta: response}) => ({
        ...state,
        advertises,
        lastPage: parseInt(response.headers['last-page'], 10)
    }),
    [LIST_ADVERTISES_FAILURE] : (state, {payload : error}) => ({
        ...state,
        error
    }),
},
initialState
)

export default advertises;