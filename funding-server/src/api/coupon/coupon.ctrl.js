import Joi from "@hapi/joi";
import Coupon from '../../models/coupon';

export const defaultCoupon = async (ctx) => {
    // 초기 쿠폰 설정
    const schema = Joi.object().keys({
        u_id: Joi.string().email().required(),  
        coupon_name: Joi.string().required(),
        coupon_explain: Joi.string().required(),
        coupon_minpaymoney: Joi.number().min(5000).required(),
        coupon_price: Joi.number().min(2000).required(),
        coupon_enddate: Joi.date().min(Date.now()).required()
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { u_id, coupon_name, coupon_explain, coupon_minpaymoney, coupon_price, coupon_enddate } = ctx.request.body;

    const coupon = new Coupon({
        u_id,
        coupon_name,
        coupon_explain,
        coupon_minpaymoney,
        coupon_price,
        coupon_enddate
    });

    try {
        await coupon.save(); 
        ctx.body = coupon;
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const selectUser = async (ctx) => {
    // 회원별 정보 찾기 
    // get /api/coupon/selectUser?u_id=apple@naver.com
    const { user } = ctx.state;     // params로 준 u_id 값 받아오기

    try {
        const users = await Coupon.find({"u_id" : user.u_id});
        ctx.body = users
        .map((user) => user.toJSON())
        .map((user) => ({
            ...user,
            body: user.body
        }));
        console.log(users);
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const couponList = async (ctx) => {
    // 전체 포인트 리스트
    const { list } = ctx.state;  

    try {
        const users = await Coupon.find(list);
        ctx.body = users
        .map((user) => user.toJSON())
        .map((user) => ({
            ...user,
            body: user.body
        }));
    } catch (e) {
        ctx.throw(500, e);
    }
};