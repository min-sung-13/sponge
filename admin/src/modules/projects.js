import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, {createRequestActionTypes} from '../lib/createRequestSaga';
import * as projectAPI from '../lib/api/project'
import { takeLatest } from 'redux-saga/effects';

const [
    LIST_PROJECTS,
    LIST_PROJECTS_SUCCES,
    LIST_PROJECTS_FAILURE,
    
] = createRequestActionTypes('project/LIST_PROJECTS');

export const listProjects = createAction(
    LIST_PROJECTS,
    ({p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate, p_project}) => ({p_code, p_maker, p_title, p_explain, p_startDate, p_lastDate, p_project})
);

const listProjectsSaga = createRequestSaga(LIST_PROJECTS, projectAPI.listProject);
export function * projectsSaga(){
    yield takeLatest(LIST_PROJECTS, listProjectsSaga);
}



const initialState = {
    project: null,
    error: null,
    lastPage: 1
}

const projects = handleActions(
    {
        [LIST_PROJECTS_SUCCES] : (state, { payload: projects, meta: response}) => ({
            ...state,
            projects,
            lastPage: parseInt(response.headers['last-page'], 10)
        }),
        [LIST_PROJECTS_FAILURE] : (state, {payload : error}) => ({
            ...state,
            error
        }),
        
    },
    initialState
);

export default projects;