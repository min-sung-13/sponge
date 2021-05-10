import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionTypes } from '../lib/createRequestSaga';
import * as pointAPI from '../lib/api/point';
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_POINTS,
    LIST_POINTS_SUCCESS,
    LIST_POINTS_FAILURE
] = createRequestActionTypes('point/LIST_POINTS');

export const listPoint = createAction(
    LIST_POINTS
);

const listPointSaga = createRequestSaga(LIST_POINTS, pointAPI.listPoint);

export function* pointSaga() {
    yield takeLatest(LIST_POINTS, listPointSaga);
}

const initialState = {
    point: null,
    error: null
}

const point = handleActions(
    {
        [LIST_POINTS_SUCCESS]: (state, { payload: point}) => ({
            ...state,
            point
        }),
        [LIST_POINTS_FAILURE]: (state, { payload: error }) => ({
            ...state,
            error
        })
    },
    initialState
);

export default point;