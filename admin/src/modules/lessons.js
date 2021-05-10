import { createAction, handleActions} from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as lessonAPI from '../lib/api/lesson'
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_LESSONS,
    LIST_LESSONS_SUCCES,
    LIST_LESSONS_FAILURE,
    
] = createRequestActionTypes('lesson/LIST_LESSONS');

export const listLessons = createAction(
    LIST_LESSONS,
    ({p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate,p_target, p_class}) => ({p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate,p_target, p_class})
);

const listLessonsSaga = createRequestSaga(LIST_LESSONS, lessonAPI.listLesson);
export function * lessonsSaga(){
    yield takeLatest(LIST_LESSONS, listLessonsSaga);
}



const initialState = {
    lesson: null,
    error: null,
    lastPage: 1
}

const lessons = handleActions(
    {
        [LIST_LESSONS_SUCCES] : (state, { payload: lessons, meta: response}) => ({
            ...state,
            lessons,
            lastPage: parseInt(response.headers['last-page'], 10)
        }),
        [LIST_LESSONS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default lessons;