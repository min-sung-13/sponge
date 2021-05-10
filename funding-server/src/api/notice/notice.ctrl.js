import Notice from '../../models/Notice';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const { _id } = ctx.params;
    if(!ObjectId.isValid(_id)){
        ctx.status = 400;
        return;
    }
    return next();
};

export const write = async ctx => {
    const schema = Joi.object().keys({
        n_title: Joi.string().required(),
        n_content: Joi.string().required(),
        n_cateCode: Joi.string().required(),
        n_date: Joi.date(),
        n_like: Joi.number().required(),
        n_image: Joi.string().required()
    })

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }
    console.log("======db에 저장되기 전=========");
    const { n_title, n_content, n_cateCode, n_date, n_like, n_image } = ctx.request.body;
    const notice = new Notice({
        n_title, 
        n_content, 
        n_cateCode, 
        n_date, 
        n_like, 
        n_image
    });
    
    try{
        await notice.save();
        ctx.body = notice;
        ctx.status = 200;
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

    try{
        const posts = await Notice.find()
            .sort({ _id: -1 })
            .limit(10)
            .skip((page - 1) * 10)
            .exec();
        const postCount = await Notice.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(postCount / 10))
        console.log(posts);
        console.log("--");
        ctx.body = posts.map(notice => notice.toJSON()).map(notice => ({ 
                ...notice, 
            }));
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
    const { _id } = ctx.params;

    console.log(_id + " : ----------------------")
    try{
        const post = await Notice.findById(_id).exec();
    if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { _id } = ctx.params;
    try {
        await Notice.findByIdAndRemove(_id).exec();
        ctx.status = 204; 
    }catch(e){
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;

    const schema = Joi.object().keys({
        n_title: Joi.string(),
        n_content: Joi.string(),
        n_cateCode: Joi.string(),
        n_date: Joi.date(),
        n_like: Joi.string(),
        n_image: Joi.string()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try {
        const post = await Notice.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();
        if(!post){
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    }catch(e){
        ctx.throw(500, e);
    }
}