import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as resAPI from '../lib/api/res';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = "write/INITIALIZE"; // 모든 내용 초기화

const[
  LIST_RES,
  LIST_RES_SUCCESS,
  LIST_RES_FAILURE
]= createRequestActionTypes('res/LIST_RES');

const[
  ADD_RES,
  ADD_RES_SUCCESS,
  ADD_RES_FAILURE
]= createRequestActionTypes('res/LIST_RES');

export const initialize = createAction(INITIALIZE);

export const listRes = createAction(
  LIST_RES
);
export const addRes = createAction(
  ADD_RES, ({ r_code, r_userid, r_price, r_detail, r_phone, r_addr }) => ({ r_code, r_userid, r_price, r_detail, r_phone, r_addr })
);

const listResSaga = createRequestSaga(LIST_RES, resAPI.listRes);
const addResSaga = createRequestSaga(ADD_RES, resAPI.addRes);

export function* resSaga() {
    yield takeLatest(LIST_RES, listResSaga);
    yield takeLatest(ADD_RES, addResSaga);
}

const initialState = {
    res: null,
    resError: null
}

const res = handleActions(
    {
        [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기상태로 바뀜
        [LIST_RES_SUCCESS]: (state, { payload: res }) => ({
          ...state,
          res
        }),
        [LIST_RES_FAILURE]: (state, { payload: resError }) => ({
          ...state,
          resError
        }),
        [ADD_RES_SUCCESS]: (state, { payload: res }) => ({
          ...state,
          res
        }),
        [ADD_RES_FAILURE]: (state, { payload: resError }) => ({
          ...state,
          resError
        })
      },
      initialState,
);

export default res;

