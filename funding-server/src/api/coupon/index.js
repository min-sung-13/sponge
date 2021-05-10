import Router from "koa-router";
import * as couponCtrl from "./coupon.ctrl";

const coupon = new Router();

coupon.post("/registCoupon", couponCtrl.defaultCoupon);
coupon.get("/selectUser", couponCtrl.selectUser);
coupon.get("/", couponCtrl.couponList);

export default coupon;
