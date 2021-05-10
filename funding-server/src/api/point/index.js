import Router from "koa-router";
import * as pointCtrl from './point.ctrl';

const point = new Router();

point.post("/", pointCtrl.defaultPoint);
point.get("/selectUser", pointCtrl.selectUser);
point.get("/", pointCtrl.pointList);

export default point;

