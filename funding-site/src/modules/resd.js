import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as resAPI from '../lib/api/res';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = "write/INITIALIZE"; // 모든 내용 초기화

const[
  DELETE_RES,
  DELETE_RES_SUCCESS,
  DELETE_RES_FAILURE
]= createRequestActionTypes('res/DELETE_RES');

export const initialize = createAction(INITIALIZE);

export const deleteRes = createAction(
  DELETE_RES, ({_id}) => ({_id})
);

const deleteResSaga = createRequestSaga(DELETE_RES, resAPI.deleteRes);

export function* resdSaga() {
    yield takeLatest(DELETE_RES, deleteResSaga);
}

const initialState = {
    resd: null,
    resError: null
}

const resd = handleActions(
    {
        [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기상태로 바뀜
        [DELETE_RES_SUCCESS]: (state, { payload: resd }) => ({
          ...state,
          resd
        }),
        [DELETE_RES_FAILURE]: (state, { payload: resError }) => ({
          ...state,
          resError
        })
      },
      initialState,
);

export default resd;

