import Joi from '@hapi/joi';
import likeSign from '../../models/likeSign'
import mongoose from 'mongoose';


const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return;
    }
    return next();
};

export const LikeAndSign = async ctx => {
    const schema = Joi.object().keys({
        ls_type: Joi.string().required(),
        ls_myid: Joi.string().required(),   
        ls_productcode: Joi.string().required(),
        ls_signtext: Joi.string()
    })

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    } 

    const {ls_type, ls_myid, ls_productcode, ls_signtext} = ctx.request.body;
    const likesign = new likeSign({
        ls_type,
        ls_myid,
        ls_productcode,
        ls_signtext
    });
    try{
        await likesign.save();
        ctx.body = likesign;
        ctx.status = 200;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const check = async ctx => {
    const {ls_type, ls_myid, ls_productcode} = ctx.request.body;
    console.log("ls_type : " + ls_type)
    console.log(ls_myid)
    console.log("ls_productcode : " + ls_productcode)
    try{
        const post = await likeSign.find({ls_type: ls_type, ls_myid: ls_myid, ls_productcode:ls_productcode}).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const list = async ctx => {
    const page = parseInt(ctx.query.page || '1', 10);

    if(page < 1){
        ctx.status = 400;
        return;
    }

    try {
        const ls = await likeSign.find()
            .sort({_id: -1})
            .exec();
        const lsCount = await likeSign.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(lsCount / 10))
        ctx.body = ls.map(likesign => likesign.toJSON()).map(likesign => ({
            ...likesign
        }));
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const {ls_type, ls_myid, ls_productcode} = ctx.params;
    console.log(ls_type + ', ' + ls_myid + ", " + ls_productcode + "옴??");
    try{
        await likeSign.selectremove(ls_type, ls_myid, ls_productcode);
        ctx.status = 204;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
    const { id } = ctx.params;
    try{
        const post = await likeSign.findById(id).exec();
    if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};