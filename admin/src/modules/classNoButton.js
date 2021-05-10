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

export const checkNoLesson = createAction(CHECK_LESSON, ({p_state2, lesson}) => ({
    p_state2, lesson
}));



const checkNoLessonSaga = createRequestSaga(CHECK_LESSON, lessonAPI.checkNoLesson);
export function * lessonNoButtonSaga(){
    yield takeLatest(CHECK_LESSON, checkNoLessonSaga);
}

console.log(CHECK_LESSON+ "@@@");
const initialState = {
    
    upsert:true,
    p_state: 'N',
    project: null,
    projectError: null,
};

const classNoButton = handleActions(
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

export default classNoButton;