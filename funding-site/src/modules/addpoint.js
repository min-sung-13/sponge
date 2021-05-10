import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as pointAPI from '../lib/api/point';
import { takeLatest } from 'redux-saga/effects';

const [
    ADD_POINT,
    ADD_POINT_SUCCESS,
    ADD_POINT_FAILURE
] = createRequestActionTypes('addpoint/ADD_POINT');

export const addpointm = createAction(
    ADD_POINT, ({ u_id, u_getPoint, u_usePoint}) => ({ u_id, u_getPoint, u_usePoint})
)

const addPointSaga = createRequestSaga(ADD_POINT, pointAPI.addpointm);

export function* addpointSaga() {
    yield takeLatest(ADD_POINT, addPointSaga);
}

const initialState = {
    addpoint: null,
    error: null
}

const addpoint = handleActions(
    {
        [ADD_POINT_SUCCESS]: (state, { payload: addpoint}) => ({
            ...state,
            addpoint
        }),
        [ADD_POINT_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default addpoint;