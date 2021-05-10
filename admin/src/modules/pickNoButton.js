import {createAction, handleActions} from 'redux-actions';
import createRequestSaga, { createRequestActionTypes} from '../lib/createRequestSaga';
import * as lessonAPI from '../lib/api/lesson';
import { takeLatest} from 'redux-saga/effects';

const INITIALIZE = 'check/INITIALIZE';
const CHANGE_FIELD = 'check/CHANGE_FIELD';

const [
    CHECK_LESSON,
    CHECK_LESSON_SUCCESS,
    CHECK_LESSON_FAILURE
] = createRequestActionTypes('check/CHECK_LESSON');

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({key, value})=> ({
    key,
    value
}));

export const checkNoPick = createAction(CHECK_LESSON, ({p_pick2, lesson}) => ({
    p_pick2, lesson
}));



const checkNoPickSaga = createRequestSaga(CHECK_LESSON, lessonAPI.checkNoPick);
export function * pickNoButtonSaga(){
    yield takeLatest(CHECK_LESSON, checkNoPickSaga);
}


const initialState = {
    
    upsert:true,
    p_pick: 'N',
    project: null,
    projectError: null,
};

const pickNoButton = handleActions(
    {
        [INITIALIZE] : state => initialState,
        [CHANGE_FIELD] : (state, { payload: {key, value}}) => ({
            ...state,
            [key] : value
        }),
        [CHECK_LESSON] : state => ({
            ...state,
            lesson: null,
            lessonError: null
        }),
        [CHECK_LESSON_SUCCESS] : (state, {payload: lesson,}) => ({
            ...state,
            lesson
    
        }),
        [CHECK_LESSON_FAILURE] : (state, {payload : lessonError}) =>({
            ...state,
            lessonError
        }),
    },
    initialState
);

export default pickNoButton;