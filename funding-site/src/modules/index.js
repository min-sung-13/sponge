import { combineReducers } from 'redux';
import loading from './loading';
import { all } from 'redux-saga/effects';
import user, { userSaga } from './user';
import join, { registerSaga } from './join';
import pac, { pacSaga } from './pac';
import pacs, { pacsSaga } from './pacs';
import adv, { advSaga } from './adv';
import makeAdv, { regAdvSaga } from './makeAdv';
import jpacs, { jpacsSaga } from './m_pacs/jupacs';
import hpacs, { hpacsSaga } from './m_pacs/hitpacs';
import npacs, { npacsSaga } from './m_pacs/newpacs';
import spacs, { spacsSaga } from './m_pacs/sucpacs';
import las, { lasSaga } from './las';
import res, { resSaga } from './res';
import makepac, {makepacSaga} from './makepac';
import write, { writeSaga } from './write';
import login, { loginSaga } from './login';
import update, { updateSaga } from './update';
import point, {pointSaga} from './point';
import addpoint, {addpointSaga} from './addpoint';
import notice, {noticeSaga} from './notice/notice';
import notices, {noticesSaga} from './notice/notices';

const rootReducer = combineReducers({
    join,
    login,
    update,
    loading,
    user,
    write,
    pacs,
    jpacs,
    pac,
    hpacs,
    npacs,
    spacs,
    adv,
    makeAdv,
    las,
    res,
    makepac,
    point,
    addpoint,
    notice,
    notices
});

export function* rootSaga(){
    yield all([registerSaga(), userSaga(), pacsSaga(), pacSaga(), loginSaga(), pacsSaga(), pacSaga(), jpacsSaga(), hpacsSaga(), npacsSaga(), spacsSaga(), advSaga(), regAdvSaga(), lasSaga(), resSaga(), makepacSaga(), writeSaga(), updateSaga(), pointSaga(), addpointSaga(), noticeSaga(), noticesSaga()]);
}

export default rootReducer;