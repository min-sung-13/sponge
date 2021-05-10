import { combineReducers } from 'redux';
import auths, { authsSaga } from './auths';
import loading from './loading';
import { all } from 'redux-saga/effects';
//import user, { userSaga } from './user';
import write, { writeSaga } from './write';
import notice, { noticeSaga } from './notice';
import notices, { noticesSaga } from './notices';
import remove, {removeSaga} from './remove';
import projects, {projectsSaga} from './projects';
import lessons, {lessonsSaga} from './lessons';
import advertises, {advertisesSaga} from'./advertises';
import checkButton, {checkSaga} from './checkButton'
import checkNoButton, {checkNoSaga} from './checkNoButton';
import classButton, {lessonButtonSaga} from './classButton';
import classNoButton, {lessonNoButtonSaga} from'./classNoButton';
import allowButton, {allowSaga} from './allowButton'
import allowNoButton, {allowNoSaga} from './allowNoButton'
import noticeEdit, {editNoticeSaga} from './noticeEdit';
import pickButton, {pickButtonSaga} from './pickButton'
import pickNoButton, {pickNoButtonSaga} from './pickNoButton'
import pickButton2, {pickButton2Saga} from './pickButton2'
import pickNoButton2 , {pickNoButton2Saga} from './pickNoButton2'

const rootReducer = combineReducers({
    auths,
    loading,
    write,
    notice,
    notices,
    remove,
    projects,
    lessons,
    advertises,
    checkButton,
    checkNoButton,
    classButton,
    classNoButton,
    allowButton,
    allowNoButton,
    noticeEdit,
    pickButton,
    pickNoButton,
    pickButton2,
    pickNoButton2
});

export function * rootSaga(){
    yield all([authsSaga(),  writeSaga(), noticeSaga(), noticesSaga(), removeSaga(), projectsSaga(), lessonsSaga(), advertisesSaga(), checkSaga(), checkNoSaga(), lessonButtonSaga(),lessonNoButtonSaga(),allowSaga(),allowNoSaga(),editNoticeSaga(),pickButtonSaga(),pickNoButtonSaga(),pickButton2Saga(),pickNoButton2Saga()]);
}

export default rootReducer;