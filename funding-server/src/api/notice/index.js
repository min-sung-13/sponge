import Router from 'koa-router';
import * as noticeCtrl from './notice.ctrl';

const notice = new Router();

notice.get('/', noticeCtrl.list);
// notice.get('/detail', noticeCtrl.list);
notice.post('/', noticeCtrl.write);
notice.get('/detail/:_id', noticeCtrl.checkObjectId, noticeCtrl.read);
notice.delete('/del/:_id', noticeCtrl.checkObjectId, noticeCtrl.remove);
notice.patch('/:id', noticeCtrl.checkObjectId, noticeCtrl.update);

export default notice; 