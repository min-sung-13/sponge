import Reservation from '../../models/Reservation';
import mongoose from 'mongoose';
import Joi from '@hapi/joi';

const { ObjectId } = mongoose.Types;

export const checkObjectId = (ctx, next) => {
    const { id } = ctx.params;
    if(!ObjectId.isValid(id)){
        ctx.status = 400;
        return;
    }
    return next();
};


export const book = async ctx => {
    const schema = Joi.object().keys({
        r_code: Joi.string(),
        r_userid: Joi.string(),
        r_price: Joi.number(),
        r_detail: Joi.string(),
        r_phone: Joi.string(),
        r_addr :{
            ad_name: Joi.string(),
            ad_addr1: Joi.string(),
            ad_addr2: Joi.string(),
            ad_addr3: Joi.string(),
            ad_please: Joi.string(),
        },
        r_condition: Joi.string()

    });


const result = schema.validate(ctx.request.body);
if(result.error){
    ctx.status = 400;
    ctx.body = result.error;
    return;

}

const {r_code, r_userid, r_price, r_detail, r_phone, r_addr,  r_condition} = ctx.request.body;

const reservation = new Reservation({
    r_code, 
    r_userid, 
    r_price,
    r_detail, 
    r_phone,
    r_addr,
    r_condition,
});
    try{
        await reservation.save();
        ctx.body = reservation;
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
        const books = await Reservation.find()
        .sort({ _id: -1 })
        .skip((page - 1) * 10)
        .exec();
       
        const bookCount = await Reservation.countDocuments().exec();
        ctx.set('Last-Page', Math.ceil(bookCount / 10))
        console.log(books);
        console.log("--");
        ctx.body = books.map(reservation => reservation.toJSON())
            .map(reservation => ({ 
                ...reservation
            }));
    }catch(e){
        ctx.throw(500, e);
    }
};

export const read = async ctx => {
    const { id } = ctx.params;
    try{
        const reservation = await Reservation.findById(id).exec();
    if(!reservation){
            ctx.status = 404;
            return;
        }
        ctx.body = reservation;
    }catch(e){
        ctx.throw(500, e);
    }
};

export const remove = async ctx => {
    const { _id } = ctx.params;
    try {
        await Reservation.findByIdAndRemove(_id).exec();
        ctx.status = 204; 
    }catch(e){
        ctx.throw(500, e);
    }
};

export const update = async ctx => {
    const { id } = ctx.params;

    const schema = Joi.object().keys({
        r_code: Joi.string(),
        r_userid: Joi.string(),
        r_price: Joi.number(),
        r_detail: Joi.string(),
        r_phone: Joi.string(),
        r_addr :{
            ad_name: Joi.string(),
            ad_addr1: Joi.string(),
            ad_addr2: Joi.string(),
            ad_addr3: Joi.string(),
            ad_please: Joi.string(),
        },
        r_condition: Joi.string()
    });

    const result = schema.validate(ctx.request.body);
    if(result.error){
        ctx.status = 400;
        ctx.body = result.error;
        return;
    }

    try {
        const books = await Reservation.findByIdAndUpdate(id, ctx.request.body, {
            new: true
        }).exec();
        if(!books){
            ctx.status = 404;
            return;
        }
        ctx.body = books;
    }catch(e){
        ctx.throw(500, e);
    }
}
