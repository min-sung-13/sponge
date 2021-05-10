require('dotenv').config(); //내용 읽어오기

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';

import api  from './api';
import jwtMiddelware from './lib/jwtMiddleware';


const { PORT, MONGO_URI } =process.env; //env안에있는 포트,몽고URI값 가져오기

//몽고디비 연결
mongoose.connect(MONGO_URI, {useNewUrlParser:true, useFindAndModify:false}).then(()=>{
    console.log('Connected to MongoDB');
    // createDefaultData();
}).catch( e=>{
    console.error(e);
})


const app = new Koa();
const router = new Router();

router.use('/api',api.routes());
app.use(bodyParser());

app.use(jwtMiddelware);// 라우터 적용전에 적어야함

app.use(router.routes()).use(router.allowedMethods());

const port = PORT || 4000;
app.listen(port, () =>{
    console.log(`Listening to port ${port}`);

});