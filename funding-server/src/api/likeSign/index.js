import Router from 'koa-router';
import * as likeSignCtrl from './likeSign.ctrl';

const ls = new Router();

ls.get('/', likeSignCtrl.list);
ls.post('/', likeSignCtrl.LikeAndSign);
ls.post('/check', likeSignCtrl.check);
ls.delete('/:ls_type/:ls_myid/:ls_productcode', likeSignCtrl.remove);
ls.get('/:id', likeSignCtrl.checkObjectId, likeSignCtrl.read);

export default ls;
