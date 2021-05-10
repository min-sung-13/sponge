import Joi from "@hapi/joi";
import Advertisement from '../../models/Advertisement';

export const advInfo = async (ctx) => {

    const schema = Joi.object().keys({
        a_userid: Joi.string().required(),
        a_title: Joi.string().required(),
        a_title2: Joi.string().required(),
        a_content: Joi.string().required(),
        a_color: Joi.string().required(),
        a_startdate: Joi.date().default(Date.now()),
        a_enddate: Joi.string().required(),
        a_allow: Joi.string().default("N"),
        a_price: Joi.number(),
        a_img: Joi.string().required()
    });

    const result = schema.validate(ctx.request.body);
    if (result.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    const { a_userid, a_title,a_title2, a_content, a_color, a_startdate, a_enddate, a_allow, a_price, a_img } = ctx.request.body;
    try {
        const adv = new Advertisement({
            a_userid,
            a_title,
            a_content,
            a_color,
            a_startdate,
            a_enddate,
            a_allow,
            a_price,
            a_img,
            a_title2
        });

        await adv.save();
        ctx.body = adv;

        console.log(ctx.body.toJSON());
    } catch (e) {
        ctx.throw(500, e);
    }
};

export const overdate = async (ctx) => {
    const { to_day } = ctx.params;
    try{
        const adv = await Advertisement.find({'a_startdate': {'$lte': new Date(to_day)}, 'a_enddate': {'$gte' : new Date(to_day)}}).sort({'a_startdate': 1}).exec();
        ctx.body = adv.map(ad => ad.toJSON()).map(a => ({ ... a}));

    }catch(e){
        ctx.throw(500, e);
    }
};
export const advList = async (ctx) => {
    try{
        const adv = await Advertisement.find().sort({_id: -1}).exec();
        ctx.body = adv.map(ad => ad.toJSON()).map(a => ({ ... a}));

    }catch(e){
        ctx.throw(500, e);
    }
};

export const confirm = async (ctx) => {
    const{_id} = ctx.params;

    const schema = Joi.object().keys({
        a_allow: Joi.string().required()
    })

    const confirm = schema.validate(ctx.request.body)
    if(confirm.error) {
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try{
        const adv = await Advertisement.findByIdAndUpdate(_id, ctx.request.body,{
            new: true
        }).exec();
        if(!adv){
            ctx.status = 404;
            return;
        }
        ctx.body = adv;
    }catch(e){
        ctx.throw(500, e);
    }
}

export const confirm2 = async ctx => {
    const {_id} = ctx.params;

    const {a_allow2} = ctx.request.body;

    const schema = Joi.object().keys({
        a_allow: Joi.string().required(),   
    })


    const result = schema.validate({a_allow:a_allow2});
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try{
        const adv = await Advertisement.findByIdAndUpdate(_id, {a_allow:a_allow2},{
            new: true
        }).exec();
        if(!adv){
            ctx.status = 404;
            return;
        }
        ctx.body = adv;
    }catch(e){
        ctx.throw(500, e);
    }
}
