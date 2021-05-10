import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as lasAPI from '../lib/api/las';
import { takeLatest } from 'redux-saga/effects';

const INITIALIZE = "write/INITIALIZE"; // 모든 내용 초기화
const [
    WRITE_LAS,
    WRITE_LAS_SUCCESS,
    WRITE_LAS_FAILURE
] = createRequestActionTypes("las/WRITE_LAS");
const [
  DELETE_LAS,
  DELETE_LAS_SUCCESS,
  DELETE_LAS_FAILURE
] = createRequestActionTypes('las/DELETE_LAS');

const[
  LIST_LAS,
  LIST_LAS_SUCCESS,
  LIST_LAS_FAILURE
]= createRequestActionTypes('las/LIST_LAS');

export const initialize = createAction(INITIALIZE);
export const addLas = createAction(
    WRITE_LAS, ({ls_type, ls_myid, ls_productcode, ls_signtext}) => ({ls_type, ls_myid, ls_productcode, ls_signtext})
);
export const deleteLas = createAction(
  DELETE_LAS, ({ls_type, ls_myid, ls_productcode}) => ({ls_type, ls_myid, ls_productcode})
);
export const listLas = createAction(
  LIST_LAS
);


const listLasSaga = createRequestSaga(WRITE_LAS, lasAPI.addLas);
const removeLasSaga = createRequestSaga(DELETE_LAS, lasAPI.deleteLas);
const getListLasSaga = createRequestSaga(LIST_LAS, lasAPI.listLas);

export function* lasSaga() {
    yield takeLatest(WRITE_LAS, listLasSaga);
    yield takeLatest(DELETE_LAS, removeLasSaga);
    yield takeLatest(LIST_LAS, getListLasSaga);
}

const initialState = {
    las: null,
    lasError: null
}

const las = handleActions(
    {
        [INITIALIZE]: (state) => initialState, // initialState를 넣으면 초기상태로 바뀜
        [WRITE_LAS]: (state) => ({
          ...state,
          las: null,
          lasError: null
        }),
        // 포스트 작성 성공
        [WRITE_LAS_SUCCESS]: (state, { payload: las }) => ({
          ...state,
          las
        }),
        // 포스트 작성 실패
        [WRITE_LAS_FAILURE]: (state, { payload: lasError }) => ({
          ...state,
          lasError
        }),
        [DELETE_LAS_SUCCESS]: (state, { payload: las }) => ({
          ...state,
          las
        }),
        [DELETE_LAS_FAILURE]: (state, { payload: lasError }) => ({
          ...state,
          lasError
        }),
        [LIST_LAS_SUCCESS]: (state, { payload: las }) => ({
          ...state,
          las
        }),
        [LIST_LAS_FAILURE]: (state, { payload: lasError }) => ({
          ...state,
          lasError
        })
      },
      initialState,
);

export default las;

