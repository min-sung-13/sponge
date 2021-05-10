import Router from 'koa-router';
import * as advCtrl from './adv.ctrl';

const adv = new Router();

adv.get("/", advCtrl.advList);
adv.post("/", advCtrl.advInfo);
adv.get("/:to_day", advCtrl.overdate);

adv.patch("/result/:_id", advCtrl.confirm);
adv.patch("/result2/:_id", advCtrl.confirm2);

export default adv;