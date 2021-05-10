import Joi from "@hapi/joi";
import Point from '../../models/point';

export const defaultPoint = async (ctx) => {
    // 초기 포인트 설정
    const schema = Joi.object().keys({
        u_id: Joi.string().email().required(),  
        u_getPoint: Joi.number().min(0),
        u_usePoint: Joi.number().min(0)
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { u_id, u_getPoint, u_usePoint, u_updateDate } = ctx.request.body;
    try {
        const point = new Point({
            u_id,
            u_getPoint,
            u_usePoint,
            u_updateDate
        });

        await point.save();
        ctx.body = point;
        console.log(ctx.body.toJSON());
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const selectUser = async (ctx) => {
    // 회원 포인트 찾기 
    // get /api/point/selectUser?u_id=apple@naver.com
    const { user } = ctx.state;

    try {
        const users = await Point.find({"u_id" : user.u_id});
        ctx.body = users.map((user) => user.toJSON()).map((user) => ({
            ...user,
            body: user.body
        }));
        console.log(users);
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const pointList = async (ctx) => {
    // 전체 포인트 리스트
    const { list } = ctx.state;  

    try {
        const users = await Point.find(list);
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
